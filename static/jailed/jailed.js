/**
 * @fileoverview Jailed - safe yet flexible sandbox
 * @version 0.3.1
 *
 * @license MIT, see http://github.com/asvd/jailed
 * Copyright (c) 2014 asvd <heliosframework@gmail.com>
 *
 * Main library script, the only one to be loaded by a developer into
 * the application. Other scrips shipped along will be loaded by the
 * library either here (application site), or into the plugin site
 * (Worker/child process):
 *
 *  _JailedSite.js    loaded into both applicaiton and plugin sites
 *  _frame.html       sandboxed frame (web)
 *  _frame.js         sandboxed frame code (web)
 *  _pluginWebWorker.js  platform-dependent plugin routines (web / worker)
 *  _pluginWebIframe.js  platform-dependent plugin routines (web / iframe)
 *  _pluginNode.js    platform-dependent plugin routines (Node.js)
 *  _pluginCore.js    common plugin site protocol implementation
 */

import { randId, assert, compareVersions, Whenable } from "../utils.js";
import { getBackendByType } from "../jailed/backends.js";

import DOMPurify from "dompurify";

var __jailed__path__;
var __is__node__ =
  typeof process !== "undefined" &&
  !process.browser &&
  process.release.name.search(/node|io.js/) !== -1;
if (__is__node__) {
  // Node.js
  __jailed__path__ = __dirname + "/";
} else {
  // web
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    __jailed__path__ = `${location.protocol}//${location.hostname}${
      location.port ? ":" + location.port : ""
    }/static/jailed/`;
  } else {
    __jailed__path__ = location.protocol + "//lib.imjoy.io/static/jailed/";
  }
  // var scripts = document.getElementsByTagName("script");
  // __jailed__path__ = scripts[scripts.length-1].src
  //     .split('?')[0]
  //     .split('/')
  //     .slice(0, -1)
  //     .join('/')+'/static/jailed/';
}

/**
 * Initializes the library site for web environment (loads
 * _JailedSite.js)
 */
var platformInit;
var initWeb = function() {
  // loads additional script to the application environment
  var load = function(path, cb) {
    var script = document.createElement("script");
    script.src = path;

    var clear = function() {
      script.onload = null;
      script.onerror = null;
      script.onreadystatechange = null;
      script.parentNode.removeChild(script);
    };

    var success = function() {
      clear();
      cb();
    };

    script.onerror = clear;
    script.onload = success;
    script.onreadystatechange = function() {
      var state = script.readyState;
      if (state === "loaded" || state === "complete") {
        success();
      }
    };

    document.body.appendChild(script);
  };

  platformInit = new Whenable();
  // var origOnload = window.onload || function(){};
  var wload = function() {
    // origOnload();
    load(__jailed__path__ + "_JailedSite.js", function() {
      platformInit.emit();
    });
  };
  window.addEventListener("load", wload, false);
};

if (__is__node__) {
  throw "nodejs is not supported.";
} else {
  initWeb();
}

/**
 * Application-site Connection object constructon, reuses the
 * platform-dependent BasicConnection declared above in order to
 * communicate with the plugin environment, implements the
 * application-site protocol of the interraction: provides some
 * methods for loading scripts and executing the given code in the
 * plugin
 */
var Connection = function(id, type, config) {
  const backend = getBackendByType(type);
  if (backend) {
    config.__jailed__path__ = __jailed__path__;
    this._platformConnection = new backend.connection(id, type, config);
  } else {
    throw `Unsupported backend type (${type})`;
  }

  this._importCallbacks = {};
  this._executeSCb = function() {};
  this._executeFCb = function() {};
  this._messageHandler = function() {};

  var me = this;
  this.whenInit = function(cb) {
    me._platformConnection.whenInit(cb);
  };

  this.whenFailed = function(cb) {
    me._platformConnection.whenFailed(cb);
  };

  this._platformConnection.onMessage(function(m) {
    switch (m.type) {
      case "message":
        me._messageHandler(m.data);
        break;
      case "importSuccess":
        me._handleImportSuccess(m.url);
        break;
      case "importFailure":
        me._handleImportFailure(m.url, m.error);
        break;
      case "executeSuccess":
        me._executeSCb();
        break;
      case "executeFailure":
        me._executeFCb(m.error);
        break;
    }
  });
};

/**
 * @returns {Boolean} true if a connection obtained a dedicated
 * thread (subprocess in Node.js or a subworker in browser) and
 * therefore will not hang up on the infinite loop in the
 * untrusted code
 */
