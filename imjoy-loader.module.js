module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/imjoyLoader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/imjoyLoader.js":
/*!****************************!*\
  !*** ./src/imjoyLoader.js ***!
  \****************************/
/*! exports provided: loadImJoyCore, loadImJoyRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImJoyCore", function() { return loadImJoyCore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImJoyRPC", function() { return loadImJoyRPC; });
function _injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.addEventListener("load", resolve);
    script.addEventListener("error", () => {
      document.head.removeChild(script);
      reject("Error loading script.");
    });
    script.addEventListener("abort", () => reject("Script loading aborted."));
    document.head.appendChild(script);
  });
}

// Load the imjoy core script
// it support the following options:
// 1) version, you can specify a specific version of the core,
// for example `version: "0.11.13"` or `version: "latest"`
// 2) debug, by default, the minified version will be used,
// if debug==true, the full version will be served
// 3) base_url, the url for loading the core library
function loadImJoyCore(config) {
  config = config || {};
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      var baseUrl = config.base_url;
      if (!baseUrl) {
        const version = config.version || "latest";
        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-core@${version}/dist/`;
      }
      if (config.debug) {
        await _injectScript(baseUrl + "imjoy-core.js");
      } else {
        await _injectScript(baseUrl + "imjoy-core.min.js");
      }
      // eslint-disable-next-line no-undef
      if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"))
        eval("require")(["imjoyCore"], resolve);
      else if (window["imjoyCore"]) resolve(window["imjoyCore"]);
      else reject("Failed to import imjoy-core.");
    } catch (e) {
      reject(e);
    }
  });
}
const _rpc_registry = {};
const _rpc_api_versions = {
  "0.2.0": { from: "0.1.10", to: "latest", skips: [] },
};

// specify an api version and this function will return the actual imjoy-rpc version
// if you set latestOnly to true, then it returns always the latest for the api version
// otherwise, it will try to find a compatible version in the cached version.
function findRPCVersionByAPIVersion(apiVersion, latestOnly) {
  if (!apiVersion || !apiVersion.includes(".")) return;
  let cached = Object.keys(_rpc_registry);
  if (_rpc_api_versions[apiVersion]) {
    if (cached.length <= 0 || latestOnly) {
      return _rpc_api_versions[apiVersion].to;
    }
    // see if we can find a compatible version in the cache
    // sort the cached version
    cached = (f => f(f(cached, 1).sort(), -1))((cached, v) =>
      cached.map(a => a.replace(/\d+/g, n => +n + v * 100000))
    );
    for (let c of cached.reverse()) {
      if (_rpc_registry[c].API_VERSION === apiVersion) return c;
    }
    return _rpc_api_versions[apiVersion].to;
  } else {
    return null;
  }
}
// Load the script for a plugin to communicate with imjoy-rpc
// This should only be called when the window is inside the iframe
// it support the following options:
// 1) version, you can specify a specific version of the imjoy-rpc,
// for example `version: "0.11.13"` or `version: "latest"`
// 2) api_version, specify the api version of the imjoy-rpc
// 3) debug, by default, the minified version will be used,
// if debug==true, the full version will be served
// 4) base_url, the url for loading the rpc library
function loadImJoyRPC(config) {
  config = config || {};
  return new Promise((resolve, reject) => {
    var baseUrl = config.base_url;
    let version = config.version;
    if (!baseUrl) {
      if (config.version) {
        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${
          config.version
        }/dist/`;
      } else {
        if (config.api_version) {
          // find the latest version for this api_version
          version = findRPCVersionByAPIVersion(config.api_version, true);
          if (version) {
            baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${version}/dist/`;
          } else {
            reject(
              Error(
                `Cannot find a version of imjoy-rpc that supports api v${
                  config.api_version
                }`
              )
            );
            return;
          }
        } else {
          baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@latest/dist/`;
          version = "latest";
          console.info(`Using imjoy-rpc library from ${baseUrl}.`);
        }
      }
    }

    if (version && _rpc_registry[version]) {
      console.info(`Using cached imjoy-rpc library v${version}.`);
      resolve(_rpc_registry[version]);
      return;
    }

    let rpc_url = baseUrl + "imjoy-rpc.min.js";
    if (config.debug) {
      rpc_url = baseUrl + "imjoy-rpc.js";
    }
    function checkAndCacheLib(imjoyRPC) {
      if (version && version !== "latest" && version !== imjoyRPC.VERSION) {
        throw new Error(
          `imjoy-rpc version mismatch ${version} != ${imjoyRPC.VERSION}`
        );
      }
      if (config.api_version && config.api_version !== imjoyRPC.API_VERSION) {
        throw new Error(
          `imjoy-rpc api version mismatch ${config.api_version} != ${
            imjoyRPC.API_VERSION
          }`
        );
      }
      _rpc_registry[imjoyRPC.VERSION] = imjoyRPC;
    }
    _injectScript(rpc_url)
      .then(() => {
        // eslint-disable-next-line no-undef
        if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"))
          eval("require")(["imjoyRPC"], imjoyRPC => {
            try {
              checkAndCacheLib(imjoyRPC);
              resolve(imjoyRPC);
            } catch (e) {
              reject(e);
            }
          });
        else if (window["imjoyRPC"]) {
          const imjoyRPC = window.imjoyRPC;
          delete window.imjoyRPC;
          try {
            checkAndCacheLib(imjoyRPC);
            resolve(imjoyRPC);
          } catch (e) {
            reject(e);
          }
        } else {
          reject("Failed to import imjoy-rpc.");
          return;
        }
      })
      .catch(reject);
  });
}


/***/ })

/******/ });
//# sourceMappingURL=imjoy-loader.module.js.map