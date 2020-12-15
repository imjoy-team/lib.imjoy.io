(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("imjoyLoader", [], factory);
	else if(typeof exports === 'object')
		exports["imjoyLoader"] = factory();
	else
		root["imjoyLoader"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./src/imjoyLoader.js":
/*!****************************!*\
  !*** ./src/imjoyLoader.js ***!
  \****************************/
/*! exports provided: loadImJoyCore, latest_rpc_version, loadImJoyRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImJoyCore\", function() { return loadImJoyCore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"latest_rpc_version\", function() { return latest_rpc_version; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImJoyRPC\", function() { return loadImJoyRPC; });\nfunction _injectScript(src) {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.addEventListener(\"load\", resolve);\n    script.addEventListener(\"error\", () => {\n      document.head.removeChild(script);\n      reject(\"Error loading script: \" + src);\n    });\n    script.addEventListener(\"abort\", () => reject(\"Script loading aborted.\"));\n    document.head.appendChild(script);\n  });\n}\n/**\n * Get the URL parameters\n * source: https://css-tricks.com/snippets/javascript/get-url-variables/\n * @param  {String} url The URL\n * @return {Object}     The URL parameters\n */\n\n\nvar _getParams = function (url) {\n  var params = {};\n  var parser = document.createElement(\"a\");\n  parser.href = url;\n  var query = parser.search.substring(1);\n  var vars = query.split(\"&\");\n\n  for (var i = 0; i < vars.length; i++) {\n    var pair = vars[i].split(\"=\");\n    params[pair[0]] = decodeURIComponent(pair[1]);\n  }\n\n  return params;\n}; // Load the imjoy core script\n// it support the following options:\n// 1) version, you can specify a specific version of the core,\n// for example `version: \"0.11.13\"` or `version: \"latest\"`\n// 2) debug, by default, the minified version will be used,\n// if debug==true, the full version will be served\n// 3) base_url, the url for loading the core library\n\n\nfunction loadImJoyCore(config) {\n  config = config || {}; // eslint-disable-next-line no-async-promise-executor\n\n  return new Promise(async (resolve, reject) => {\n    try {\n      var baseUrl = config.base_url;\n\n      if (!baseUrl) {\n        const version = config.version || \"latest\";\n        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-core@${version}/dist/`;\n      }\n\n      delete window.imjoyCore;\n\n      if (config.debug) {\n        await _injectScript(baseUrl + \"imjoy-core.js\");\n      } else {\n        await _injectScript(baseUrl + \"imjoy-core.min.js\");\n      }\n\n      if (window.imjoyCore) {\n        const imjoyCore = window.imjoyCore;\n        delete window.imjoyCore;\n        resolve(imjoyCore);\n      } else if (typeof define === \"function\" && // eslint-disable-next-line no-undef\n      __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) eval(\"require\")([\"imjoyCore\"], resolve);else reject(\"Failed to import imjoy-core.\");\n    } catch (e) {\n      reject(e);\n    }\n  });\n}\nconst _rpc_registry = {};\nconst latest_rpc_version = \"0.2.30\";\nconst _rpc_api_versions = {\n  \"0.2.0\": {\n    from: \"0.1.10\",\n    to: \"0.1.17\",\n    skips: []\n  },\n  \"0.2.1\": {\n    from: \"0.1.18\",\n    to: \"0.2.5\",\n    skips: []\n  },\n  \"0.2.2\": {\n    from: \"0.2.6\",\n    to: \"0.2.6\",\n    skips: []\n  },\n  \"0.2.3\": {\n    from: \"0.2.7\",\n    to: latest_rpc_version,\n    skips: [\"0.2.9\", \"0.2.15\", \"0.2.16\", \"0.2.18\", \"0.2.23\", \"0.2.24\", \"0.2.25\"]\n  }\n}; // specify an api version and this function will return the actual imjoy-rpc version\n// if you set latestOnly to true, then it returns always the latest for the api version\n// otherwise, it will try to find a compatible version in the cached version.\n\nfunction findRPCVersionByAPIVersion(apiVersion, latestOnly) {\n  if (!apiVersion || !apiVersion.includes(\".\")) return;\n  let cached = Object.keys(_rpc_registry);\n\n  if (_rpc_api_versions[apiVersion]) {\n    if (cached.length <= 0 || latestOnly) {\n      return _rpc_api_versions[apiVersion].to;\n    } // see if we can find a compatible version in the cache\n    // sort the cached version\n\n\n    cached = (f => f(f(cached, 1).sort(), -1))((cached, v) => cached.map(a => a.replace(/\\d+/g, n => +n + v * 100000)));\n\n    for (let c of cached.reverse()) {\n      if (_rpc_registry[c].API_VERSION === apiVersion) return c;\n    }\n\n    return _rpc_api_versions[apiVersion].to;\n  } else {\n    return null;\n  }\n} // Load the script for a plugin to communicate with imjoy-rpc\n// This should only be called when the window is inside the iframe\n// it support the following options:\n// 1) version, you can specify a specific version of the imjoy-rpc,\n// for example `version: \"0.11.13\"` or `version: \"latest\"`\n// 2) api_version, specify the api version of the imjoy-rpc\n// 3) debug, by default, the minified version will be used,\n// if debug==true, the full version will be served\n// 4) base_url, the url for loading the rpc library\n\n\nfunction loadImJoyRPC(config) {\n  config = config || {};\n  return new Promise((resolve, reject) => {\n    var baseUrl = config.base_url;\n    let version = config.version;\n\n    if (!baseUrl) {\n      if (config.version) {\n        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${config.version}/dist/`;\n      } else {\n        if (config.api_version) {\n          // find the latest version for this api_version\n          version = findRPCVersionByAPIVersion(config.api_version, true);\n\n          if (version) {\n            baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${version}/dist/`;\n          } else {\n            reject(Error(`Cannot find a version of imjoy-rpc that supports api v${config.api_version}`));\n            return;\n          }\n        } else {\n          baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@latest/dist/`;\n          version = \"latest\";\n          console.info(`Using imjoy-rpc library from ${baseUrl}.`);\n        }\n      }\n    }\n\n    if (version && _rpc_registry[version]) {\n      console.info(`Using cached imjoy-rpc library v${version}.`);\n      resolve(_rpc_registry[version]);\n      return;\n    }\n\n    let rpc_url = baseUrl + \"imjoy-rpc.min.js\";\n\n    if (config.debug) {\n      rpc_url = baseUrl + \"imjoy-rpc.js\";\n    }\n\n    function checkAndCacheLib(imjoyRPC) {\n      if (version && version !== \"latest\" && version !== imjoyRPC.VERSION) {\n        throw new Error(`imjoy-rpc version mismatch ${version} != ${imjoyRPC.VERSION}`);\n      }\n\n      if (config.api_version && config.api_version !== imjoyRPC.API_VERSION) {\n        throw new Error(`imjoy-rpc api version mismatch ${config.api_version} != ${imjoyRPC.API_VERSION}`);\n      }\n\n      _rpc_registry[imjoyRPC.VERSION] = imjoyRPC;\n    }\n\n    delete window.imjoyRPC;\n\n    _injectScript(rpc_url).then(() => {\n      if (window.imjoyRPC) {\n        const imjoyRPC = window.imjoyRPC;\n        delete window.imjoyRPC;\n\n        try {\n          checkAndCacheLib(imjoyRPC);\n          resolve(imjoyRPC);\n        } catch (e) {\n          reject(e);\n        }\n      } else if (typeof define === \"function\" && // eslint-disable-next-line no-undef\n      __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) eval(\"require\")([\"imjoyRPC\"], imjoyRPC => {\n        try {\n          checkAndCacheLib(imjoyRPC);\n          resolve(imjoyRPC);\n        } catch (e) {\n          reject(e);\n        }\n      });else {\n        reject(\"Failed to import imjoy-rpc.\");\n        return;\n      }\n    }).catch(reject);\n  });\n}\n\nasync function loadImJoyRPCByQueryString() {\n  const urlParams = _getParams(window.location);\n\n  return await loadImJoyRPC(urlParams);\n}\n\nwindow.loadImJoyRPCByQueryString = loadImJoyRPCByQueryString;\nwindow.loadImJoyRPC = loadImJoyRPC;\nwindow.loadImJoyCore = loadImJoyCore;\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyLoader.js?");

/***/ })

/******/ });
});