Connection.prototype.hasDedicatedThread = function() {
  return this._platformConnection.dedicatedThread;
};

/**
 * Tells the plugin to load a script with the given path, and to
 * execute it. Callbacks executed upon the corresponding responce
 * message from the plugin site
 *
 * @param {String} path of a script to load
 * @param {Function} sCb to call upon success
 * @param {Function} fCb to call upon failure
 */
Connection.prototype.importScript = function(path, sCb, fCb) {
  var f = function() {};
  this._importCallbacks[path] = { sCb: sCb || f, fCb: fCb || f };
  this._platformConnection.send({ type: "import", url: path });
};

/**
 * Tells the plugin to load a script with the given path, and to
 * execute it in the JAILED environment. Callbacks executed upon
 * the corresponding responce message from the plugin site
 *
 * @param {String} path of a script to load
 * @param {Function} sCb to call upon success
 * @param {Function} fCb to call upon failure
 */
Connection.prototype.importJailedScript = function(path, sCb, fCb) {
  var f = function() {};
  this._importCallbacks[path] = { sCb: sCb || f, fCb: fCb || f };
  this._platformConnection.send({ type: "importJailed", url: path });
};

/**
 * Sends the code to the plugin site in order to have it executed
 * in the JAILED enviroment. Assuming the execution may only be
 * requested once by the Plugin object, which means a single set
 * of callbacks is enough (unlike importing additional scripts)
 *
 * @param {String} code code to execute
 * @param {Function} sCb to call upon success
 * @param {Function} fCb to call upon failure
 */
Connection.prototype.execute = function(code) {
  return new Promise((resolve, reject) => {
    this._executeSCb = resolve;
    this._executeFCb = reject;
    this._platformConnection.send({ type: "execute", code: code });
  });
};

/**
 * Adds a handler for a message received from the plugin site
 *
 * @param {Function} handler to call upon a message
 */
Connection.prototype.onMessage = function(handler) {
  this._messageHandler = handler;
};

/**
 * Adds a handler for a disconnect message received from the
 * plugin site
 *
 * @param {Function} handler to call upon disconnect
 */
Connection.prototype.onDisconnect = function(handler) {
  this._platformConnection.onDisconnect(handler);
};

/**
 * Sends a message to the plugin
 *
 * @param {Object} data of the message to send
 */
Connection.prototype.send = function(data, transferables) {
  this._platformConnection.send(
    {
      type: "message",
      data: data,
    },
    transferables
  );
};

/**
 * Handles import succeeded message from the plugin
 *
 * @param {String} url of a script loaded by the plugin
 */
Connection.prototype._handleImportSuccess = function(url) {
  var sCb = this._importCallbacks[url].sCb;
  this._importCallbacks[url] = null;
  delete this._importCallbacks[url];
  sCb();
};

/**
 * Handles import failure message from the plugin
 *
 * @param {String} url of a script loaded by the plugin
 */
Connection.prototype._handleImportFailure = function(url, error) {
  var fCb = this._importCallbacks[url].fCb;
  this._importCallbacks[url] = null;
  delete this._importCallbacks[url];
  fCb(error);
};

/**
 * Disconnects the plugin when it is not needed anymore
 */
Connection.prototype.disconnect = function() {
  if (this._platformConnection) {
    this._platformConnection.disconnect();
  }
};

/**
 * Plugin constructor, represents a plugin initialized by a script
 * with the given path
 *
 * @param {String} url of a plugin source
 * @param {Object} _interface to provide for the plugin
 */
var Plugin = function(config, _interface, _fs_api, is_proxy) {
  this.config = config;
  this.id = config.id || randId();
  this._id = config._id;
  this.name = config.name;
  this.type = config.type;
  this.tag = config.tag;
  this.tags = config.tags;
  this.type = config.type || "web-worker";
  this._path = config.url;
  this._disconnected = true;
  this.initializing = false;
  this.running = false;
  this._log_history = [];
  this._onclose_callbacks = [];
  this._updateUI =
    (_interface && _interface.utils && _interface.utils.$forceUpdate) ||
    function() {};
  if (is_proxy) {
    this._disconnected = false;
  } else {
    this._disconnected = true;
    this._bindInterface(_interface);
    for (let k in _fs_api) this._initialInterface[k] = _fs_api[k];
    this._connect();
  }
  this._updateUI();
};

/**
 * DynamicPlugin constructor, represents a plugin initialized by a
 * string containing the code to be executed
 *
 * @param {String} code of the plugin
 * @param {Object} _interface to provide to the plugin
 */
var DynamicPlugin = function(config, _interface, _fs_api, is_proxy) {
  this.config = config;
  if (!this.config.script) {
    throw "you must specify the script for the plugin to run.";
  }
  this.id = config.id || randId();
  this._id = config._id;
  this.name = config.name;
  this.type = config.type;
  this.tag = config.tag;
  this.tags = config.tags;
  this.type = config.type || "web-worker";
  this.initializing = false;
  this.running = false;
  this._log_history = [];
  this._onclose_callbacks = [];
  this._is_proxy = is_proxy;
  this._updateUI =
    (_interface && _interface.utils && _interface.utils.$forceUpdate) ||
    function() {};
  if (is_proxy) {
    this._disconnected = false;
  } else {
    this._disconnected = true;
    this._bindInterface(_interface);
    for (let k in _fs_api) this._initialInterface[k] = _fs_api[k];
    this._connect();
  }
  this._updateUI();
};
/**
 * Set the plugin engine
 */
DynamicPlugin.prototype.setEngine = Plugin.prototype.setEngine = function(
  engine
) {
  this.config.engine = engine;
};
/**
 * Bind the first argument of all the interface functions to this plugin
 */
DynamicPlugin.prototype._bindInterface = Plugin.prototype._bindInterface = function(
  _interface
) {
  _interface = _interface || {};
  this._initialInterface = {};
  // bind this plugin to api functions
  for (var k in _interface) {
    if (typeof _interface[k] === "function") {
      this._initialInterface[k] = _interface[k].bind(null, this);
    } else if (typeof _interface[k] === "object") {
      var utils = {};
      for (var u in _interface[k]) {
        if (typeof _interface[k][u] === "function") {
          utils[u] = _interface[k][u].bind(null, this);
        }
      }
      this._initialInterface[k] = utils;
    } else {
      this._initialInterface[k] = _interface[k];
    }
  }
};
/**
 * Creates the connection to the plugin site
 */
DynamicPlugin.prototype._connect = Plugin.prototype._connect = function() {
  this.remote = null;
  this.api = null;

  this._connect = new Whenable();
  this._fail = new Whenable();
  this._disconnect = new Whenable();

  var me = this;

  // binded failure callback
  this._fCb = function(error) {
    me._fail.emit(error);
    me.disconnect();
    me.initializing = false;
    if (error) me.error(error.toString());
    if (me.config.type === "window" && me.config.iframe_container) {
      const container = document.getElementById(me.config.iframe_container);
      container.innerHTML = `<h5>Oops! failed to load the window.</h5><code>Details: ${DOMPurify.sanitize(
        String(error)
      )}</code>`;
    }
    me._updateUI();
  };

  platformInit.whenEmitted(function() {
    if (
      me.type == "native-python" &&
      (!me.config.engine || !me.config.engine.socket)
    ) {
      me._fail.emit("Please connect to the Plugin Engine 🚀.");
      me._connection = null;
    } else {
      me._connection = new Connection(me.id, me.type, me.config);
      me.initializing = true;
      me._updateUI();
      me._connection.whenInit(function() {
        me._init();
      });
      me._connection.whenFailed(function(e) {
        me._fail.emit(e);
      });
      if (me.type == "native-python") {
        me._connection._platformConnection.onLogging(function(details) {
          if (details.type === "error") {
            me.error(details.value);
          } else if (details.type === "progress") {
            me.progress(details.value);
          } else if (details.type === "info") {
            me.log(details.value);
          } else {
            console.log(details.value);
          }
        });
      }
      me._connection.onDisconnect(function(details) {
        if (details) {
          if (details.success) {
            me.log(details.message);
          } else {
            me.error(details.message);
          }
        }
        if (me._connection._platformConnection._frame) {
          var iframe_container = document.getElementById(
            me._connection._platformConnection._frame.id
          );
          iframe_container.parentNode.removeChild(iframe_container);
        }
        me._set_disconnected();
        // me.terminate()
      });
    }
  });
};

/**
 * Creates the Site object for the plugin, and then loads the
 * common routines (_JailedSite.js)
 */
DynamicPlugin.prototype._init = Plugin.prototype._init = function() {
  const backend = getBackendByType(this.type);
  assert(backend);
  var lang = backend.lang;

  /*global JailedSite*/
  this._site = new JailedSite(this._connection, this.id, lang);

  var me = this;
  this._site.onDisconnect(function(details) {
    me._disconnect.emit();
    if (details) {
      if (details.success) {
        me.log(details.message);
      } else {
        me.error(details.message);
      }
    }
    me._set_disconnected();
  });

  this._site.onRemoteReady(function() {
    if (me.running) {
      me.running = false;
      me._updateUI();
    }
  });

  this._site.onRemoteBusy(function() {
    if (!me._disconnected && !me.running) {
      me.running = true;
      me._updateUI();
    }
  });

  this.getRemoteCallStack = this._site.getRemoteCallStack;

  if (backend.type === "external") {
    this._sendInterface();
  } else if (backend.type === "internal") {
    var sCb = function() {
      me._loadCore();
    };
    this._connection.importScript(
      __jailed__path__ + "_JailedSite.js",
      sCb,
      this._fCb
    );
  } else {
    throw `Unsupported backend type ${backend.type}`;
  }
};

/**
 * Loads the core scirpt into the plugin
 */
DynamicPlugin.prototype._loadCore = Plugin.prototype._loadCore = function() {
  var me = this;
  var sCb = function() {
    me._sendInterface();
  };

  this._connection.importScript(
    __jailed__path__ + "_pluginCore.js",
    sCb,
    this._fCb
  );
};

/**
 * Sends to the remote site a signature of the interface provided
 * upon the Plugin creation
 */
DynamicPlugin.prototype._sendInterface = Plugin.prototype._sendInterface = function() {
  var me = this;
  this._site.onInterfaceSetAsRemote(function() {
    if (!me._connected) {
      me._loadPlugin();
    }
  });

  this._site.setInterface(this._initialInterface);
};

/**
 * Loads the plugin body (loads the plugin url in case of the
 * Plugin)
 */
Plugin.prototype._loadPlugin = function() {
  this._requestRemote();
  var me = this;
  var sCb = function() {
    me._requestRemote();
  };

  this._connection.importJailedScript(this._path, sCb, this._fCb);
};

/**
 * Loads the plugin body (executes the code in case of the
 * DynamicPlugin)
 */
DynamicPlugin.prototype._loadPlugin = async function() {
  try {
    if (
      this.config.type === "native-python" &&
      this.config.engine &&
      this.config.engine.engine_info
    ) {
      if (
        this.config.engine.engine_info.api_version &&
        compareVersions(
          this.config.engine.engine_info.api_version,
          ">",
          "0.1.0"
        )
      ) {
        if (this.config.requirements) {
          await this._connection.execute({
            type: "requirements",
            lang: this.config.lang,
            requirements: this.config.requirements,
            env: this.config.env,
          });
        }
        for (let i = 0; i < this.config.scripts.length; i++) {
          await this._connection.execute({
            type: "script",
            content: this.config.scripts[i].content,
            lang: this.config.scripts[i].attrs.lang,
            attrs: this.config.scripts[i].attrs,
            src: this.config.scripts[i].attrs.src,
          });
        }
      } else {
        assert(
          this.config.scripts.length === 1,
          "only 1 script block is supported"
        );
        await this._connection.execute({
          type: "script",
          main: true,
          content: this.config.scripts[0].content,
          lang: this.config.lang,
          requirements: this.config.requirements || [],
          env: this.config.env,
        });
      }
    } else {
      if (this.config.requirements) {
        await this._connection.execute({
          type: "requirements",
          lang: this.config.lang,
          requirements: this.config.requirements,
          env: this.config.env,
        });
      }
      if (
        this.config.type === "iframe" ||
        this.config.type === "window" ||
        this.config.type === "web-python-window"
      ) {
        for (let i = 0; i < this.config.styles.length; i++) {
          await this._connection.execute({
            type: "style",
            content: this.config.styles[i].content,
            attrs: this.config.styles[i].attrs,
            src: this.config.styles[i].attrs.src,
          });
        }
        for (let i = 0; i < this.config.links.length; i++) {
          await this._connection.execute({
            type: "link",
            rel: this.config.links[i].attrs.rel,
            type_: this.config.links[i].attrs.type,
            attrs: this.config.links[i].attrs,
            href: this.config.links[i].attrs.href,
          });
        }
        for (let i = 0; i < this.config.windows.length; i++) {
          await this._connection.execute({
            type: "html",
            content: this.config.windows[i].content,
            attrs: this.config.windows[i].attrs,
          });
        }
      }
      for (let i = 0; i < this.config.scripts.length; i++) {
        await this._connection.execute({
          type: "script",
          content: this.config.scripts[i].content,
          lang: this.config.scripts[i].attrs.lang,
          attrs: this.config.scripts[i].attrs,
          src: this.config.scripts[i].attrs.src,
        });
      }
    }
    this._requestRemote();
  } catch (e) {
    this._fCb((e && e.toString()) || "Error");
  }
};

/**
 * Requests the remote interface from the plugin (which was
 * probably set by the plugin during its initialization), emits
 * the connect event when done, then the plugin is fully usable
 * (meaning both the plugin and the application can use the
 * interfaces provided to each other)
 */
DynamicPlugin.prototype._requestRemote = Plugin.prototype._requestRemote = function() {
  var me = this;
  this._site.onRemoteUpdate(function() {
    me.remote = me._site.getRemote();
    me.api = me.remote;
    me.api.__jailed_type__ = "plugin_api";
    me.api.__id__ = me.id;
    me._disconnected = false;
    me.initializing = false;
    me._updateUI();
    me._connect.emit();
  });

  this._site.requestRemote();
};

/**
 * @returns {Boolean} true if a plugin runs on a dedicated thread
 * (subprocess in Node.js or a subworker in browser) and therefore
 * will not hang up on the infinite loop in the untrusted code
 */
DynamicPlugin.prototype.hasDedicatedThread = Plugin.prototype.hasDedicatedThread = function() {
  return this._connection.hasDedicatedThread();
};

/**
 * Disconnects the plugin immideately
 */
DynamicPlugin.prototype.disconnect = Plugin.prototype.disconnect = function() {
  this._connection.disconnect();
  this._disconnect.emit();
};

/**
 * Saves the provided function as a handler for the connection
 * failure Whenable event
 *
 * @param {Function} handler to be issued upon disconnect
 */
DynamicPlugin.prototype.whenFailed = Plugin.prototype.whenFailed = function(
  handler
) {
  this._fail.whenEmitted(handler);
};

/**
 * Saves the provided function as a handler for the connection
 * success Whenable event
 *
 * @param {Function} handler to be issued upon connection
 */
DynamicPlugin.prototype.whenConnected = Plugin.prototype.whenConnected = function(
  handler
) {
  this._connect.whenEmitted(handler);
};

/**
 * Saves the provided function as a handler for the connection
 * failure Whenable event
 *
 * @param {Function} handler to be issued upon connection failure
 */
DynamicPlugin.prototype.whenDisconnected = Plugin.prototype.whenDisconnected = function(
  handler
) {
  this._disconnect.whenEmitted(handler);
};

DynamicPlugin.prototype._set_disconnected = Plugin.prototype._set_disconnected = function() {
  this._disconnected = true;
  this.running = false;
  this.initializing = false;
  this._updateUI();
};

DynamicPlugin.prototype.terminate = Plugin.prototype.terminate = async function() {
  if (this._disconnected) {
    this._set_disconnected();
    return;
  }

  try {
    await Promise.all(this._onclose_callbacks.map(item => item()));
  } catch (e) {
    console.error(e);
  }

  try {
    if (this.api && this.api.exit && typeof this.api.exit == "function") {
      await this.api.exit();
    }
  } catch (e) {
    console.error("error occured when terminating the plugin", e);
  } finally {
    this._set_disconnected();
    if (this._site) {
      this._site.disconnect();
      this._site = null;
    }
    if (this._connection) {
      this._connection.disconnect();
      this._connection = null;
    }
  }
};

DynamicPlugin.prototype.onClose = Plugin.prototype.onClose = function(cb) {
  this._onclose_callbacks.push(cb);
};

DynamicPlugin.prototype.log = Plugin.prototype.log = function(msg) {
  if (typeof msg === "object") {
    this._log_history.push(msg);
    console.log(`Plugin ${this.id}:`, msg);
  } else {
    const args = Array.prototype.slice.call(arguments).join(" ");
    this._log_history._info = args.slice(0, 100);
    this._log_history.push({ type: "info", value: args });
    console.log(`Plugin ${this.id}: ${args}`);
  }
};

DynamicPlugin.prototype.error = Plugin.prototype.error = function() {
  const args = Array.prototype.slice.call(arguments).join(" ");
  this._log_history._error = args.slice(0, 100);
  this._log_history.push({ type: "error", value: args });
  console.error(`Error in Plugin ${this.id}: ${args}`);
};

DynamicPlugin.prototype.progress = Plugin.prototype.progress = function(p) {
  if (p < 1) this._progress = p * 100;
  else this._progress = p;
};

export { DynamicPlugin, Plugin };
