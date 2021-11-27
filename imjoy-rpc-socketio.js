(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("imjoyRPCSocketIO", [], factory);
	else if(typeof exports === 'object')
		exports["imjoyRPCSocketIO"] = factory();
	else
		root["imjoyRPCSocketIO"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/socketIOMain.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/globalThis.browser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();


/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Socket = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

module.exports = (uri, opts) => new Socket(uri, opts);

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

module.exports.Socket = Socket;
module.exports.protocol = Socket.protocol; // this is an int
module.exports.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
module.exports.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/index.js");


/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
const Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")("engine.io-client:socket");
const parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/index.js");
const parseuri = __webpack_require__(/*! parseuri */ "./node_modules/engine.io-client/node_modules/parseuri/index.js");
const parseqs = __webpack_require__(/*! parseqs */ "./node_modules/engine.io-client/node_modules/parseqs/index.js");

class Socket extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts = {}) {
    super();

    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }

    this.secure =
      null != opts.secure
        ? opts.secure
        : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? "443" : "80";
    }

    this.hostname =
      opts.hostname ||
      (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port =
      opts.port ||
      (typeof location !== "undefined" && location.port
        ? location.port
        : this.secure
        ? 443
        : 80);

    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;

    this.opts = Object.assign(
      {
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        jsonp: true,
        timestampParam: "t",
        rememberUpgrade: false,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {}
      },
      opts
    );

    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";

    if (typeof this.opts.query === "string") {
      this.opts.query = parseqs.decode(this.opts.query);
    }

    // set on handshake
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;

    // set on heartbeat
    this.pingTimeoutTimer = null;

    if (typeof addEventListener === "function") {
      addEventListener(
        "beforeunload",
        () => {
          if (this.transport) {
            // silently close the transport
            this.transport.removeAllListeners();
            this.transport.close();
          }
        },
        false
      );
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close");
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }

    this.open();
  }

  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */
  createTransport(name) {
    debug('creating transport "%s"', name);
    const query = clone(this.opts.query);

    // append engine.io protocol identifier
    query.EIO = parser.protocol;

    // transport name
    query.transport = name;

    // session id if we already have one
    if (this.id) query.sid = this.id;

    const opts = Object.assign(
      {},
      this.opts.transportOptions[name],
      this.opts,
      {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }
    );

    debug("options: %j", opts);

    return new transports[name](opts);
  }

  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */
  open() {
    let transport;
    if (
      this.opts.rememberUpgrade &&
      Socket.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    ) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      // Emit error on next tick so it can be listened to
      const self = this;
      setTimeout(function() {
        self.emit("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";

    // Retry with the next transport if the transport is disabled (jsonp: false)
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      debug("error while creating transport: %s", e);
      this.transports.shift();
      this.open();
      return;
    }

    transport.open();
    this.setTransport(transport);
  }

  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */
  setTransport(transport) {
    debug("setting transport %s", transport.name);
    const self = this;

    if (this.transport) {
      debug("clearing existing transport %s", this.transport.name);
      this.transport.removeAllListeners();
    }

    // set up transport
    this.transport = transport;

    // set up transport listeners
    transport
      .on("drain", function() {
        self.onDrain();
      })
      .on("packet", function(packet) {
        self.onPacket(packet);
      })
      .on("error", function(e) {
        self.onError(e);
      })
      .on("close", function() {
        self.onClose("transport close");
      });
  }

  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */
  probe(name) {
    debug('probing transport "%s"', name);
    let transport = this.createTransport(name, { probe: 1 });
    let failed = false;
    const self = this;

    Socket.priorWebsocketSuccess = false;

    function onTransportOpen() {
      if (self.onlyBinaryUpgrades) {
        const upgradeLosesBinary =
          !this.supportsBinary && self.transport.supportsBinary;
        failed = failed || upgradeLosesBinary;
      }
      if (failed) return;

      debug('probe transport "%s" opened', name);
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", function(msg) {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          debug('probe transport "%s" pong', name);
          self.upgrading = true;
          self.emit("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;

          debug('pausing current transport "%s"', self.transport.name);
          self.transport.pause(function() {
            if (failed) return;
            if ("closed" === self.readyState) return;
            debug("changing transport and sending upgrade packet");

            cleanup();

            self.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            self.emit("upgrade", transport);
            transport = null;
            self.upgrading = false;
            self.flush();
          });
        } else {
          debug('probe transport "%s" failed', name);
          const err = new Error("probe error");
          err.transport = transport.name;
          self.emit("upgradeError", err);
        }
      });
    }

    function freezeTransport() {
      if (failed) return;

      // Any callback called by transport should be ignored since now
      failed = true;

      cleanup();

      transport.close();
      transport = null;
    }

    // Handle any error that happens while probing
    function onerror(err) {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;

      freezeTransport();

      debug('probe transport "%s" failed because of error: %s', name, err);

      self.emit("upgradeError", error);
    }

    function onTransportClose() {
      onerror("transport closed");
    }

    // When the socket is closed while we're probing
    function onclose() {
      onerror("socket closed");
    }

    // When the socket is upgraded while we're probing
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        debug('"%s" works - aborting "%s"', to.name, transport.name);
        freezeTransport();
      }
    }

    // Remove all listeners on the transport and on self
    function cleanup() {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      self.removeListener("close", onclose);
      self.removeListener("upgrading", onupgrade);
    }

    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);

    this.once("close", onclose);
    this.once("upgrading", onupgrade);

    transport.open();
  }

  /**
   * Called when connection is deemed open.
   *
   * @api public
   */
  onOpen() {
    debug("socket open");
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emit("open");
    this.flush();

    // we check for `readyState` in case an `open`
    // listener already closed the socket
    if (
      "open" === this.readyState &&
      this.opts.upgrade &&
      this.transport.pause
    ) {
      debug("starting upgrade probes");
      let i = 0;
      const l = this.upgrades.length;
      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }

  /**
   * Handles a packet.
   *
   * @api private
   */
  onPacket(packet) {
    if (
      "opening" === this.readyState ||
      "open" === this.readyState ||
      "closing" === this.readyState
    ) {
      debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

      this.emit("packet", packet);

      // Socket is live - any packet counts
      this.emit("heartbeat");

      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;

        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emit("pong");
          break;

        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;

        case "message":
          this.emit("data", packet.data);
          this.emit("message", packet.data);
          break;
      }
    } else {
      debug('packet received with socket readyState "%s"', this.readyState);
    }
  }

  /**
   * Called upon handshake completion.
   *
   * @param {Object} handshake obj
   * @api private
   */
  onHandshake(data) {
    this.emit("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.onOpen();
    // In case open handler closes socket
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }

  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */
  resetPingTimeout() {
    clearTimeout(this.pingTimeoutTimer);
    this.pingTimeoutTimer = setTimeout(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }

  /**
   * Called on `drain` event
   *
   * @api private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);

    // setting prevBufferLen = 0 is very important
    // for example, when upgrading, upgrade packet is sent over,
    // and a nonzero prevBufferLen could cause problems on `drain`
    this.prevBufferLen = 0;

    if (0 === this.writeBuffer.length) {
      this.emit("drain");
    } else {
      this.flush();
    }
  }

  /**
   * Flush write buffers.
   *
   * @api private
   */
  flush() {
    if (
      "closed" !== this.readyState &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      debug("flushing %d packets in socket", this.writeBuffer.length);
      this.transport.send(this.writeBuffer);
      // keep track of current length of writeBuffer
      // splice writeBuffer and callbackBuffer on `drain`
      this.prevBufferLen = this.writeBuffer.length;
      this.emit("flush");
    }
  }

  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = undefined;
    }

    if ("function" === typeof options) {
      fn = options;
      options = null;
    }

    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }

    options = options || {};
    options.compress = false !== options.compress;

    const packet = {
      type: type,
      data: data,
      options: options
    };
    this.emit("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }

  /**
   * Closes the connection.
   *
   * @api private
   */
  close() {
    const self = this;

    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";

      if (this.writeBuffer.length) {
        this.once("drain", function() {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }

    function close() {
      self.onClose("forced close");
      debug("socket closing - telling transport to close");
      self.transport.close();
    }

    function cleanupAndClose() {
      self.removeListener("upgrade", cleanupAndClose);
      self.removeListener("upgradeError", cleanupAndClose);
      close();
    }

    function waitForUpgrade() {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      self.once("upgrade", cleanupAndClose);
      self.once("upgradeError", cleanupAndClose);
    }

    return this;
  }

  /**
   * Called upon transport error
   *
   * @api private
   */
  onError(err) {
    debug("socket error %j", err);
    Socket.priorWebsocketSuccess = false;
    this.emit("error", err);
    this.onClose("transport error", err);
  }

  /**
   * Called upon transport close.
   *
   * @api private
   */
  onClose(reason, desc) {
    if (
      "opening" === this.readyState ||
      "open" === this.readyState ||
      "closing" === this.readyState
    ) {
      debug('socket close with reason: "%s"', reason);
      const self = this;

      // clear timers
      clearTimeout(this.pingIntervalTimer);
      clearTimeout(this.pingTimeoutTimer);

      // stop event from firing again for transport
      this.transport.removeAllListeners("close");

      // ensure transport won't stay open
      this.transport.close();

      // ignore further transport communication
      this.transport.removeAllListeners();

      if (typeof removeEventListener === "function") {
        removeEventListener("offline", this.offlineEventListener, false);
      }

      // set ready state
      this.readyState = "closed";

      // clear session id
      this.id = null;

      // emit close event
      this.emit("close", reason, desc);

      // clean buffers after, so users can still
      // grab the buffers on `close` event
      self.writeBuffer = [];
      self.prevBufferLen = 0;
    }
  }

  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;
    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
}

Socket.priorWebsocketSuccess = false;

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

function clone(obj) {
  const o = {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

module.exports = Socket;


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/index.js");
const Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")("engine.io-client:transport");

class Transport extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  constructor(opts) {
    super();

    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }

  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */
  onError(msg, desc) {
    const err = new Error(msg);
    err.type = "TransportError";
    err.description = desc;
    this.emit("error", err);
    return this;
  }

  /**
   * Opens the transport.
   *
   * @api public
   */
  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }

    return this;
  }

  /**
   * Closes the transport.
   *
   * @api private
   */
  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }

    return this;
  }

  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api private
   */
  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {
      // this might happen if the transport was silently closed in the beforeunload event handler
      debug("transport is not open, discarding packets");
    }
  }

  /**
   * Called upon open
   *
   * @api private
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    this.emit("open");
  }

  /**
   * Called with data.
   *
   * @param {String} data
   * @api private
   */
  onData(data) {
    const packet = parser.decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }

  /**
   * Called with a decoded packet.
   */
  onPacket(packet) {
    this.emit("packet", packet);
  }

  /**
   * Called upon close.
   *
   * @api private
   */
  onClose() {
    this.readyState = "closed";
    this.emit("close");
  }
}

module.exports = Transport;


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const XMLHttpRequest = __webpack_require__(/*! ../../contrib/xmlhttprequest-ssl/XMLHttpRequest */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
const XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");
const JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
const websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  let xhr;
  let xd = false;
  let xs = false;
  const jsonp = false !== opts.jsonp;

  if (typeof location !== "undefined") {
    const isSSL = "https:" === location.protocol;
    let port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ("open" in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error("JSONP disabled");
    return new JSONP(opts);
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
const globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

const rNewline = /\n/g;
const rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

let callbacks;

class JSONPPolling extends Polling {
  /**
   * JSONP Polling constructor.
   *
   * @param {Object} opts.
   * @api public
   */
  constructor(opts) {
    super(opts);

    this.query = this.query || {};

    // define global callbacks array if not present
    // we do this here (lazily) to avoid unneeded global pollution
    if (!callbacks) {
      // we need to consider multiple engines in the same page
      callbacks = globalThis.___eio = globalThis.___eio || [];
    }

    // callback identifier
    this.index = callbacks.length;

    // add callback to jsonp global
    const self = this;
    callbacks.push(function(msg) {
      self.onData(msg);
    });

    // append to query string
    this.query.j = this.index;
  }

  /**
   * JSONP only supports binary as base64 encoded strings
   */
  get supportsBinary() {
    return false;
  }

  /**
   * Closes the socket.
   *
   * @api private
   */
  doClose() {
    if (this.script) {
      // prevent spurious errors from being emitted when the window is unloaded
      this.script.onerror = () => {};
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    if (this.form) {
      this.form.parentNode.removeChild(this.form);
      this.form = null;
      this.iframe = null;
    }

    super.doClose();
  }

  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  doPoll() {
    const self = this;
    const script = document.createElement("script");

    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    script.async = true;
    script.src = this.uri();
    script.onerror = function(e) {
      self.onError("jsonp poll error", e);
    };

    const insertAt = document.getElementsByTagName("script")[0];
    if (insertAt) {
      insertAt.parentNode.insertBefore(script, insertAt);
    } else {
      (document.head || document.body).appendChild(script);
    }
    this.script = script;

    const isUAgecko =
      "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);

    if (isUAgecko) {
      setTimeout(function() {
        const iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  }

  /**
   * Writes with a hidden iframe.
   *
   * @param {String} data to send
   * @param {Function} called upon flush.
   * @api private
   */
  doWrite(data, fn) {
    const self = this;
    let iframe;

    if (!this.form) {
      const form = document.createElement("form");
      const area = document.createElement("textarea");
      const id = (this.iframeId = "eio_iframe_" + this.index);

      form.className = "socketio";
      form.style.position = "absolute";
      form.style.top = "-1000px";
      form.style.left = "-1000px";
      form.target = id;
      form.method = "POST";
      form.setAttribute("accept-charset", "utf-8");
      area.name = "d";
      form.appendChild(area);
      document.body.appendChild(form);

      this.form = form;
      this.area = area;
    }

    this.form.action = this.uri();

    function complete() {
      initIframe();
      fn();
    }

    function initIframe() {
      if (self.iframe) {
        try {
          self.form.removeChild(self.iframe);
        } catch (e) {
          self.onError("jsonp polling iframe removal error", e);
        }
      }

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        const html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
        iframe = document.createElement(html);
      } catch (e) {
        iframe = document.createElement("iframe");
        iframe.name = self.iframeId;
        iframe.src = "javascript:0";
      }

      iframe.id = self.iframeId;

      self.form.appendChild(iframe);
      self.iframe = iframe;
    }

    initIframe();

    // escape \n to prevent it from being converted into \r\n by some UAs
    // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
    data = data.replace(rEscapedNewline, "\\\n");
    this.area.value = data.replace(rNewline, "\\n");

    try {
      this.form.submit();
    } catch (e) {}

    if (this.iframe.attachEvent) {
      this.iframe.onreadystatechange = function() {
        if (self.iframe.readyState === "complete") {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }
  }
}

module.exports = JSONPPolling;


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

const XMLHttpRequest = __webpack_require__(/*! ../../contrib/xmlhttprequest-ssl/XMLHttpRequest */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
const Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
const Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
const { pick } = __webpack_require__(/*! ../util */ "./node_modules/engine.io-client/lib/util.js");
const globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

const debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")("engine.io-client:polling-xhr");

/**
 * Empty function
 */

function empty() {}

const hasXHR2 = (function() {
  const xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

class XHR extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  constructor(opts) {
    super(opts);

    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;

      // some user agents have empty `location.port`
      if (!port) {
        port = isSSL ? 443 : 80;
      }

      this.xd =
        (typeof location !== "undefined" &&
          opts.hostname !== location.hostname) ||
        port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    /**
     * XHR supports binary
     */
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }

  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
    return new Request(this.uri(), opts);
  }

  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data: data
    });
    const self = this;
    req.on("success", fn);
    req.on("error", function(err) {
      self.onError("xhr post error", err);
    });
  }

  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  doPoll() {
    debug("xhr poll");
    const req = this.request();
    const self = this;
    req.on("data", function(data) {
      self.onData(data);
    });
    req.on("error", function(err) {
      self.onError("xhr poll error", err);
    });
    this.pollXhr = req;
  }
}

class Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts) {
    super();
    this.opts = opts;

    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = undefined !== opts.data ? opts.data : null;

    this.create();
  }

  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */
  create() {
    const opts = pick(
      this.opts,
      "agent",
      "enablesXDR",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;

    const xhr = (this.xhr = new XMLHttpRequest(opts));
    const self = this;

    try {
      debug("xhr open %s: %s", this.method, this.uri);
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}

      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }

      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}

      // ie6 check
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }

      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }

      if (this.hasXDR()) {
        xhr.onload = function() {
          self.onLoad();
        };
        xhr.onerror = function() {
          self.onError(xhr.responseText);
        };
      } else {
        xhr.onreadystatechange = function() {
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            self.onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            setTimeout(function() {
              self.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
      }

      debug("xhr data %s", this.data);
      xhr.send(this.data);
    } catch (e) {
      // Need to defer since .create() is called directly from the constructor
      // and thus the 'error' event can only be only bound *after* this exception
      // occurs.  Therefore, also, we cannot throw here at all.
      setTimeout(function() {
        self.onError(e);
      }, 0);
      return;
    }

    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }

  /**
   * Called upon successful response.
   *
   * @api private
   */
  onSuccess() {
    this.emit("success");
    this.cleanup();
  }

  /**
   * Called if we have data.
   *
   * @api private
   */
  onData(data) {
    this.emit("data", data);
    this.onSuccess();
  }

  /**
   * Called upon error.
   *
   * @api private
   */
  onError(err) {
    this.emit("error", err);
    this.cleanup(true);
  }

  /**
   * Cleans up house.
   *
   * @api private
   */
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    // xmlhttprequest
    if (this.hasXDR()) {
      this.xhr.onload = this.xhr.onerror = empty;
    } else {
      this.xhr.onreadystatechange = empty;
    }

    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }

    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }

    this.xhr = null;
  }

  /**
   * Called upon load.
   *
   * @api private
   */
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.onData(data);
    }
  }

  /**
   * Check if it has XDomainRequest.
   *
   * @api private
   */
  hasXDR() {
    return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
  }

  /**
   * Aborts the request.
   *
   * @api public
   */
  abort() {
    this.cleanup();
  }
}

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

module.exports = XHR;
module.exports.Request = Request;


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
const parseqs = __webpack_require__(/*! parseqs */ "./node_modules/engine.io-client/node_modules/parseqs/index.js");
const parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/index.js");
const yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

const debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")("engine.io-client:polling");

class Polling extends Transport {
  /**
   * Transport name.
   */
  get name() {
    return "polling";
  }

  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */
  doOpen() {
    this.poll();
  }

  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */
  pause(onPause) {
    const self = this;

    this.readyState = "pausing";

    function pause() {
      debug("paused");
      self.readyState = "paused";
      onPause();
    }

    if (this.polling || !this.writable) {
      let total = 0;

      if (this.polling) {
        debug("we are currently polling - waiting to pause");
        total++;
        this.once("pollComplete", function() {
          debug("pre-pause polling complete");
          --total || pause();
        });
      }

      if (!this.writable) {
        debug("we are currently writing - waiting to pause");
        total++;
        this.once("drain", function() {
          debug("pre-pause writing complete");
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }

  /**
   * Starts polling cycle.
   *
   * @api public
   */
  poll() {
    debug("polling");
    this.polling = true;
    this.doPoll();
    this.emit("poll");
  }

  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */
  onData(data) {
    const self = this;
    debug("polling got data %s", data);
    const callback = function(packet, index, total) {
      // if its the first message we consider the transport open
      if ("opening" === self.readyState && packet.type === "open") {
        self.onOpen();
      }

      // if its a close packet, we close the ongoing requests
      if ("close" === packet.type) {
        self.onClose();
        return false;
      }

      // otherwise bypass onData and handle the message
      self.onPacket(packet);
    };

    // decode payload
    parser.decodePayload(data, this.socket.binaryType).forEach(callback);

    // if an event did not trigger closing
    if ("closed" !== this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emit("pollComplete");

      if ("open" === this.readyState) {
        this.poll();
      } else {
        debug('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  }

  /**
   * For polling, send a close packet.
   *
   * @api private
   */
  doClose() {
    const self = this;

    function close() {
      debug("writing close packet");
      self.write([{ type: "close" }]);
    }

    if ("open" === this.readyState) {
      debug("transport open - closing");
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      debug("transport not open - deferring close");
      this.once("open", close);
    }
  }

  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */
  write(packets) {
    this.writable = false;

    parser.encodePayload(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emit("drain");
      });
    });
  }

  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";

    // cache busting is forced
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }

    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }

    query = parseqs.encode(query);

    // avoid port if default for schema
    if (
      this.opts.port &&
      (("https" === schema && Number(this.opts.port) !== 443) ||
        ("http" === schema && Number(this.opts.port) !== 80))
    ) {
      port = ":" + this.opts.port;
    }

    // prepend ? to query
    if (query.length) {
      query = "?" + query;
    }

    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return (
      schema +
      "://" +
      (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      port +
      this.opts.path +
      query
    );
  }
}

module.exports = Polling;


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = {
  WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
  usingBrowserWebSocket: true,
  defaultBinaryType: "arraybuffer"
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {const Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
const parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/index.js");
const parseqs = __webpack_require__(/*! parseqs */ "./node_modules/engine.io-client/node_modules/parseqs/index.js");
const yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
const { pick } = __webpack_require__(/*! ../util */ "./node_modules/engine.io-client/lib/util.js");
const {
  WebSocket,
  usingBrowserWebSocket,
  defaultBinaryType
} = __webpack_require__(/*! ./websocket-constructor */ "./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js");

const debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")("engine.io-client:websocket");

// detect ReactNative environment
const isReactNative =
  typeof navigator !== "undefined" &&
  typeof navigator.product === "string" &&
  navigator.product.toLowerCase() === "reactnative";

class WS extends Transport {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(opts) {
    super(opts);

    this.supportsBinary = !opts.forceBase64;
  }

  /**
   * Transport name.
   *
   * @api public
   */
  get name() {
    return "websocket";
  }

  /**
   * Opens socket.
   *
   * @api private
   */
  doOpen() {
    if (!this.check()) {
      // let probe timeout
      return;
    }

    const uri = this.uri();
    const protocols = this.opts.protocols;

    // React Native only supports the 'headers' option, and will print a warning if anything else is passed
    const opts = isReactNative
      ? {}
      : pick(
          this.opts,
          "agent",
          "perMessageDeflate",
          "pfx",
          "key",
          "passphrase",
          "cert",
          "ca",
          "ciphers",
          "rejectUnauthorized",
          "localAddress",
          "protocolVersion",
          "origin",
          "maxPayload",
          "family",
          "checkServerIdentity"
        );

    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }

    try {
      this.ws =
        usingBrowserWebSocket && !isReactNative
          ? protocols
            ? new WebSocket(uri, protocols)
            : new WebSocket(uri)
          : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emit("error", err);
    }

    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;

    this.addEventListeners();
  }

  /**
   * Adds event listeners to the socket
   *
   * @api private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }

  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */
  write(packets) {
    const self = this;
    this.writable = false;

    // encodePacket efficient as it uses WS framing
    // no need for encodePayload
    let total = packets.length;
    let i = 0;
    const l = total;
    for (; i < l; i++) {
      (function(packet) {
        parser.encodePacket(packet, self.supportsBinary, function(data) {
          // always create a new object (GH-437)
          const opts = {};
          if (!usingBrowserWebSocket) {
            if (packet.options) {
              opts.compress = packet.options.compress;
            }

            if (self.opts.perMessageDeflate) {
              const len =
                "string" === typeof data
                  ? Buffer.byteLength(data)
                  : data.length;
              if (len < self.opts.perMessageDeflate.threshold) {
                opts.compress = false;
              }
            }
          }

          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            if (usingBrowserWebSocket) {
              // TypeError is thrown when passing the second argument on Safari
              self.ws.send(data);
            } else {
              self.ws.send(data, opts);
            }
          } catch (e) {
            debug("websocket closed before onclose event");
          }

          --total || done();
        });
      })(packets[i]);
    }

    function done() {
      self.emit("flush");

      // fake drain
      // defer to next tick to allow Socket to clear writeBuffer
      setTimeout(function() {
        self.writable = true;
        self.emit("drain");
      }, 0);
    }
  }

  /**
   * Called upon close
   *
   * @api private
   */
  onClose() {
    Transport.prototype.onClose.call(this);
  }

  /**
   * Closes socket.
   *
   * @api private
   */
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }

  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";

    // avoid port if default for schema
    if (
      this.opts.port &&
      (("wss" === schema && Number(this.opts.port) !== 443) ||
        ("ws" === schema && Number(this.opts.port) !== 80))
    ) {
      port = ":" + this.opts.port;
    }

    // append timestamp to URI
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }

    // communicate binary support capabilities
    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    query = parseqs.encode(query);

    // prepend ? to query
    if (query.length) {
      query = "?" + query;
    }

    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return (
      schema +
      "://" +
      (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      port +
      this.opts.path +
      query
    );
  }

  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */
  check() {
    return (
      !!WebSocket &&
      !("__initialize" in WebSocket && this.name === WS.prototype.name)
    );
  }
}

module.exports = WS;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/util.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-client/lib/util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.pick = (obj, ...attr) => {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module

const hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");
const globalThis = __webpack_require__(/*! ./globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = function(opts) {
  const xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  const xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  const enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis[["Active"].concat("Object").join("X")](
        "Microsoft.XMLHTTP"
      );
    } catch (e) {}
  }
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/engine.io-client/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/common.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/commons.js":
/*!************************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/engine.io-parser/lib/commons.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";

const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});

const ERROR_PACKET = { type: "error", data: "parser error" };

module.exports = {
  PACKET_TYPES,
  PACKET_TYPES_REVERSE,
  ERROR_PACKET
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/decodePacket.browser.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/engine.io-parser/lib/decodePacket.browser.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { PACKET_TYPES_REVERSE, ERROR_PACKET } = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/commons.js");

const withNativeArrayBuffer = typeof ArrayBuffer === "function";

let base64decoder;
if (withNativeArrayBuffer) {
  base64decoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/engine.io-client/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1
    ? {
        type: PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
      }
    : {
        type: PACKET_TYPES_REVERSE[type]
      };
};

const decodeBase64Packet = (data, binaryType) => {
  if (base64decoder) {
    const decoded = base64decoder.decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data }; // fallback for old browsers
  }
};

const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data; // assuming the data is already an ArrayBuffer
  }
};

module.exports = decodePacket;


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/encodePacket.browser.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/engine.io-parser/lib/encodePacket.browser.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { PACKET_TYPES } = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/commons.js");

const withNativeBlob =
  typeof Blob === "function" ||
  (typeof Blob !== "undefined" &&
    Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";

// ArrayBuffer.isView method is not defined in IE10
const isView = obj => {
  return typeof ArrayBuffer.isView === "function"
    ? ArrayBuffer.isView(obj)
    : obj && obj.buffer instanceof ArrayBuffer;
};

const encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (
    withNativeArrayBuffer &&
    (data instanceof ArrayBuffer || isView(data))
  ) {
    if (supportsBinary) {
      return callback(data instanceof ArrayBuffer ? data : data.buffer);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  // plain string
  return callback(PACKET_TYPES[type] + (data || ""));
};

const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + content);
  };
  return fileReader.readAsDataURL(data);
};

module.exports = encodePacket;


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/engine.io-parser/lib/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const encodePacket = __webpack_require__(/*! ./encodePacket */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/encodePacket.browser.js");
const decodePacket = __webpack_require__(/*! ./decodePacket */ "./node_modules/engine.io-client/node_modules/engine.io-parser/lib/decodePacket.browser.js");

const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

const encodePayload = (packets, callback) => {
  // some packets may be added to the array while encoding, so the initial length must be saved
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;

  packets.forEach((packet, i) => {
    // force base64 encoding for binary packets
    encodePacket(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};

module.exports = {
  protocol: 4,
  encodePacket,
  encodePayload,
  decodePacket,
  decodePayload
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/parseqs/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/parseqs/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/parseuri/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/parseuri/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);

    return uri;
};

function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }

    return names;
}

function queryKey(uri, query) {
    var data = {};

    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });

    return data;
}


/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/socket.io-client/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = exports.io = exports.Manager = exports.protocol = void 0;
const url_1 = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/build/url.js");
const manager_1 = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/build/manager.js");
const socket_1 = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/build/socket.js");
Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return socket_1.Socket; } });
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")("socket.io-client");
/**
 * Module exports.
 */
module.exports = exports = lookup;
/**
 * Managers cache.
 */
const cache = (exports.managers = {});
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url_1.url(uri, opts.path);
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_1.Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_1.Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
exports.io = lookup;
/**
 * Protocol version.
 *
 * @public
 */
var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/index.js");
Object.defineProperty(exports, "protocol", { enumerable: true, get: function () { return socket_io_parser_1.protocol; } });
/**
 * `connect`.
 *
 * @param {String} uri
 * @public
 */
exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @public
 */
var manager_2 = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/build/manager.js");
Object.defineProperty(exports, "Manager", { enumerable: true, get: function () { return manager_2.Manager; } });
exports.default = lookup;


/***/ }),

/***/ "./node_modules/socket.io-client/build/manager.js":
/*!********************************************************!*\
  !*** ./node_modules/socket.io-client/build/manager.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");
const socket_1 = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/build/socket.js");
const parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/index.js");
const on_1 = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/build/on.js");
const Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");
const typed_events_1 = __webpack_require__(/*! ./typed-events */ "./node_modules/socket.io-client/build/typed-events.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")("socket.io-client:manager");
class Manager extends typed_events_1.StrictEventEmitter {
    constructor(uri, opts) {
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor(opts.randomizationFactor || 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
            return this;
        debug("opening %s", this.uri);
        this.engine = eio(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on_1.on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = on_1.on(socket, "error", (err) => {
            debug("error");
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
            }
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            debug("connect attempt will timeout after %d", timeout);
            if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
            }
            // set timer
            const timer = setTimeout(() => {
                debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        debug("open");
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on_1.on(socket, "ping", this.onping.bind(this)), on_1.on(socket, "data", this.ondata.bind(this)), on_1.on(socket, "error", this.onerror.bind(this)), on_1.on(socket, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new socket_1.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                debug("socket %s is still active, skipping close", nsp);
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        if ("opening" === this._readyState) {
            // `onclose` will not fire because
            // an open event never happened
            this.cleanup();
        }
        this.backoff.reset();
        this._readyState = "closed";
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason) {
        debug("onclose");
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = setTimeout(() => {
                if (self.skipReconnect)
                    return;
                debug("attempting reconnect");
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        debug("reconnect attempt error");
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        debug("reconnect success");
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
exports.Manager = Manager;


/***/ }),

/***/ "./node_modules/socket.io-client/build/on.js":
/*!***************************************************!*\
  !*** ./node_modules/socket.io-client/build/on.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.on = void 0;
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
exports.on = on;


/***/ }),

/***/ "./node_modules/socket.io-client/build/socket.js":
/*!*******************************************************!*\
  !*** ./node_modules/socket.io-client/build/socket.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/index.js");
const on_1 = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/build/on.js");
const typed_events_1 = __webpack_require__(/*! ./typed-events */ "./node_modules/socket.io-client/build/typed-events.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")("socket.io-client:socket");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
class Socket extends typed_events_1.StrictEventEmitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */
    constructor(io, nsp, opts) {
        super();
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        this.ids = 0;
        this.acks = {};
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.connected = false;
        this.disconnected = true;
        this.flags = {};
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on_1.on(io, "open", this.onopen.bind(this)),
            on_1.on(io, "packet", this.onpacket.bind(this)),
            on_1.on(io, "error", this.onerror.bind(this)),
            on_1.on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            debug("emitting packet with ack id %d", this.ids);
            this.acks[this.ids] = args.pop();
            packet.id = this.ids++;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
            debug("discard packet as the transport is not currently writable");
        }
        else if (this.connected) {
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data });
            });
        }
        else {
            this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: this.auth });
        }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */
    onclose(reason) {
        debug("close (%s)", reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser_1.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser_1.PacketType.EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser_1.PacketType.CONNECT_ERROR:
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            debug("sending ack %j", args);
            self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
        else {
            debug("bad ack %s", packet.id);
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.disconnected = false;
        this.emitReserved("connect");
        this.emitBuffered();
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => this.packet(packet));
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */
    disconnect() {
        if (this.connected) {
            debug("performing disconnect (%s)", this.nsp);
            this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAny() {
        return this._anyListeners || [];
    }
}
exports.Socket = Socket;


/***/ }),

/***/ "./node_modules/socket.io-client/build/typed-events.js":
/*!*************************************************************!*\
  !*** ./node_modules/socket.io-client/build/typed-events.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StrictEventEmitter = void 0;
const Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
/**
 * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
 * parameters for mappings of event names to event data types, and strictly
 * types method calls to the `EventEmitter` according to these event maps.
 *
 * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
 * listened to with `on` or `once`
 * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
 * emitted with `emit`
 * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
 * emitted by socket.io with `emitReserved`, and can be listened to with
 * `listen`.
 */
class StrictEventEmitter extends Emitter {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    on(ev, listener) {
        super.on(ev, listener);
        return this;
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    once(ev, listener) {
        super.once(ev, listener);
        return this;
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */
    emit(ev, ...args) {
        super.emit(ev, ...args);
        return this;
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */
    emitReserved(ev, ...args) {
        super.emit(ev, ...args);
        return this;
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */
    listeners(event) {
        return super.listeners(event);
    }
}
exports.StrictEventEmitter = StrictEventEmitter;


/***/ }),

/***/ "./node_modules/socket.io-client/build/url.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/build/url.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.url = void 0;
const parseuri = __webpack_require__(/*! parseuri */ "./node_modules/socket.io-client/node_modules/parseuri/index.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")("socket.io-client:url");
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        debug("parse %s", uri);
        obj = parseuri(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
exports.url = url;


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/socket.io-client/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/common.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/parseuri/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/parseuri/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);

    return uri;
};

function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }

    return names;
}

function queryKey(uri, query) {
    var data = {};

    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });

    return data;
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/binary.js":
/*!************************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/dist/binary.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.reconstructPacket = exports.deconstructPacket = void 0;
const is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/is-binary.js");
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
exports.deconstructPacket = deconstructPacket;
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (is_binary_1.isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
exports.reconstructPacket = reconstructPacket;
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/dist/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
const Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
const binary_1 = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/binary.js");
const is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/is-binary.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")("socket.io-parser");
/**
 * Protocol version.
 *
 * @public
 */
exports.protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (is_binary_1.hasBinary(obj)) {
                obj.type =
                    obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data);
        }
        debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = binary_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends Emitter {
    constructor() {
        super();
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT ||
                packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emit("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emit("decoded", packet);
            }
        }
        else if (is_binary_1.isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emit("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        debug("decoded %s as %j", str, p);
        return p;
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
        }
    }
}
exports.Decoder = Decoder;
function tryParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return false;
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/socket.io-parser/dist/is-binary.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/socket.io-parser/dist/is-binary.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBinary = exports.isBinary = void 0;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
exports.isBinary = isBinary;
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}
exports.hasBinary = hasBinary;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, module, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, eslintConfig, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"imjoy-rpc\",\"version\":\"0.3.35\",\"description\":\"Remote procedure calls for ImJoy.\",\"module\":\"index.js\",\"scripts\":{\"build\":\"rm -rf dist && npm run build-umd\",\"build-umd\":\"webpack --config webpack.config.js --mode development && NODE_ENV=production webpack --config webpack.config.js --mode production --devtool source-map \",\"watch\":\"NODE_ENV=production webpack --watch --progress --config webpack.config.js --mode production --devtool source-map\",\"publish-npm\":\"npm install && npm run build && npm publish\",\"serve\":\"webpack-dev-server\",\"stats\":\"webpack --profile --json > stats.json\",\"stats-prod\":\"webpack --profile --json --mode production > stats-prod.json\",\"analyze\":\"webpack-bundle-analyzer -p 9999 stats.json\",\"analyze-prod\":\"webpack-bundle-analyzer -p 9999 stats-prod.json\",\"clean\":\"rimraf dist/*\",\"deploy\":\"npm run build && node deploy-site.js\",\"format\":\"prettier --write \\\"{src,tests}/**/**\\\"\",\"check-format\":\"prettier --check \\\"{src,tests}/**/**\\\"\",\"test\":\"karma start --single-run --browsers ChromeHeadless,FirefoxHeadless karma.conf.js\",\"test-watch\":\"karma start --auto-watch --browsers Chrome,FirefoxHeadless karma.conf.js --debug\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/imjoy-team/imjoy-rpc.git\"},\"keywords\":[\"imjoy\",\"rpc\"],\"author\":\"imjoy-team <imjoy.team@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/imjoy-team/imjoy-rpc/issues\"},\"homepage\":\"https://github.com/imjoy-team/imjoy-rpc\",\"dependencies\":{\"socket.io-client\":\"^4.0.1\"},\"devDependencies\":{\"@babel/core\":\"^7.0.0-beta.39\",\"@babel/plugin-syntax-dynamic-import\":\"^7.0.0-beta.39\",\"@babel/polyfill\":\"^7.0.0-beta.39\",\"@babel/preset-env\":\"^7.0.0-beta.39\",\"@types/requirejs\":\"^2.1.28\",\"babel-core\":\"^6.26.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-runtime\":\"^6.26.0\",\"chai\":\"^4.2.0\",\"clean-webpack-plugin\":\"^0.1.19\",\"copy-webpack-plugin\":\"^5.0.5\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^4.2.0\",\"eslint-loader\":\"^4.0.2\",\"file-loader\":\"^0.11.2\",\"fs-extra\":\"^0.30.0\",\"gh-pages\":\"^2.0.1\",\"html-loader\":\"^0.5.5\",\"html-webpack-plugin\":\"^3.2.0\",\"json-loader\":\"^0.5.4\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^1.3.0\",\"karma-mocha\":\"^1.3.0\",\"karma-spec-reporter\":\"0.0.32\",\"karma-webpack\":\"^4.0.2\",\"lerna\":\"^3.8.0\",\"lodash.debounce\":\"^4.0.8\",\"mocha\":\"^7.1.2\",\"postcss\":\"^6.0.2\",\"prettier\":\"^1.6.1\",\"rimraf\":\"^2.6.2\",\"schema-utils\":\"^0.4.3\",\"style-loader\":\"^0.18.1\",\"url-loader\":\"^0.5.9\",\"webpack\":\"^4.0.0\",\"webpack-bundle-analyzer\":\"^3.3.2\",\"webpack-cli\":\"^3.1.2\",\"webpack-dev-server\":\"^3.1.1\",\"webpack-merge\":\"^4.1.1\",\"workbox-webpack-plugin\":\"^4.3.1\",\"worker-loader\":\"^2.0.0\",\"write-file-webpack-plugin\":\"^4.5.1\"},\"eslintConfig\":{\"globals\":{\"document\":true,\"window\":true}}}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: RPC, API_VERSION, VERSION, loadRequirements, waitForInitialization, setupRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForInitialization", function() { return waitForInitialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupRPC", function() { return setupRPC; });
/* harmony import */ var _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin.webworker.js */ "./src/plugin.webworker.js");
/* harmony import */ var _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluginIframe.js */ "./src/pluginIframe.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirements"]; });

/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_3__["RPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_3__["API_VERSION"]; });

/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _package_json__WEBPACK_IMPORTED_MODULE_4__["version"]; });

/**
 * Contains the code executed in the sandboxed frame under web-browser
 *
 * Tries to create a Web-Worker inside the frame and set up the
 * communication between the worker and the parent window. Some
 * browsers restrict creating a worker inside a sandboxed iframe - if
 * this happens, the plugin initialized right inside the frame (in the
 * same thread)
 */







function _inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
/**
 * Initializes the plugin inside a web worker. May throw an exception
 * in case this was not permitted by the browser.
 */


function setupWebWorker(config) {
  if (!config.allow_execution) throw new Error("web-worker plugin can only work with allow_execution=true");
  let broadcastChannel = null;

  if (config.broadcastChannel) {
    broadcastChannel = new BroadcastChannel(config.broadcastChannel);
  }

  const worker = new _plugin_webworker_js__WEBPACK_IMPORTED_MODULE_0___default.a(); // mixed content warning in Chrome silently skips worker
  // initialization without exception, handling this with timeout

  const fallbackTimeout = setTimeout(function () {
    worker.terminate();
    console.warn(`Plugin failed to start as a web-worker, running in an iframe instead.`);
    Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
  }, 2000);
  const peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])(); // forwarding messages between the worker and parent window

  worker.addEventListener("message", function (e) {
    let transferables = undefined;
    const m = e.data;

    if (m.type === "worker-ready") {
      // send config to the worker
      worker.postMessage({
        type: "connectRPC",
        config: config
      });
      clearTimeout(fallbackTimeout);
      return;
    } else if (m.type === "initialized") {
      // complete the missing fields
      m.config = Object.assign({}, config, m.config);
      m.origin = window.location.origin;
      m.peer_id = peer_id;
    } else if (m.type === "imjoy_remote_api_ready") {
      // if it's a webworker, there will be no api object returned
      window.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: null
      }));
    } else if (m.type === "cacheRequirements" && typeof cache_requirements === "function") {
      cache_requirements(m.requirements);
    } else if (m.type === "disconnect") {
      worker.terminate();
    } else {
      if (m.__transferables__) {
        transferables = m.__transferables__;
        delete m.__transferables__;
      }
    }

    if (broadcastChannel) broadcastChannel.postMessage(m);else parent.postMessage(m, config.target_origin || "*", transferables);
  });
  (broadcastChannel || window).addEventListener("message", function (e) {
    if (e.type === "message" && (broadcastChannel || config.target_origin === "*" || e.origin === config.target_origin)) {
      let transferables = undefined;
      const m = e.data;

      if (m.__transferables__) {
        transferables = m.__transferables__;
        delete m.__transferables__;
      }

      if (m.peer_id === peer_id) {
        worker.postMessage(m, transferables);
      } else if (config.debug) {
        console.log(`connection peer id mismatch ${m.peer_id} !== ${peer_id}`);
      }
    }
  });
}

function waitForInitialization(config) {
  if (!_inIframe()) {
    throw new Error("waitForInitialization (imjoy-rpc) should only run inside an iframe.");
  }

  config = config || {};

  if (config.enable_service_worker) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["setupServiceWorker"])(config.base_url, config.target_origin, config.cache_requirements);
    config.enable_service_worker = false;
  }

  if (config.cache_requirements) {
    delete config.cache_requirements;
  }

  const targetOrigin = config.target_origin || "*";

  if (config.credential_required && typeof config.verify_credential !== "function") {
    throw new Error("Please also provide the `verify_credential` function with `credential_required`.");
  }

  if (config.credential_required && targetOrigin === "*") {
    throw new Error("`target_origin` was set to `*` with `credential_required=true`, there is a security risk that you may leak the credential to website from other origin. Please specify the `target_origin` explicitly.");
  }

  const done = () => {
    window.removeEventListener("message", handleEvent);
  };

  const peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();

  const handleEvent = e => {
    if (e.type === "message" && (targetOrigin === "*" || e.origin === targetOrigin)) {
      if (e.data.type === "initialize") {
        done();

        if (e.data.peer_id !== peer_id) {
          // TODO: throw an error when we are sure all the peers will send the peer_id
          console.warn(`${e.data.config && e.data.config.name}: connection peer id mismatch ${e.data.peer_id} !== ${peer_id}`);
        }

        const cfg = e.data.config; // override the target_origin setting if it's configured by the rpc client
        // otherwise take the setting from the core

        if (targetOrigin !== "*") {
          cfg.target_origin = targetOrigin;
        }

        if (config.credential_required) {
          config.verify_credential(cfg.credential).then(result => {
            if (result && result.auth && !result.error) {
              // pass the authentication information with tokens
              cfg.auth = result.auth;
              setupRPC(cfg).then(() => {
                console.log("ImJoy RPC loaded successfully!");
              });
            } else {
              throw new Error("Failed to verify the credentail:" + (result && result.error));
            }
          });
        } else {
          setupRPC(cfg).then(() => {
            console.log("ImJoy RPC loaded successfully!");
          });
        }
      } else {
        throw new Error(`unrecognized message: ${e.data}`);
      }
    }
  };

  window.addEventListener("message", handleEvent);
  parent.postMessage({
    type: "imjoyRPCReady",
    config: config,
    peer_id: peer_id
  }, "*");
}
function setupRPC(config) {
  config = config || {};
  config.name = config.name || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  config = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeConfig"])(config);

  if (config.enable_service_worker) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["setupServiceWorker"])(config.base_url, config.target_origin, config.cache_requirements);
  }

  if (config.cache_requirements) {
    delete config.cache_requirements;
  }

  return new Promise((resolve, reject) => {
    const handleEvent = e => {
      const api = e.detail;

      if (config.expose_api_globally) {
        globalThis.api = api;
      } // imjoy plugin api


      resolve(api);
      globalThis.removeEventListener("imjoy_remote_api_ready", handleEvent);
    };

    if (_inIframe()) {
      if (config.type === "web-worker") {
        try {
          setupWebWorker(config);
        } catch (e) {
          // fallback to iframe
          Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
        }
      } else if (["rpc-window", "rpc-worker", "iframe", "window"].includes(config.type)) {
        Object(_pluginIframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
      } else {
        console.error("Unsupported plugin type: " + config.type);
        reject("Unsupported plugin type: " + config.type);
        return;
      }

      globalThis.addEventListener("imjoy_remote_api_ready", handleEvent);
    } else {
      reject(new Error("imjoy-rpc should only run inside an iframe."));
    }
  });
}

/***/ }),

/***/ "./src/plugin.webworker.js":
/*!*********************************!*\
  !*** ./src/plugin.webworker.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(/*! !./node_modules/worker-loader/dist/workers/InlineWorker.js */ "./node_modules/worker-loader/dist/workers/InlineWorker.js")("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/plugin.webworker.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/plugin.webworker.js\":\n/*!*********************************!*\\\n  !*** ./src/plugin.webworker.js ***!\n  \\*********************************/\n/*! no exports provided */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ \"./src/pluginCore.js\");\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ \"./src/rpc.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/**\n * Contains the routines loaded by the plugin Worker under web-browser.\n *\n * Initializes the web environment version of the platform-dependent\n * connection object for the plugin site\n */\n\n\n\n\n// make sure this runs inside a webworker\nif (\n  typeof WorkerGlobalScope === \"undefined\" ||\n  !self ||\n  !(self instanceof WorkerGlobalScope)\n) {\n  throw new Error(\"This script can only loaded in a webworker\");\n}\n\nasync function executeEsModule(content) {\n  const dataUri =\n    \"data:text/javascript;charset=utf-8,\" + encodeURIComponent(content);\n  await import(/* webpackIgnore: true */ dataUri);\n}\n\n/**\n * Connection object provided to the RPC constructor,\n * plugin site implementation for the web-based environment.\n * Global will be then cleared to prevent exposure into the\n * Worker, so we put this local connection object into a closure\n */\nclass Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"MessageEmitter\"] {\n  constructor(config) {\n    super(config && config.debug);\n    this.config = config || {};\n  }\n  connect() {\n    self.addEventListener(\"message\", e => {\n      this._fire(e.data.type, e.data);\n    });\n    this.emit({\n      type: \"initialized\",\n      config: this.config\n    });\n  }\n  disconnect() {\n    this._fire(\"beforeDisconnect\");\n    self.close();\n    this._fire(\"disconnected\");\n  }\n  emit(data) {\n    let transferables = undefined;\n    if (data.__transferables__) {\n      transferables = data.__transferables__;\n      delete data.__transferables__;\n    }\n    self.postMessage(data, transferables);\n  }\n  async execute(code) {\n    if (code.type === \"requirements\") {\n      await Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"loadRequirementsInWebworker\"])(code.requirements);\n    } else if (code.type === \"script\") {\n      try {\n        if (code.attrs.type === \"module\") {\n          await executeEsModule(code.content);\n        } else {\n          eval(code.content);\n        }\n      } catch (e) {\n        console.error(e.message, e.stack);\n        throw e;\n      }\n    } else {\n      throw \"unsupported code type.\";\n    }\n    if (code.type === \"requirements\") {\n      self.postMessage({\n        type: \"cacheRequirements\",\n        requirements: code.requirements\n      });\n    }\n  }\n}\nconst config = {\n  type: \"web-worker\",\n  dedicated_thread: true,\n  allow_execution: true,\n  lang: \"javascript\",\n  api_version: _rpc_js__WEBPACK_IMPORTED_MODULE_1__[\"API_VERSION\"]\n};\nconst conn = new Connection(config);\nconn.on(\"connectRPC\", data => {\n  Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__[\"connectRPC\"])(conn, Object.assign(data.config, config));\n});\nconn.connect();\nself.postMessage({\n  type: \"worker-ready\"\n});\n\n\n/***/ }),\n\n/***/ \"./src/pluginCore.js\":\n/*!***************************!*\\\n  !*** ./src/pluginCore.js ***!\n  \\***************************/\n/*! exports provided: connectRPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectRPC\", function() { return connectRPC; });\n/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ \"./src/rpc.js\");\n/**\n * Core plugin script loaded into the plugin process/thread.\n *\n * Initializes the plugin-site API global methods.\n */\n\nfunction connectRPC(connection, config) {\n  config = config || {};\n  const codecs = {};\n  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__[\"RPC\"](connection, config, codecs);\n  rpc.on(\"getInterface\", function () {\n    launchConnected();\n  });\n  rpc.on(\"remoteReady\", function () {\n    const api = rpc.getRemote() || {};\n\n    api.registerCodec = function (config) {\n      if (!config[\"name\"] || !config[\"encoder\"] && !config[\"decoder\"]) {\n        throw new Error(\"Invalid codec format, please make sure you provide a name, type, encoder and decoder.\");\n      } else {\n        if (config.type) {\n          for (let k of Object.keys(codecs)) {\n            if (codecs[k].type === config.type || k === config.name) {\n              delete codecs[k];\n              console.warn(\"Remove duplicated codec: \" + k);\n            }\n          }\n        }\n\n        codecs[config[\"name\"]] = config;\n      }\n    };\n\n    api.init = function (config) {\n      // register a minimal plugin api\n      rpc.setInterface({\n        setup() {}\n\n      }, config);\n    };\n\n    api.disposeObject = function (obj) {\n      rpc.disposeObject(obj);\n    };\n\n    api.export = function (_interface, config) {\n      rpc.setInterface(_interface, config);\n    };\n\n    api.onLoad = function (handler) {\n      handler = checkHandler(handler);\n\n      if (connected) {\n        handler();\n      } else {\n        connectedHandlers.push(handler);\n      }\n    };\n\n    api.dispose = function (_interface) {\n      rpc.disconnect();\n    };\n\n    api._rpc = rpc;\n\n    if (typeof WorkerGlobalScope !== \"undefined\" && self instanceof WorkerGlobalScope) {\n      self.api = api;\n      self.postMessage({\n        type: \"imjoy_remote_api_ready\"\n      });\n      self.dispatchEvent(new CustomEvent(\"imjoy_remote_api_ready\", {\n        detail: api\n      }));\n    } else if (typeof window) {\n      window.dispatchEvent(new CustomEvent(\"imjoy_remote_api_ready\", {\n        detail: api\n      }));\n    }\n  });\n  let connected = false;\n  const connectedHandlers = [];\n\n  const launchConnected = function () {\n    if (!connected) {\n      connected = true;\n      let handler;\n\n      while (handler = connectedHandlers.pop()) {\n        handler();\n      }\n    }\n  };\n\n  const checkHandler = function (handler) {\n    const type = typeof handler;\n\n    if (type !== \"function\") {\n      const msg = \"A function may only be subsribed to the event, \" + type + \" was provided instead\";\n      throw new Error(msg);\n    }\n\n    return handler;\n  };\n\n  return rpc;\n}\n\n/***/ }),\n\n/***/ \"./src/rpc.js\":\n/*!********************!*\\\n  !*** ./src/rpc.js ***!\n  \\********************/\n/*! exports provided: API_VERSION, RPC */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_VERSION\", function() { return API_VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RPC\", function() { return RPC; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/**\n * Contains the RPC object used both by the application\n * site, and by each plugin\n */\n\nconst API_VERSION = \"0.2.3\";\nconst ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;\n\nfunction _appendBuffer(buffer1, buffer2) {\n  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);\n  tmp.set(new Uint8Array(buffer1), 0);\n  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);\n  return tmp.buffer;\n}\n\nfunction indexObject(obj, is) {\n  if (!is) throw new Error(\"undefined index\");\n  if (typeof is === \"string\") return indexObject(obj, is.split(\".\"));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));\n}\n/**\n * RPC object represents a single site in the\n * communication protocol between the application and the plugin\n *\n * @param {Object} connection a special object allowing to send\n * and receive messages from the opposite site (basically it\n * should only provide send() and onMessage() methods)\n */\n\n\nclass RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"MessageEmitter\"] {\n  constructor(connection, config, codecs) {\n    super(config && config.debug);\n    this._connection = connection;\n    this.config = config || {};\n    this._codecs = codecs || {};\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._remote_set = false; // make sure there is an execute function\n\n    const name = this.config.name;\n\n    this._connection.execute = this._connection.execute || function () {\n      throw new Error(`connection.execute not implemented (in \"${name}\")`);\n    };\n\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n\n    this._method_refs.onReady(() => {\n      this._fire(\"remoteIdle\");\n    });\n\n    this._method_refs.onBusy(() => {\n      this._fire(\"remoteBusy\");\n    });\n\n    this._setupMessageHanlders();\n  }\n\n  init() {\n    this._connection.emit({\n      type: \"initialized\",\n      config: this.config,\n      peer_id: this._connection.peer_id\n    });\n  }\n\n  setConfig(config) {\n    if (config) for (const k of Object.keys(config)) {\n      this.config[k] = config[k];\n    }\n  }\n  /**\n   * Set a handler to be called when received a responce from the\n   * remote site reporting that the previously provided interface\n   * has been successfully set as remote for that site\n   *\n   * @param {Function} handler\n   */\n\n\n  getRemoteCallStack() {\n    return this._method_refs.getStack();\n  }\n  /**\n   * @returns {Object} set of remote interface methods\n   */\n\n\n  getRemote() {\n    return this._remote_interface;\n  }\n  /**\n   * Sets the interface of this site making it available to the\n   * remote site by sending a message with a set of methods names\n   *\n   * @param {Object} _interface to set\n   */\n\n\n  setInterface(_interface, config) {\n    config = config || {};\n    this.config.name = config.name || this.config.name;\n    this.config.description = config.description || this.config.description;\n\n    if (this.config.forwarding_functions) {\n      for (let func_name of this.config.forwarding_functions) {\n        const _remote = this._remote_interface;\n\n        if (_remote[func_name]) {\n          if (_interface.constructor === Object) {\n            if (!_interface[func_name]) {\n              _interface[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          } else if (_interface.constructor.constructor === Function) {\n            if (!_interface.constructor.prototype[func_name]) {\n              _interface.constructor.prototype[func_name] = (...args) => {\n                _remote[func_name](...args);\n              };\n            }\n          }\n        }\n      }\n    }\n\n    this._local_api = _interface;\n    if (!this._remote_set) this._fire(\"interfaceAvailable\");else this.send_interface();\n    return new Promise(resolve => {\n      this.once(\"interfaceSetAsRemote\", resolve);\n    });\n  }\n  /**\n   * Sends the actual interface to the remote site upon it was\n   * updated or by a special request of the remote site\n   */\n\n\n  sendInterface() {\n    if (!this._local_api) {\n      throw new Error(\"interface is not set.\");\n    }\n\n    this._encode(this._local_api, true).then(api => {\n      this._connection.emit({\n        type: \"setInterface\",\n        api: api\n      });\n    });\n  }\n\n  _disposeObject(objectId) {\n    if (this._object_store[objectId]) {\n      delete this._object_store[objectId];\n    } else {\n      throw new Error(`Object (id=${objectId}) not found.`);\n    }\n  }\n\n  disposeObject(obj) {\n    return new Promise((resolve, reject) => {\n      if (this._object_weakmap.has(obj)) {\n        const objectId = this._object_weakmap.get(obj);\n\n        this._connection.once(\"disposed\", data => {\n          if (data.error) reject(new Error(data.error));else resolve();\n        });\n\n        this._connection.emit({\n          type: \"disposeObject\",\n          object_id: objectId\n        });\n      } else {\n        throw new Error(\"Invalid object\");\n      }\n    });\n  }\n  /**\n   * Handles a message from the remote site\n   */\n\n\n  _setupMessageHanlders() {\n    this._connection.on(\"init\", this.init);\n\n    this._connection.on(\"execute\", data => {\n      Promise.resolve(this._connection.execute(data.code)).then(() => {\n        this._connection.emit({\n          type: \"executed\"\n        });\n      }).catch(e => {\n        console.error(e);\n\n        this._connection.emit({\n          type: \"executed\",\n          error: String(e)\n        });\n      });\n    });\n\n    this._connection.on(\"method\", async data => {\n      let resolve, reject, method, method_this, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        const _interface = this._object_store[data.object_id];\n        method = indexObject(_interface, data.name);\n\n        if (data.name.includes(\".\")) {\n          const tmp = data.name.split(\".\");\n          const intf_index = tmp.slice(0, tmp.length - 1).join(\".\");\n          method_this = indexObject(_interface, intf_index);\n        } else {\n          method_this = _interface;\n        }\n\n        args = await this._unwrap(data.args, true);\n\n        if (data.promise) {\n          result = method.apply(method_this, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === \"AsyncFunction\") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method.apply(method_this, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on(\"callback\", async data => {\n      let resolve, reject, method, args, result;\n\n      try {\n        if (data.promise) {\n          [resolve, reject] = await this._unwrap(data.promise, false);\n        }\n\n        if (data.promise) {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error(\"Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.\");\n          }\n\n          result = method.apply(null, args);\n\n          if (result instanceof Promise || method.constructor && method.constructor.name === \"AsyncFunction\") {\n            result.then(resolve).catch(reject);\n          } else {\n            resolve(result);\n          }\n        } else {\n          method = this._store.fetch(data.id);\n          args = await this._unwrap(data.args, true);\n\n          if (!method) {\n            throw new Error(\"Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.\");\n          }\n\n          method.apply(null, args);\n        }\n      } catch (err) {\n        console.error(this.config.name, err);\n\n        if (reject) {\n          reject(err);\n        }\n      }\n    });\n\n    this._connection.on(\"disposeObject\", data => {\n      try {\n        this._disposeObject(data.object_id);\n\n        this._connection.emit({\n          type: \"disposed\"\n        });\n      } catch (e) {\n        console.error(e);\n\n        this._connection.emit({\n          type: \"disposed\",\n          error: String(e)\n        });\n      }\n    });\n\n    this._connection.on(\"setInterface\", data => {\n      this._setRemoteInterface(data.api);\n    });\n\n    this._connection.on(\"getInterface\", () => {\n      this._fire(\"getInterface\");\n\n      if (this._local_api) {\n        this.sendInterface();\n      } else {\n        this.once(\"interfaceAvailable\", () => {\n          this.sendInterface();\n        });\n      }\n    });\n\n    this._connection.on(\"interfaceSetAsRemote\", () => {\n      this._remote_set = true;\n\n      this._fire(\"interfaceSetAsRemote\");\n    });\n\n    this._connection.on(\"disconnect\", () => {\n      this._fire(\"beforeDisconnect\");\n\n      this._connection.disconnect();\n\n      this._fire(\"disconnected\");\n    });\n  }\n  /**\n   * Sends a requests to the remote site asking it to provide its\n   * current interface\n   */\n\n\n  requestRemote() {\n    this._connection.emit({\n      type: \"getInterface\"\n    });\n  }\n\n  _ndarray(typedArray, shape, dtype) {\n    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(typedArray);\n\n    if (dtype && dtype !== _dtype) {\n      throw \"dtype doesn't match the type of the array: \" + _dtype + \" != \" + dtype;\n    }\n\n    shape = shape || [typedArray.length];\n    return {\n      _rtype: \"ndarray\",\n      _rvalue: typedArray.buffer,\n      _rshape: shape,\n      _rdtype: _dtype\n    };\n  }\n  /**\n   * Sets the new remote interface provided by the other site\n   *\n   * @param {Array} names list of function names\n   */\n\n\n  _setRemoteInterface(api) {\n    this._decode(api).then(intf => {\n      // update existing interface instead of recreating it\n      // this will preserve the object reference\n      if (this._remote_interface) {\n        // clear the interface\n        for (let k in this._remote_interface) delete this._remote_interface[k]; // then assign the new interfaces\n\n\n        Object.assign(this._remote_interface, intf);\n      } else this._remote_interface = intf;\n\n      this._fire(\"remoteReady\");\n\n      this._reportRemoteSet();\n    });\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * method. When the generated function is called, it will send the\n   * corresponding message to the remote site asking it to execute\n   * the particular method of its interface\n   *\n   * @param {String} name of the remote method\n   *\n   * @returns {Function} wrapped remote method\n   */\n\n\n  _genRemoteMethod(targetId, name, objectId) {\n    const me = this;\n\n    const remoteMethod = function () {\n      return new Promise(async (resolve, reject) => {\n        let id = null;\n\n        try {\n          id = me._method_refs.put(objectId ? objectId + \"/\" + name : name);\n\n          const wrapped_resolve = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return resolve.apply(this, arguments);\n          };\n\n          const wrapped_reject = function () {\n            if (id !== null) me._method_refs.fetch(id);\n            return reject.apply(this, arguments);\n          };\n\n          const encodedPromise = await me._wrap([wrapped_resolve, wrapped_reject]); // store the key id for removing them from the reference store together\n\n          wrapped_resolve.__promise_pair = encodedPromise[1]._rvalue;\n          wrapped_reject.__promise_pair = encodedPromise[0]._rvalue;\n          let args = Array.prototype.slice.call(arguments);\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n\n          if (name === \"register\" || name === \"registerService\" || name === \"register_service\" || name === \"export\" || name === \"on\") {\n            args = await me._wrap(args, true);\n          } else {\n            args = await me._wrap(args);\n          }\n\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n\n          me._connection.emit({\n            type: \"method\",\n            target_id: targetId,\n            name: name,\n            object_id: objectId,\n            args: args,\n            promise: encodedPromise,\n            with_kwargs: withKwargs\n          }, transferables);\n        } catch (e) {\n          if (id) me._method_refs.fetch(id);\n          reject(`Failed to exectue remote method (interface: ${objectId || me.id}, method: ${name}), error: ${e}`);\n        }\n      });\n    };\n\n    remoteMethod.__remote_method = true;\n    return remoteMethod;\n  }\n  /**\n   * Sends a responce reporting that interface just provided by the\n   * remote site was successfully set by this site as remote\n   */\n\n\n  _reportRemoteSet() {\n    this._connection.emit({\n      type: \"interfaceSetAsRemote\"\n    });\n  }\n  /**\n   * Prepares the provided set of remote method arguments for\n   * sending to the remote site, replaces all the callbacks with\n   * identifiers\n   *\n   * @param {Array} args to wrap\n   *\n   * @returns {Array} wrapped arguments\n   */\n\n\n  async _encode(aObject, asInterface, objectId) {\n    const aType = typeof aObject;\n\n    if (aType === \"number\" || aType === \"string\" || aType === \"boolean\" || aObject === null || aObject === undefined || aObject instanceof ArrayBuffer) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (typeof aObject === \"function\") {\n      if (asInterface) {\n        if (!objectId) throw new Error(\"objectId is not specified.\");\n        bObject = {\n          _rtype: \"interface\",\n          _rtarget_id: this._connection.peer_id,\n          _rintf: objectId,\n          _rvalue: asInterface\n        };\n\n        this._method_weakmap.set(aObject, bObject);\n      } else if (this._method_weakmap.has(aObject)) {\n        bObject = this._method_weakmap.get(aObject);\n      } else {\n        const cid = this._store.put(aObject);\n\n        bObject = {\n          _rtype: \"callback\",\n          _rtarget_id: this._connection.peer_id,\n          _rname: aObject.constructor && aObject.constructor.name || cid,\n          _rvalue: cid\n        };\n      }\n\n      return bObject;\n    } // skip if already encoded\n\n\n    if (aObject.constructor instanceof Object && aObject._rtype) {\n      // make sure the interface functions are encoded\n      if (aObject._rintf) {\n        const temp = aObject._rtype;\n        delete aObject._rtype;\n        bObject = await this._encode(aObject, asInterface, objectId);\n        bObject._rtype = temp;\n      } else {\n        bObject = aObject;\n      }\n\n      return bObject;\n    }\n\n    const transferables = [];\n    const _transfer = aObject._transfer;\n    const isarray = Array.isArray(aObject);\n\n    for (let tp of Object.keys(this._codecs)) {\n      const codec = this._codecs[tp];\n\n      if (codec.encoder && aObject instanceof codec.type) {\n        // TODO: what if multiple encoders found\n        let encodedObj = await Promise.resolve(codec.encoder(aObject));\n        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object\n\n        if (encodedObj && encodedObj._rintf) {\n          const temp = encodedObj._rtype;\n          delete encodedObj._rtype;\n          encodedObj = await this._encode(encodedObj, asInterface, objectId);\n          encodedObj._rtype = temp;\n        }\n\n        bObject = encodedObj;\n        return bObject;\n      }\n    }\n\n    if (\n    /*global tf*/\n    typeof tf !== \"undefined\" && tf.Tensor && aObject instanceof tf.Tensor) {\n      const v_buffer = aObject.dataSync();\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(v_buffer.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"ndarray\",\n        _rvalue: v_buffer.buffer,\n        _rshape: aObject.shape,\n        _rdtype: aObject.dtype\n      };\n    } else if (\n    /*global nj*/\n    typeof nj !== \"undefined\" && nj.NdArray && aObject instanceof nj.NdArray) {\n      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(aObject.selection.data);\n\n      if (aObject._transfer || _transfer) {\n        transferables.push(aObject.selection.data.buffer);\n        delete aObject._transfer;\n      }\n\n      bObject = {\n        _rtype: \"ndarray\",\n        _rvalue: aObject.selection.data.buffer,\n        _rshape: aObject.shape,\n        _rdtype: dtype\n      };\n    } else if (aObject instanceof Error) {\n      console.error(aObject);\n      bObject = {\n        _rtype: \"error\",\n        _rvalue: aObject.toString()\n      };\n    } else if (typeof File !== \"undefined\" && aObject instanceof File) {\n      bObject = {\n        _rtype: \"file\",\n        _rvalue: aObject,\n        _rpath: aObject._path || aObject.webkitRelativePath\n      };\n    } // send objects supported by structure clone algorithm\n    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm\n    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== \"undefined\" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== \"undefined\" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== \"undefined\" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== \"undefined\" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== \"undefined\" && aObject instanceof FileSystemWritableFileStream) {\n        bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.\n      } else if (typeof File !== \"undefined\" && aObject instanceof File) {\n        bObject = {\n          _rtype: \"file\",\n          _rname: aObject.name,\n          _rmime: aObject.type,\n          _rvalue: aObject,\n          _rpath: aObject._path || aObject.webkitRelativePath\n        };\n      } else if (aObject instanceof Blob) {\n        bObject = {\n          _rtype: \"blob\",\n          _rvalue: aObject\n        };\n      } else if (aObject instanceof ArrayBufferView) {\n        if (aObject._transfer || _transfer) {\n          transferables.push(aObject.buffer);\n          delete aObject._transfer;\n        }\n\n        const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"typedArrayToDtype\"])(aObject);\n        bObject = {\n          _rtype: \"typedarray\",\n          _rvalue: aObject.buffer,\n          _rdtype: dtype\n        };\n      } else if (aObject instanceof DataView) {\n        if (aObject._transfer || _transfer) {\n          transferables.push(aObject.buffer);\n          delete aObject._transfer;\n        }\n\n        bObject = {\n          _rtype: \"memoryview\",\n          _rvalue: aObject.buffer\n        };\n      } else if (aObject instanceof Set) {\n        bObject = {\n          _rtype: \"set\",\n          _rvalue: await this._encode(Array.from(aObject), asInterface)\n        };\n      } else if (aObject instanceof Map) {\n        bObject = {\n          _rtype: \"orderedmap\",\n          _rvalue: await this._encode(Array.from(aObject), asInterface)\n        };\n      } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {\n        bObject = isarray ? [] : {};\n        let keys; // an object/array\n\n        if (aObject.constructor === Object || Array.isArray(aObject)) {\n          keys = Object.keys(aObject);\n        } // a class\n        else if (aObject.constructor === Function) {\n            throw new Error(\"Please instantiate the class before exportting it.\");\n          } // instance of a class\n          else if (aObject.constructor.constructor === Function) {\n              keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject)); // TODO: use a proxy object to represent the actual object\n              // always encode class instance as interface\n\n              asInterface = true;\n            } else {\n              throw Error(\"Unsupported interface type\");\n            }\n\n        let hasFunction = false; // encode interfaces\n\n        if (aObject._rintf || asInterface) {\n          if (!objectId) {\n            objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"randId\"])();\n            this._object_store[objectId] = aObject;\n          }\n\n          for (let k of keys) {\n            if (k === \"constructor\") continue;\n\n            if (k.startsWith(\"_\")) {\n              continue;\n            }\n\n            bObject[k] = await this._encode(aObject[k], typeof asInterface === \"string\" ? asInterface + \".\" + k : k, objectId);\n\n            if (typeof aObject[k] === \"function\") {\n              hasFunction = true;\n            }\n          } // object id for dispose the object remotely\n\n\n          if (hasFunction) bObject._rintf = objectId; // remove interface when closed\n\n          if (aObject.on && typeof aObject.on === \"function\") {\n            aObject.on(\"close\", () => {\n              delete this._object_store[objectId];\n            });\n          }\n        } else {\n          for (let k of keys) {\n            if ([\"hasOwnProperty\", \"constructor\"].includes(k)) continue;\n            bObject[k] = await this._encode(aObject[k]);\n          }\n        } // for example, browserFS object\n\n      } else if (typeof aObject === \"object\") {\n        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject));\n        const objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"randId\"])();\n\n        for (let k of keys) {\n          if ([\"hasOwnProperty\", \"constructor\"].includes(k)) continue; // encode as interface\n\n          bObject[k] = await this._encode(aObject[k], k, bObject);\n        } // object id, used for dispose the object\n\n\n        bObject._rintf = objectId;\n      } else {\n        throw \"imjoy-rpc: Unsupported data type:\" + aObject;\n      }\n\n    if (transferables.length > 0) {\n      bObject.__transferables__ = transferables;\n    }\n\n    if (!bObject) {\n      throw new Error(\"Failed to encode object\");\n    }\n\n    return bObject;\n  }\n\n  async _decode(aObject, withPromise) {\n    if (!aObject) {\n      return aObject;\n    }\n\n    let bObject;\n\n    if (aObject[\"_rtype\"]) {\n      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          aObject = await this._decode(aObject, withPromise);\n          aObject._rtype = temp;\n        }\n\n        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));\n      } else if (aObject._rtype === \"callback\") {\n        bObject = this._genRemoteCallback(aObject._rtarget_id, aObject._rvalue, withPromise);\n      } else if (aObject._rtype === \"interface\") {\n        bObject = this._genRemoteMethod(aObject._rtarget_id, aObject._rvalue, aObject._rintf);\n      } else if (aObject._rtype === \"ndarray\") {\n        /*global nj tf*/\n        //create build array/tensor if used in the plugin\n        if (typeof nj !== \"undefined\" && nj.array) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);\n        } else if (typeof tf !== \"undefined\" && tf.Tensor) {\n          if (Array.isArray(aObject._rvalue)) {\n            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);\n          }\n\n          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"dtypeToTypedArray\"][aObject._rdtype];\n          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);\n        } else {\n          //keep it as regular if transfered to the main app\n          bObject = aObject;\n        }\n      } else if (aObject._rtype === \"error\") {\n        bObject = new Error(aObject._rvalue);\n      } else if (aObject._rtype === \"file\") {\n        if (aObject._rvalue instanceof File) {\n          bObject = aObject._rvalue; //patch _path\n\n          bObject._path = aObject._rpath;\n        } else {\n          bObject = new File([aObject._rvalue], aObject._rname, {\n            type: aObject._rmime\n          });\n          bObject._path = aObject._rpath;\n        }\n      } else if (aObject._rtype === \"typedarray\") {\n        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"dtypeToTypedArray\"][aObject._rdtype];\n        if (!arraytype) throw new Error(\"unsupported dtype: \" + aObject._rdtype);\n        bObject = new arraytype(aObject._rvalue);\n      } else if (aObject._rtype === \"memoryview\") {\n        bObject = new DataView(aObject._rvalue);\n      } else if (aObject._rtype === \"blob\") {\n        if (aObject._rvalue instanceof Blob) {\n          bObject = aObject._rvalue;\n        } else {\n          bObject = new Blob([aObject._rvalue], {\n            type: aObject._rmime\n          });\n        }\n      } else if (aObject._rtype === \"orderedmap\") {\n        bObject = new Map((await this._decode(aObject._rvalue, withPromise)));\n      } else if (aObject._rtype === \"set\") {\n        bObject = new Set((await this._decode(aObject._rvalue, withPromise)));\n      } else {\n        // make sure all the interface functions are decoded\n        if (aObject._rintf) {\n          const temp = aObject._rtype;\n          delete aObject._rtype;\n          bObject = await this._decode(aObject, withPromise);\n          bObject._rtype = temp;\n        } else bObject = aObject;\n      }\n    } else if (aObject.constructor === Object || Array.isArray(aObject)) {\n      const isarray = Array.isArray(aObject);\n      bObject = isarray ? [] : {};\n\n      for (let k of Object.keys(aObject)) {\n        if (isarray || aObject.hasOwnProperty(k)) {\n          const v = aObject[k];\n          bObject[k] = await this._decode(v, withPromise);\n        }\n      }\n    } else {\n      bObject = aObject;\n    }\n\n    if (bObject === undefined) {\n      throw new Error(\"Failed to decode object\");\n    } // store the object id for dispose\n\n\n    if (aObject._rintf) {\n      this._object_weakmap.set(bObject, aObject._rintf);\n    }\n\n    return bObject;\n  }\n\n  async _wrap(args, asInterface) {\n    return await this._encode(args, asInterface);\n  }\n  /**\n   * Unwraps the set of arguments delivered from the remote site,\n   * replaces all callback identifiers with a function which will\n   * initiate sending that callback identifier back to other site\n   *\n   * @param {Object} args to unwrap\n   *\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Array} unwrapped args\n   */\n\n\n  async _unwrap(args, withPromise) {\n    return await this._decode(args, withPromise);\n  }\n  /**\n   * Generates the wrapped function corresponding to a single remote\n   * callback. When the generated function is called, it will send\n   * the corresponding message to the remote site asking it to\n   * execute the particular callback previously saved during a call\n   * by the remote site a method from the interface of this site\n   *\n   * @param {Number} id of the remote callback to execute\n   * @param {Number} argNum argument index of the callback\n   * @param {Boolean} withPromise is true means this the callback should contain a promise\n   *\n   * @returns {Function} wrapped remote callback\n   */\n\n\n  _genRemoteCallback(targetId, cid, withPromise) {\n    const me = this;\n    let remoteCallback;\n\n    if (withPromise) {\n      remoteCallback = function () {\n        return new Promise(async (resolve, reject) => {\n          const args = await me._wrap(Array.prototype.slice.call(arguments));\n          const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n          const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n          if (withKwargs) delete args[argLength - 1]._rkwargs;\n          const transferables = args.__transferables__;\n          if (transferables) delete args.__transferables__;\n          const encodedPromise = await me._wrap([resolve, reject]); // store the key id for removing them from the reference store together\n\n          resolve.__promise_pair = encodedPromise[1]._rvalue;\n          reject.__promise_pair = encodedPromise[0]._rvalue;\n\n          try {\n            me._connection.emit({\n              type: \"callback\",\n              target_id: targetId,\n              id: cid,\n              args: args,\n              promise: encodedPromise,\n              with_kwargs: withKwargs\n            }, transferables);\n          } catch (e) {\n            reject(`Failed to exectue remote callback ( id: ${cid}).`);\n          }\n        });\n      };\n\n      return remoteCallback;\n    } else {\n      remoteCallback = async function () {\n        const args = await me._wrap(Array.prototype.slice.call(arguments));\n        const argLength = args.length; // if the last argument is an object, mark it as kwargs\n\n        const withKwargs = argLength > 0 && typeof args[argLength - 1] === \"object\" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;\n        if (withKwargs) delete args[argLength - 1]._rkwargs;\n        const transferables = args.__transferables__;\n        if (transferables) delete args.__transferables__;\n        return me._connection.emit({\n          type: \"callback\",\n          target_id: targetId,\n          id: cid,\n          args: args,\n          with_kwargs: withKwargs\n        }, transferables);\n      };\n\n      return remoteCallback;\n    }\n  }\n\n  reset() {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._remote_interface = null;\n    this._object_store = {};\n    this._method_weakmap = new WeakMap();\n    this._object_weakmap = new WeakMap();\n    this._local_api = null;\n    this._store = new ReferenceStore();\n    this._method_refs = new ReferenceStore();\n  }\n  /**\n   * Sends the notification message and breaks the connection\n   */\n\n\n  disconnect() {\n    this._connection.emit({\n      type: \"disconnect\"\n    });\n\n    this.reset();\n    setTimeout(() => {\n      this._connection.disconnect();\n    }, 2000);\n  }\n\n}\n/**\n * ReferenceStore is a special object which stores other objects\n * and provides the references (number) instead. This reference\n * may then be sent over a json-based communication channel (IPC\n * to another Node.js process or a message to the Worker). Other\n * site may then provide the reference in the responce message\n * implying the given object should be activated.\n *\n * Primary usage for the ReferenceStore is a storage for the\n * callbacks, which therefore makes it possible to initiate a\n * callback execution by the opposite site (which normally cannot\n * directly execute functions over the communication channel).\n *\n * Each stored object can only be fetched once and is not\n * available for the second time. Each stored object must be\n * fetched, since otherwise it will remain stored forever and\n * consume memory.\n *\n * Stored object indeces are simply the numbers, which are however\n * released along with the objects, and are later reused again (in\n * order to postpone the overflow, which should not likely happen,\n * but anyway).\n */\n\nclass ReferenceStore {\n  constructor() {\n    this._store = {}; // stored object\n\n    this._indices = [0]; // smallest available indices\n\n    this._readyHandler = function () {};\n\n    this._busyHandler = function () {};\n\n    this._readyHandler();\n  }\n  /**\n   * call handler when the store is empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onReady(readyHandler) {\n    this._readyHandler = readyHandler || function () {};\n  }\n  /**\n   * call handler when the store is not empty\n   *\n   * @param {FUNCTION} id of a handler\n   */\n\n\n  onBusy(busyHandler) {\n    this._busyHandler = busyHandler || function () {};\n  }\n  /**\n   * get the length of the store\n   *\n   */\n\n\n  getStack() {\n    return Object.keys(this._store).length;\n  }\n  /**\n   * @function _genId() generates the new reference id\n   *\n   * @returns {Number} smallest available id and reserves it\n   */\n\n\n  _genId() {\n    let id;\n\n    if (this._indices.length === 1) {\n      id = this._indices[0]++;\n    } else {\n      id = this._indices.shift();\n    }\n\n    return id;\n  }\n  /**\n   * Releases the given reference id so that it will be available by\n   * another object stored\n   *\n   * @param {Number} id to release\n   */\n\n\n  _releaseId(id) {\n    for (let i = 0; i < this._indices.length; i++) {\n      if (id < this._indices[i]) {\n        this._indices.splice(i, 0, id);\n\n        break;\n      }\n    } // cleaning-up the sequence tail\n\n\n    for (let i = this._indices.length - 1; i >= 0; i--) {\n      if (this._indices[i] - 1 === this._indices[i - 1]) {\n        this._indices.pop();\n      } else {\n        break;\n      }\n    }\n  }\n  /**\n   * Stores the given object and returns the refernce id instead\n   *\n   * @param {Object} obj to store\n   *\n   * @returns {Number} reference id of the stored object\n   */\n\n\n  put(obj) {\n    if (this._busyHandler && Object.keys(this._store).length === 0) {\n      this._busyHandler();\n    }\n\n    const id = this._genId();\n\n    this._store[id] = obj;\n    return id;\n  }\n  /**\n   * Retrieves previously stored object and releases its reference\n   *\n   * @param {Number} id of an object to retrieve\n   */\n\n\n  fetch(id) {\n    const obj = this._store[id];\n\n    if (obj && !obj.__remote_method) {\n      delete this._store[id];\n\n      this._releaseId(id);\n\n      if (this._readyHandler && Object.keys(this._store).length === 0) {\n        this._readyHandler();\n      }\n    }\n\n    if (obj && obj.__promise_pair) {\n      this.fetch(obj.__promise_pair);\n    }\n\n    return obj;\n  }\n\n}\n\n/***/ }),\n\n/***/ \"./src/utils.js\":\n/*!**********************!*\\\n  !*** ./src/utils.js ***!\n  \\**********************/\n/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, urlJoin, MessageEmitter */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randId\", function() { return randId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dtypeToTypedArray\", function() { return dtypeToTypedArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirementsInWindow\", function() { return loadRequirementsInWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirementsInWebworker\", function() { return loadRequirementsInWebworker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRequirements\", function() { return loadRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeConfig\", function() { return normalizeConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typedArrayToDtypeMapping\", function() { return typedArrayToDtypeMapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typedArrayToDtype\", function() { return typedArrayToDtype; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cacheRequirements\", function() { return cacheRequirements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupServiceWorker\", function() { return setupServiceWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlJoin\", function() { return urlJoin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageEmitter\", function() { return MessageEmitter; });\nfunction randId() {\n  return Math.random().toString(36).substr(2, 10) + new Date().getTime();\n}\nconst dtypeToTypedArray = {\n  int8: Int8Array,\n  int16: Int16Array,\n  int32: Int32Array,\n  uint8: Uint8Array,\n  uint16: Uint16Array,\n  uint32: Uint32Array,\n  float32: Float32Array,\n  float64: Float64Array,\n  array: Array\n};\nasync function loadRequirementsInWindow(requirements) {\n  function _importScript(url) {\n    //url is URL of external file, implementationCode is the code\n    //to be called from the file, location is the location to\n    //insert the <script> element\n    return new Promise((resolve, reject) => {\n      var scriptTag = document.createElement(\"script\");\n      scriptTag.src = url;\n      scriptTag.type = \"text/javascript\";\n      scriptTag.onload = resolve;\n\n      scriptTag.onreadystatechange = function () {\n        if (this.readyState === \"loaded\" || this.readyState === \"complete\") {\n          resolve();\n        }\n      };\n\n      scriptTag.onerror = reject;\n      document.head.appendChild(scriptTag);\n    });\n  } // support importScripts outside web worker\n\n\n  async function importScripts() {\n    var args = Array.prototype.slice.call(arguments),\n        len = args.length,\n        i = 0;\n\n    for (; i < len; i++) {\n      await _importScript(args[i]);\n    }\n  }\n\n  if (requirements && (Array.isArray(requirements) || typeof requirements === \"string\")) {\n    try {\n      var link_node;\n      requirements = typeof requirements === \"string\" ? [requirements] : requirements;\n\n      if (Array.isArray(requirements)) {\n        for (var i = 0; i < requirements.length; i++) {\n          if (requirements[i].toLowerCase().endsWith(\".css\") || requirements[i].startsWith(\"css:\")) {\n            if (requirements[i].startsWith(\"css:\")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            link_node = document.createElement(\"link\");\n            link_node.rel = \"stylesheet\";\n            link_node.href = requirements[i];\n            document.head.appendChild(link_node);\n          } else if (requirements[i].toLowerCase().endsWith(\".mjs\") || requirements[i].startsWith(\"mjs:\")) {\n            // import esmodule\n            if (requirements[i].startsWith(\"mjs:\")) {\n              requirements[i] = requirements[i].slice(4);\n            }\n\n            await import(\n            /* webpackIgnore: true */\n            requirements[i]);\n          } else if (requirements[i].toLowerCase().endsWith(\".js\") || requirements[i].startsWith(\"js:\")) {\n            if (requirements[i].startsWith(\"js:\")) {\n              requirements[i] = requirements[i].slice(3);\n            }\n\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith(\"http\")) {\n            await importScripts(requirements[i]);\n          } else if (requirements[i].startsWith(\"cache:\")) {//ignore cache\n          } else {\n            console.log(\"Unprocessed requirements url: \" + requirements[i]);\n          }\n        }\n      } else {\n        throw \"unsupported requirements definition\";\n      }\n    } catch (e) {\n      throw \"failed to import required scripts: \" + requirements.toString();\n    }\n  }\n}\nasync function loadRequirementsInWebworker(requirements) {\n  if (requirements && (Array.isArray(requirements) || typeof requirements === \"string\")) {\n    try {\n      if (!Array.isArray(requirements)) {\n        requirements = [requirements];\n      }\n\n      for (var i = 0; i < requirements.length; i++) {\n        if (requirements[i].toLowerCase().endsWith(\".css\") || requirements[i].startsWith(\"css:\")) {\n          throw \"unable to import css in a webworker\";\n        } else if (requirements[i].toLowerCase().endsWith(\".js\") || requirements[i].startsWith(\"js:\")) {\n          if (requirements[i].startsWith(\"js:\")) {\n            requirements[i] = requirements[i].slice(3);\n          }\n\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith(\"http\")) {\n          importScripts(requirements[i]);\n        } else if (requirements[i].startsWith(\"cache:\")) {//ignore cache\n        } else {\n          console.log(\"Unprocessed requirements url: \" + requirements[i]);\n        }\n      }\n    } catch (e) {\n      throw \"failed to import required scripts: \" + requirements.toString();\n    }\n  }\n}\nfunction loadRequirements(requirements) {\n  if (typeof WorkerGlobalScope !== \"undefined\" && self instanceof WorkerGlobalScope) {\n    return loadRequirementsInWebworker(requirements);\n  } else {\n    return loadRequirementsInWindow(requirements);\n  }\n}\nfunction normalizeConfig(config) {\n  config.version = config.version || \"0.1.0\";\n  config.description = config.description || `[TODO: add description for ${config.name} ]`;\n  config.type = config.type || \"rpc-window\";\n  config.id = config.id || randId();\n  config.target_origin = config.target_origin || \"*\";\n  config.allow_execution = config.allow_execution || false; // remove functions\n\n  config = Object.keys(config).reduce((p, c) => {\n    if (typeof config[c] !== \"function\") p[c] = config[c];\n    return p;\n  }, {});\n  return config;\n}\nconst typedArrayToDtypeMapping = {\n  Int8Array: \"int8\",\n  Int16Array: \"int16\",\n  Int32Array: \"int32\",\n  Uint8Array: \"uint8\",\n  Uint16Array: \"uint16\",\n  Uint32Array: \"uint32\",\n  Float32Array: \"float32\",\n  Float64Array: \"float64\",\n  Array: \"array\"\n};\nconst typedArrayToDtypeKeys = [];\n\nfor (const arrType of Object.keys(typedArrayToDtypeMapping)) {\n  typedArrayToDtypeKeys.push(eval(arrType));\n}\n\nfunction typedArrayToDtype(obj) {\n  let dtype = typedArrayToDtypeMapping[obj.constructor.name];\n\n  if (!dtype) {\n    const pt = Object.getPrototypeOf(obj);\n\n    for (const arrType of typedArrayToDtypeKeys) {\n      if (pt instanceof arrType) {\n        dtype = typedArrayToDtypeMapping[arrType.name];\n        break;\n      }\n    }\n  }\n\n  return dtype;\n}\n\nfunction cacheUrlInServiceWorker(url) {\n  return new Promise(function (resolve, reject) {\n    const message = {\n      command: \"add\",\n      url: url\n    };\n\n    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {\n      reject(\"Service worker is not supported.\");\n      return;\n    }\n\n    const messageChannel = new MessageChannel();\n\n    messageChannel.port1.onmessage = function (event) {\n      if (event.data && event.data.error) {\n        reject(event.data.error);\n      } else {\n        resolve(event.data && event.data.result);\n      }\n    };\n\n    if (navigator.serviceWorker && navigator.serviceWorker.controller) {\n      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);\n    } else {\n      reject(\"Service worker controller is not available\");\n    }\n  });\n}\n\nasync function cacheRequirements(requirements) {\n  requirements = requirements || [];\n\n  if (!Array.isArray(requirements)) {\n    requirements = [requirements];\n  }\n\n  for (let req of requirements) {\n    //remove prefix\n    if (req.startsWith(\"js:\")) req = req.slice(3);\n    if (req.startsWith(\"css:\")) req = req.slice(4);\n    if (req.startsWith(\"cache:\")) req = req.slice(6);\n    if (!req.startsWith(\"http\")) continue;\n    await cacheUrlInServiceWorker(req).catch(e => {\n      console.error(e);\n    });\n  }\n}\nfunction setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {\n  // register service worker for offline access\n  if (\"serviceWorker\" in navigator) {\n    baseUrl = baseUrl || \"/\";\n    navigator.serviceWorker.register(baseUrl + \"plugin-service-worker.js\").then(function (registration) {\n      // Registration was successful\n      console.log(\"ServiceWorker registration successful with scope: \", registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log(\"ServiceWorker registration failed: \", err);\n    });\n    targetOrigin = targetOrigin || \"*\";\n    cacheCallback = cacheCallback || cacheRequirements;\n\n    if (cacheCallback && typeof cacheCallback !== \"function\") {\n      throw new Error(\"config.cache_requirements must be a function\");\n    }\n\n    window.addEventListener(\"message\", function (e) {\n      if (targetOrigin === \"*\" || e.origin === targetOrigin) {\n        const m = e.data;\n\n        if (m.type === \"cacheRequirements\") {\n          cacheCallback(m.requirements);\n        }\n      }\n    });\n  }\n} //#Source https://bit.ly/2neWfJ2\n\nfunction urlJoin(...args) {\n  return args.join(\"/\").replace(/[\\/]+/g, \"/\").replace(/^(.+):\\//, \"$1://\").replace(/^file:/, \"file:/\").replace(/\\/(\\?|&|#[^!])/g, \"$1\").replace(/\\?/g, \"&\").replace(\"&\", \"?\");\n}\nclass MessageEmitter {\n  constructor(debug) {\n    this._event_handlers = {};\n    this._once_handlers = {};\n    this._debug = debug;\n  }\n\n  emit() {\n    throw new Error(\"emit is not implemented\");\n  }\n\n  on(event, handler) {\n    if (!this._event_handlers[event]) {\n      this._event_handlers[event] = [];\n    }\n\n    this._event_handlers[event].push(handler);\n  }\n\n  once(event, handler) {\n    handler.___event_run_once = true;\n    this.on(event, handler);\n  }\n\n  off(event, handler) {\n    if (!event && !handler) {\n      // remove all events handlers\n      this._event_handlers = {};\n    } else if (event && !handler) {\n      // remove all hanlders for the event\n      if (this._event_handlers[event]) this._event_handlers[event] = [];\n    } else {\n      // remove a specific handler\n      if (this._event_handlers[event]) {\n        const idx = this._event_handlers[event].indexOf(handler);\n\n        if (idx >= 0) {\n          this._event_handlers[event].splice(idx, 1);\n        }\n      }\n    }\n  }\n\n  _fire(event, data) {\n    if (this._event_handlers[event]) {\n      var i = this._event_handlers[event].length;\n\n      while (i--) {\n        const handler = this._event_handlers[event][i];\n\n        try {\n          handler(data);\n        } catch (e) {\n          console.error(e);\n        } finally {\n          if (handler.___event_run_once) {\n            this._event_handlers[event].splice(i, 1);\n          }\n        }\n      }\n    } else {\n      if (this._debug) {\n        console.warn(\"unhandled event\", event, data);\n      }\n    }\n  }\n\n}\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=plugin.webworker.js.map", null);
};

/***/ }),

/***/ "./src/pluginCore.js":
/*!***************************!*\
  !*** ./src/pluginCore.js ***!
  \***************************/
/*! exports provided: connectRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectRPC", function() { return connectRPC; });
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/**
 * Core plugin script loaded into the plugin process/thread.
 *
 * Initializes the plugin-site API global methods.
 */

function connectRPC(connection, config) {
  config = config || {};
  const codecs = {};
  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__["RPC"](connection, config, codecs);
  rpc.on("getInterface", function () {
    launchConnected();
  });
  rpc.on("remoteReady", function () {
    const api = rpc.getRemote() || {};

    api.registerCodec = function (config) {
      if (!config["name"] || !config["encoder"] && !config["decoder"]) {
        throw new Error("Invalid codec format, please make sure you provide a name, type, encoder and decoder.");
      } else {
        if (config.type) {
          for (let k of Object.keys(codecs)) {
            if (codecs[k].type === config.type || k === config.name) {
              delete codecs[k];
              console.warn("Remove duplicated codec: " + k);
            }
          }
        }

        codecs[config["name"]] = config;
      }
    };

    api.init = function (config) {
      // register a minimal plugin api
      rpc.setInterface({
        setup() {}

      }, config);
    };

    api.disposeObject = function (obj) {
      rpc.disposeObject(obj);
    };

    api.export = function (_interface, config) {
      rpc.setInterface(_interface, config);
    };

    api.onLoad = function (handler) {
      handler = checkHandler(handler);

      if (connected) {
        handler();
      } else {
        connectedHandlers.push(handler);
      }
    };

    api.dispose = function (_interface) {
      rpc.disconnect();
    };

    api._rpc = rpc;

    if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
      self.api = api;
      self.postMessage({
        type: "imjoy_remote_api_ready"
      });
      self.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: api
      }));
    } else if (typeof window) {
      window.dispatchEvent(new CustomEvent("imjoy_remote_api_ready", {
        detail: api
      }));
    }
  });
  let connected = false;
  const connectedHandlers = [];

  const launchConnected = function () {
    if (!connected) {
      connected = true;
      let handler;

      while (handler = connectedHandlers.pop()) {
        handler();
      }
    }
  };

  const checkHandler = function (handler) {
    const type = typeof handler;

    if (type !== "function") {
      const msg = "A function may only be subsribed to the event, " + type + " was provided instead";
      throw new Error(msg);
    }

    return handler;
  };

  return rpc;
}

/***/ }),

/***/ "./src/pluginIframe.js":
/*!*****************************!*\
  !*** ./src/pluginIframe.js ***!
  \*****************************/
/*! exports provided: Connection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupIframe; });
/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ "./src/pluginCore.js");
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/**
 * Contains the routines loaded by the plugin iframe under web-browser
 * in case when worker failed to initialize
 *
 * Initializes the web environment version of the platform-dependent
 * connection object for the plugin site
 */


 // Create a new, plain <span> element

function _htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = html;
  return template.content.firstChild;
}

async function executeEsModule(content) {
  const dataUri = "data:text/javascript;charset=utf-8," + encodeURIComponent(content);
  await import(
  /* webpackIgnore: true */
  dataUri);
}

class Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__["MessageEmitter"] {
  constructor(config) {
    super(config && config.debug);
    this.config = config || {};
    this.peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  }

  connect() {
    this.config.target_origin = this.config.target_origin || "*"; // this will call handleEvent function

    if (this.config.broadcastChannel) {
      this.broadcastChannel = new BroadcastChannel(this.config.broadcastChannel);
    } else {
      this.broadcastChannel = null;
    }

    if (this.broadcastChannel) this.broadcastChannel.addEventListener("message", this);else window.addEventListener("message", this);
    this.emit({
      type: "initialized",
      config: this.config,
      origin: window.location.origin,
      peer_id: this.peer_id
    });

    this._fire("connected");
  }

  handleEvent(e) {
    if (e.type === "message" && (this.broadcastChannel || this.config.target_origin === "*" || e.origin === this.config.target_origin)) {
      if (e.data.peer_id === this.peer_id) {
        this._fire(e.data.type, e.data);
      } else if (this.config.debug) {
        console.log(`connection peer id mismatch ${e.data.peer_id} !== ${this.peer_id}`);
      }
    }
  }

  disconnect() {
    this._fire("beforeDisconnect");

    window.removeEventListener("message", this);

    this._fire("disconnected");
  }

  emit(data) {
    let transferables;

    if (data.__transferables__) {
      transferables = data.__transferables__;
      delete data.__transferables__;
    }

    if (this.broadcastChannel) this.broadcastChannel.postMessage(data);else parent.postMessage(data, this.config.target_origin, transferables);
  }

  async execute(code) {
    try {
      if (code.type === "requirements") {
        await Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirementsInWindow"])(code.requirements);
      } else if (code.type === "script") {
        if (code.src) {
          var script_node = document.createElement("script");
          script_node.setAttribute("type", code.attrs.type);
          script_node.setAttribute("src", code.src);
          document.head.appendChild(script_node);
        } else {
          if (code.content && code.attrs.lang === "javascript") {
            // document.addEventListener("DOMContentLoaded", function(){
            if (code.attrs.type === "module") {
              await executeEsModule(code.content);
            } else {
              eval(code.content);
            } // });

          } else {
            var node = document.createElement("script");

            for (let k in code.attrs) {
              node.setAttribute(k, code.attrs[k]);
            }

            node.appendChild(document.createTextNode(code.content));
            document.body.appendChild(node);
          }
        }
      } else if (code.type === "style") {
        const style_node = document.createElement("style");

        if (code.src) {
          style_node.src = code.src;
        }

        style_node.innerHTML = code.content;
        document.head.appendChild(style_node);
      } else if (code.type === "link") {
        const link_node_ = document.createElement("link");

        if (code.rel) {
          link_node_.rel = code.rel;
        }

        if (code.href) {
          link_node_.href = code.href;
        }

        if (code.attrs && code.attrs.type) {
          link_node_.type = code.attrs.type;
        }

        document.head.appendChild(link_node_);
      } else if (code.type === "html") {
        document.body.appendChild(_htmlToElement(code.content));
      } else {
        throw "unsupported code type.";
      }

      parent.postMessage({
        type: "executed"
      }, this.config.target_origin);
    } catch (e) {
      console.error("failed to execute scripts: ", code, e);
      parent.postMessage({
        type: "executed",
        error: e.stack || String(e)
      }, this.config.target_origin);
    }
  }

}
function setupIframe(config) {
  config = config || {};
  config.dedicated_thread = false;
  config.lang = "javascript";
  config.api_version = _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"];
  const conn = new Connection(config);
  Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__["connectRPC"])(conn, config);
  conn.connect();
}

/***/ }),

/***/ "./src/rpc.js":
/*!********************!*\
  !*** ./src/rpc.js ***!
  \********************/
/*! exports provided: API_VERSION, RPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return RPC; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/**
 * Contains the RPC object used both by the application
 * site, and by each plugin
 */

const API_VERSION = "0.2.3";
const ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;

function _appendBuffer(buffer1, buffer2) {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
}

function indexObject(obj, is) {
  if (!is) throw new Error("undefined index");
  if (typeof is === "string") return indexObject(obj, is.split("."));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));
}
/**
 * RPC object represents a single site in the
 * communication protocol between the application and the plugin
 *
 * @param {Object} connection a special object allowing to send
 * and receive messages from the opposite site (basically it
 * should only provide send() and onMessage() methods)
 */


class RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__["MessageEmitter"] {
  constructor(connection, config, codecs) {
    super(config && config.debug);
    this._connection = connection;
    this.config = config || {};
    this._codecs = codecs || {};
    this._object_store = {};
    this._method_weakmap = new WeakMap();
    this._object_weakmap = new WeakMap();
    this._local_api = null;
    this._remote_set = false; // make sure there is an execute function

    const name = this.config.name;

    this._connection.execute = this._connection.execute || function () {
      throw new Error(`connection.execute not implemented (in "${name}")`);
    };

    this._store = new ReferenceStore();
    this._method_refs = new ReferenceStore();

    this._method_refs.onReady(() => {
      this._fire("remoteIdle");
    });

    this._method_refs.onBusy(() => {
      this._fire("remoteBusy");
    });

    this._setupMessageHanlders();
  }

  init() {
    this._connection.emit({
      type: "initialized",
      config: this.config,
      peer_id: this._connection.peer_id
    });
  }

  setConfig(config) {
    if (config) for (const k of Object.keys(config)) {
      this.config[k] = config[k];
    }
  }
  /**
   * Set a handler to be called when received a responce from the
   * remote site reporting that the previously provided interface
   * has been successfully set as remote for that site
   *
   * @param {Function} handler
   */


  getRemoteCallStack() {
    return this._method_refs.getStack();
  }
  /**
   * @returns {Object} set of remote interface methods
   */


  getRemote() {
    return this._remote_interface;
  }
  /**
   * Sets the interface of this site making it available to the
   * remote site by sending a message with a set of methods names
   *
   * @param {Object} _interface to set
   */


  setInterface(_interface, config) {
    config = config || {};
    this.config.name = config.name || this.config.name;
    this.config.description = config.description || this.config.description;

    if (this.config.forwarding_functions) {
      for (let func_name of this.config.forwarding_functions) {
        const _remote = this._remote_interface;

        if (_remote[func_name]) {
          if (_interface.constructor === Object) {
            if (!_interface[func_name]) {
              _interface[func_name] = (...args) => {
                _remote[func_name](...args);
              };
            }
          } else if (_interface.constructor.constructor === Function) {
            if (!_interface.constructor.prototype[func_name]) {
              _interface.constructor.prototype[func_name] = (...args) => {
                _remote[func_name](...args);
              };
            }
          }
        }
      }
    }

    this._local_api = _interface;
    if (!this._remote_set) this._fire("interfaceAvailable");else this.send_interface();
    return new Promise(resolve => {
      this.once("interfaceSetAsRemote", resolve);
    });
  }
  /**
   * Sends the actual interface to the remote site upon it was
   * updated or by a special request of the remote site
   */


  sendInterface() {
    if (!this._local_api) {
      throw new Error("interface is not set.");
    }

    this._encode(this._local_api, true).then(api => {
      this._connection.emit({
        type: "setInterface",
        api: api
      });
    });
  }

  _disposeObject(objectId) {
    if (this._object_store[objectId]) {
      delete this._object_store[objectId];
    } else {
      throw new Error(`Object (id=${objectId}) not found.`);
    }
  }

  disposeObject(obj) {
    return new Promise((resolve, reject) => {
      if (this._object_weakmap.has(obj)) {
        const objectId = this._object_weakmap.get(obj);

        this._connection.once("disposed", data => {
          if (data.error) reject(new Error(data.error));else resolve();
        });

        this._connection.emit({
          type: "disposeObject",
          object_id: objectId
        });
      } else {
        throw new Error("Invalid object");
      }
    });
  }
  /**
   * Handles a message from the remote site
   */


  _setupMessageHanlders() {
    this._connection.on("init", this.init);

    this._connection.on("execute", data => {
      Promise.resolve(this._connection.execute(data.code)).then(() => {
        this._connection.emit({
          type: "executed"
        });
      }).catch(e => {
        console.error(e);

        this._connection.emit({
          type: "executed",
          error: String(e)
        });
      });
    });

    this._connection.on("method", async data => {
      let resolve, reject, method, method_this, args, result;

      try {
        if (data.promise) {
          [resolve, reject] = await this._unwrap(data.promise, false);
        }

        const _interface = this._object_store[data.object_id];
        method = indexObject(_interface, data.name);

        if (data.name.includes(".")) {
          const tmp = data.name.split(".");
          const intf_index = tmp.slice(0, tmp.length - 1).join(".");
          method_this = indexObject(_interface, intf_index);
        } else {
          method_this = _interface;
        }

        args = await this._unwrap(data.args, true);

        if (data.promise) {
          result = method.apply(method_this, args);

          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } else {
          method.apply(method_this, args);
        }
      } catch (err) {
        console.error(this.config.name, err);

        if (reject) {
          reject(err);
        }
      }
    });

    this._connection.on("callback", async data => {
      let resolve, reject, method, args, result;

      try {
        if (data.promise) {
          [resolve, reject] = await this._unwrap(data.promise, false);
        }

        if (data.promise) {
          method = this._store.fetch(data.id);
          args = await this._unwrap(data.args, true);

          if (!method) {
            throw new Error("Callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");
          }

          result = method.apply(null, args);

          if (result instanceof Promise || method.constructor && method.constructor.name === "AsyncFunction") {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } else {
          method = this._store.fetch(data.id);
          args = await this._unwrap(data.args, true);

          if (!method) {
            throw new Error("Please notice that callback function can only called once, if you want to call a function for multiple times, please make it as a plugin api function. See https://imjoy.io/docs for more details.");
          }

          method.apply(null, args);
        }
      } catch (err) {
        console.error(this.config.name, err);

        if (reject) {
          reject(err);
        }
      }
    });

    this._connection.on("disposeObject", data => {
      try {
        this._disposeObject(data.object_id);

        this._connection.emit({
          type: "disposed"
        });
      } catch (e) {
        console.error(e);

        this._connection.emit({
          type: "disposed",
          error: String(e)
        });
      }
    });

    this._connection.on("setInterface", data => {
      this._setRemoteInterface(data.api);
    });

    this._connection.on("getInterface", () => {
      this._fire("getInterface");

      if (this._local_api) {
        this.sendInterface();
      } else {
        this.once("interfaceAvailable", () => {
          this.sendInterface();
        });
      }
    });

    this._connection.on("interfaceSetAsRemote", () => {
      this._remote_set = true;

      this._fire("interfaceSetAsRemote");
    });

    this._connection.on("disconnect", () => {
      this._fire("beforeDisconnect");

      this._connection.disconnect();

      this._fire("disconnected");
    });
  }
  /**
   * Sends a requests to the remote site asking it to provide its
   * current interface
   */


  requestRemote() {
    this._connection.emit({
      type: "getInterface"
    });
  }

  _ndarray(typedArray, shape, dtype) {
    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(typedArray);

    if (dtype && dtype !== _dtype) {
      throw "dtype doesn't match the type of the array: " + _dtype + " != " + dtype;
    }

    shape = shape || [typedArray.length];
    return {
      _rtype: "ndarray",
      _rvalue: typedArray.buffer,
      _rshape: shape,
      _rdtype: _dtype
    };
  }
  /**
   * Sets the new remote interface provided by the other site
   *
   * @param {Array} names list of function names
   */


  _setRemoteInterface(api) {
    this._decode(api).then(intf => {
      // update existing interface instead of recreating it
      // this will preserve the object reference
      if (this._remote_interface) {
        // clear the interface
        for (let k in this._remote_interface) delete this._remote_interface[k]; // then assign the new interfaces


        Object.assign(this._remote_interface, intf);
      } else this._remote_interface = intf;

      this._fire("remoteReady");

      this._reportRemoteSet();
    });
  }
  /**
   * Generates the wrapped function corresponding to a single remote
   * method. When the generated function is called, it will send the
   * corresponding message to the remote site asking it to execute
   * the particular method of its interface
   *
   * @param {String} name of the remote method
   *
   * @returns {Function} wrapped remote method
   */


  _genRemoteMethod(targetId, name, objectId) {
    const me = this;

    const remoteMethod = function () {
      return new Promise(async (resolve, reject) => {
        let id = null;

        try {
          id = me._method_refs.put(objectId ? objectId + "/" + name : name);

          const wrapped_resolve = function () {
            if (id !== null) me._method_refs.fetch(id);
            return resolve.apply(this, arguments);
          };

          const wrapped_reject = function () {
            if (id !== null) me._method_refs.fetch(id);
            return reject.apply(this, arguments);
          };

          const encodedPromise = await me._wrap([wrapped_resolve, wrapped_reject]); // store the key id for removing them from the reference store together

          wrapped_resolve.__promise_pair = encodedPromise[1]._rvalue;
          wrapped_reject.__promise_pair = encodedPromise[0]._rvalue;
          let args = Array.prototype.slice.call(arguments);
          const argLength = args.length; // if the last argument is an object, mark it as kwargs

          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
          if (withKwargs) delete args[argLength - 1]._rkwargs;

          if (name === "register" || name === "registerService" || name === "register_service" || name === "export" || name === "on") {
            args = await me._wrap(args, true);
          } else {
            args = await me._wrap(args);
          }

          const transferables = args.__transferables__;
          if (transferables) delete args.__transferables__;

          me._connection.emit({
            type: "method",
            target_id: targetId,
            name: name,
            object_id: objectId,
            args: args,
            promise: encodedPromise,
            with_kwargs: withKwargs
          }, transferables);
        } catch (e) {
          if (id) me._method_refs.fetch(id);
          reject(`Failed to exectue remote method (interface: ${objectId || me.id}, method: ${name}), error: ${e}`);
        }
      });
    };

    remoteMethod.__remote_method = true;
    return remoteMethod;
  }
  /**
   * Sends a responce reporting that interface just provided by the
   * remote site was successfully set by this site as remote
   */


  _reportRemoteSet() {
    this._connection.emit({
      type: "interfaceSetAsRemote"
    });
  }
  /**
   * Prepares the provided set of remote method arguments for
   * sending to the remote site, replaces all the callbacks with
   * identifiers
   *
   * @param {Array} args to wrap
   *
   * @returns {Array} wrapped arguments
   */


  async _encode(aObject, asInterface, objectId) {
    const aType = typeof aObject;

    if (aType === "number" || aType === "string" || aType === "boolean" || aObject === null || aObject === undefined || aObject instanceof ArrayBuffer) {
      return aObject;
    }

    let bObject;

    if (typeof aObject === "function") {
      if (asInterface) {
        if (!objectId) throw new Error("objectId is not specified.");
        bObject = {
          _rtype: "interface",
          _rtarget_id: this._connection.peer_id,
          _rintf: objectId,
          _rvalue: asInterface
        };

        this._method_weakmap.set(aObject, bObject);
      } else if (this._method_weakmap.has(aObject)) {
        bObject = this._method_weakmap.get(aObject);
      } else {
        const cid = this._store.put(aObject);

        bObject = {
          _rtype: "callback",
          _rtarget_id: this._connection.peer_id,
          _rname: aObject.constructor && aObject.constructor.name || cid,
          _rvalue: cid
        };
      }

      return bObject;
    } // skip if already encoded


    if (aObject.constructor instanceof Object && aObject._rtype) {
      // make sure the interface functions are encoded
      if (aObject._rintf) {
        const temp = aObject._rtype;
        delete aObject._rtype;
        bObject = await this._encode(aObject, asInterface, objectId);
        bObject._rtype = temp;
      } else {
        bObject = aObject;
      }

      return bObject;
    }

    const transferables = [];
    const _transfer = aObject._transfer;
    const isarray = Array.isArray(aObject);

    for (let tp of Object.keys(this._codecs)) {
      const codec = this._codecs[tp];

      if (codec.encoder && aObject instanceof codec.type) {
        // TODO: what if multiple encoders found
        let encodedObj = await Promise.resolve(codec.encoder(aObject));
        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object

        if (encodedObj && encodedObj._rintf) {
          const temp = encodedObj._rtype;
          delete encodedObj._rtype;
          encodedObj = await this._encode(encodedObj, asInterface, objectId);
          encodedObj._rtype = temp;
        }

        bObject = encodedObj;
        return bObject;
      }
    }

    if (
    /*global tf*/
    typeof tf !== "undefined" && tf.Tensor && aObject instanceof tf.Tensor) {
      const v_buffer = aObject.dataSync();

      if (aObject._transfer || _transfer) {
        transferables.push(v_buffer.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "ndarray",
        _rvalue: v_buffer.buffer,
        _rshape: aObject.shape,
        _rdtype: aObject.dtype
      };
    } else if (
    /*global nj*/
    typeof nj !== "undefined" && nj.NdArray && aObject instanceof nj.NdArray) {
      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject.selection.data);

      if (aObject._transfer || _transfer) {
        transferables.push(aObject.selection.data.buffer);
        delete aObject._transfer;
      }

      bObject = {
        _rtype: "ndarray",
        _rvalue: aObject.selection.data.buffer,
        _rshape: aObject.shape,
        _rdtype: dtype
      };
    } else if (aObject instanceof Error) {
      console.error(aObject);
      bObject = {
        _rtype: "error",
        _rvalue: aObject.toString()
      };
    } else if (typeof File !== "undefined" && aObject instanceof File) {
      bObject = {
        _rtype: "file",
        _rvalue: aObject,
        _rpath: aObject._path || aObject.webkitRelativePath
      };
    } // send objects supported by structure clone algorithm
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== "undefined" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== "undefined" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== "undefined" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== "undefined" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== "undefined" && aObject instanceof FileSystemWritableFileStream) {
        bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.
      } else if (typeof File !== "undefined" && aObject instanceof File) {
        bObject = {
          _rtype: "file",
          _rname: aObject.name,
          _rmime: aObject.type,
          _rvalue: aObject,
          _rpath: aObject._path || aObject.webkitRelativePath
        };
      } else if (aObject instanceof Blob) {
        bObject = {
          _rtype: "blob",
          _rvalue: aObject
        };
      } else if (aObject instanceof ArrayBufferView) {
        if (aObject._transfer || _transfer) {
          transferables.push(aObject.buffer);
          delete aObject._transfer;
        }

        const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject);
        bObject = {
          _rtype: "typedarray",
          _rvalue: aObject.buffer,
          _rdtype: dtype
        };
      } else if (aObject instanceof DataView) {
        if (aObject._transfer || _transfer) {
          transferables.push(aObject.buffer);
          delete aObject._transfer;
        }

        bObject = {
          _rtype: "memoryview",
          _rvalue: aObject.buffer
        };
      } else if (aObject instanceof Set) {
        bObject = {
          _rtype: "set",
          _rvalue: await this._encode(Array.from(aObject), asInterface)
        };
      } else if (aObject instanceof Map) {
        bObject = {
          _rtype: "orderedmap",
          _rvalue: await this._encode(Array.from(aObject), asInterface)
        };
      } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {
        bObject = isarray ? [] : {};
        let keys; // an object/array

        if (aObject.constructor === Object || Array.isArray(aObject)) {
          keys = Object.keys(aObject);
        } // a class
        else if (aObject.constructor === Function) {
            throw new Error("Please instantiate the class before exportting it.");
          } // instance of a class
          else if (aObject.constructor.constructor === Function) {
              keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject)); // TODO: use a proxy object to represent the actual object
              // always encode class instance as interface

              asInterface = true;
            } else {
              throw Error("Unsupported interface type");
            }

        let hasFunction = false; // encode interfaces

        if (aObject._rintf || asInterface) {
          if (!objectId) {
            objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();
            this._object_store[objectId] = aObject;
          }

          for (let k of keys) {
            if (k === "constructor") continue;

            if (k.startsWith("_")) {
              continue;
            }

            bObject[k] = await this._encode(aObject[k], typeof asInterface === "string" ? asInterface + "." + k : k, objectId);

            if (typeof aObject[k] === "function") {
              hasFunction = true;
            }
          } // object id for dispose the object remotely


          if (hasFunction) bObject._rintf = objectId; // remove interface when closed

          if (aObject.on && typeof aObject.on === "function") {
            aObject.on("close", () => {
              delete this._object_store[objectId];
            });
          }
        } else {
          for (let k of keys) {
            if (["hasOwnProperty", "constructor"].includes(k)) continue;
            bObject[k] = await this._encode(aObject[k]);
          }
        } // for example, browserFS object

      } else if (typeof aObject === "object") {
        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(aObject)).concat(Object.keys(aObject));
        const objectId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();

        for (let k of keys) {
          if (["hasOwnProperty", "constructor"].includes(k)) continue; // encode as interface

          bObject[k] = await this._encode(aObject[k], k, bObject);
        } // object id, used for dispose the object


        bObject._rintf = objectId;
      } else {
        throw "imjoy-rpc: Unsupported data type:" + aObject;
      }

    if (transferables.length > 0) {
      bObject.__transferables__ = transferables;
    }

    if (!bObject) {
      throw new Error("Failed to encode object");
    }

    return bObject;
  }

  async _decode(aObject, withPromise) {
    if (!aObject) {
      return aObject;
    }

    let bObject;

    if (aObject["_rtype"]) {
      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {
        if (aObject._rintf) {
          const temp = aObject._rtype;
          delete aObject._rtype;
          aObject = await this._decode(aObject, withPromise);
          aObject._rtype = temp;
        }

        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));
      } else if (aObject._rtype === "callback") {
        bObject = this._genRemoteCallback(aObject._rtarget_id, aObject._rvalue, withPromise);
      } else if (aObject._rtype === "interface") {
        bObject = this._genRemoteMethod(aObject._rtarget_id, aObject._rvalue, aObject._rintf);
      } else if (aObject._rtype === "ndarray") {
        /*global nj tf*/
        //create build array/tensor if used in the plugin
        if (typeof nj !== "undefined" && nj.array) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);
        } else if (typeof tf !== "undefined" && tf.Tensor) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);
        } else {
          //keep it as regular if transfered to the main app
          bObject = aObject;
        }
      } else if (aObject._rtype === "error") {
        bObject = new Error(aObject._rvalue);
      } else if (aObject._rtype === "file") {
        if (aObject._rvalue instanceof File) {
          bObject = aObject._rvalue; //patch _path

          bObject._path = aObject._rpath;
        } else {
          bObject = new File([aObject._rvalue], aObject._rname, {
            type: aObject._rmime
          });
          bObject._path = aObject._rpath;
        }
      } else if (aObject._rtype === "typedarray") {
        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
        if (!arraytype) throw new Error("unsupported dtype: " + aObject._rdtype);
        bObject = new arraytype(aObject._rvalue);
      } else if (aObject._rtype === "memoryview") {
        bObject = new DataView(aObject._rvalue);
      } else if (aObject._rtype === "blob") {
        if (aObject._rvalue instanceof Blob) {
          bObject = aObject._rvalue;
        } else {
          bObject = new Blob([aObject._rvalue], {
            type: aObject._rmime
          });
        }
      } else if (aObject._rtype === "orderedmap") {
        bObject = new Map((await this._decode(aObject._rvalue, withPromise)));
      } else if (aObject._rtype === "set") {
        bObject = new Set((await this._decode(aObject._rvalue, withPromise)));
      } else {
        // make sure all the interface functions are decoded
        if (aObject._rintf) {
          const temp = aObject._rtype;
          delete aObject._rtype;
          bObject = await this._decode(aObject, withPromise);
          bObject._rtype = temp;
        } else bObject = aObject;
      }
    } else if (aObject.constructor === Object || Array.isArray(aObject)) {
      const isarray = Array.isArray(aObject);
      bObject = isarray ? [] : {};

      for (let k of Object.keys(aObject)) {
        if (isarray || aObject.hasOwnProperty(k)) {
          const v = aObject[k];
          bObject[k] = await this._decode(v, withPromise);
        }
      }
    } else {
      bObject = aObject;
    }

    if (bObject === undefined) {
      throw new Error("Failed to decode object");
    } // store the object id for dispose


    if (aObject._rintf) {
      this._object_weakmap.set(bObject, aObject._rintf);
    }

    return bObject;
  }

  async _wrap(args, asInterface) {
    return await this._encode(args, asInterface);
  }
  /**
   * Unwraps the set of arguments delivered from the remote site,
   * replaces all callback identifiers with a function which will
   * initiate sending that callback identifier back to other site
   *
   * @param {Object} args to unwrap
   *
   * @param {Boolean} withPromise is true means this the callback should contain a promise
   *
   * @returns {Array} unwrapped args
   */


  async _unwrap(args, withPromise) {
    return await this._decode(args, withPromise);
  }
  /**
   * Generates the wrapped function corresponding to a single remote
   * callback. When the generated function is called, it will send
   * the corresponding message to the remote site asking it to
   * execute the particular callback previously saved during a call
   * by the remote site a method from the interface of this site
   *
   * @param {Number} id of the remote callback to execute
   * @param {Number} argNum argument index of the callback
   * @param {Boolean} withPromise is true means this the callback should contain a promise
   *
   * @returns {Function} wrapped remote callback
   */


  _genRemoteCallback(targetId, cid, withPromise) {
    const me = this;
    let remoteCallback;

    if (withPromise) {
      remoteCallback = function () {
        return new Promise(async (resolve, reject) => {
          const args = await me._wrap(Array.prototype.slice.call(arguments));
          const argLength = args.length; // if the last argument is an object, mark it as kwargs

          const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
          if (withKwargs) delete args[argLength - 1]._rkwargs;
          const transferables = args.__transferables__;
          if (transferables) delete args.__transferables__;
          const encodedPromise = await me._wrap([resolve, reject]); // store the key id for removing them from the reference store together

          resolve.__promise_pair = encodedPromise[1]._rvalue;
          reject.__promise_pair = encodedPromise[0]._rvalue;

          try {
            me._connection.emit({
              type: "callback",
              target_id: targetId,
              id: cid,
              args: args,
              promise: encodedPromise,
              with_kwargs: withKwargs
            }, transferables);
          } catch (e) {
            reject(`Failed to exectue remote callback ( id: ${cid}).`);
          }
        });
      };

      return remoteCallback;
    } else {
      remoteCallback = async function () {
        const args = await me._wrap(Array.prototype.slice.call(arguments));
        const argLength = args.length; // if the last argument is an object, mark it as kwargs

        const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
        if (withKwargs) delete args[argLength - 1]._rkwargs;
        const transferables = args.__transferables__;
        if (transferables) delete args.__transferables__;
        return me._connection.emit({
          type: "callback",
          target_id: targetId,
          id: cid,
          args: args,
          with_kwargs: withKwargs
        }, transferables);
      };

      return remoteCallback;
    }
  }

  reset() {
    this._event_handlers = {};
    this._once_handlers = {};
    this._remote_interface = null;
    this._object_store = {};
    this._method_weakmap = new WeakMap();
    this._object_weakmap = new WeakMap();
    this._local_api = null;
    this._store = new ReferenceStore();
    this._method_refs = new ReferenceStore();
  }
  /**
   * Sends the notification message and breaks the connection
   */


  disconnect() {
    this._connection.emit({
      type: "disconnect"
    });

    this.reset();
    setTimeout(() => {
      this._connection.disconnect();
    }, 2000);
  }

}
/**
 * ReferenceStore is a special object which stores other objects
 * and provides the references (number) instead. This reference
 * may then be sent over a json-based communication channel (IPC
 * to another Node.js process or a message to the Worker). Other
 * site may then provide the reference in the responce message
 * implying the given object should be activated.
 *
 * Primary usage for the ReferenceStore is a storage for the
 * callbacks, which therefore makes it possible to initiate a
 * callback execution by the opposite site (which normally cannot
 * directly execute functions over the communication channel).
 *
 * Each stored object can only be fetched once and is not
 * available for the second time. Each stored object must be
 * fetched, since otherwise it will remain stored forever and
 * consume memory.
 *
 * Stored object indeces are simply the numbers, which are however
 * released along with the objects, and are later reused again (in
 * order to postpone the overflow, which should not likely happen,
 * but anyway).
 */

class ReferenceStore {
  constructor() {
    this._store = {}; // stored object

    this._indices = [0]; // smallest available indices

    this._readyHandler = function () {};

    this._busyHandler = function () {};

    this._readyHandler();
  }
  /**
   * call handler when the store is empty
   *
   * @param {FUNCTION} id of a handler
   */


  onReady(readyHandler) {
    this._readyHandler = readyHandler || function () {};
  }
  /**
   * call handler when the store is not empty
   *
   * @param {FUNCTION} id of a handler
   */


  onBusy(busyHandler) {
    this._busyHandler = busyHandler || function () {};
  }
  /**
   * get the length of the store
   *
   */


  getStack() {
    return Object.keys(this._store).length;
  }
  /**
   * @function _genId() generates the new reference id
   *
   * @returns {Number} smallest available id and reserves it
   */


  _genId() {
    let id;

    if (this._indices.length === 1) {
      id = this._indices[0]++;
    } else {
      id = this._indices.shift();
    }

    return id;
  }
  /**
   * Releases the given reference id so that it will be available by
   * another object stored
   *
   * @param {Number} id to release
   */


  _releaseId(id) {
    for (let i = 0; i < this._indices.length; i++) {
      if (id < this._indices[i]) {
        this._indices.splice(i, 0, id);

        break;
      }
    } // cleaning-up the sequence tail


    for (let i = this._indices.length - 1; i >= 0; i--) {
      if (this._indices[i] - 1 === this._indices[i - 1]) {
        this._indices.pop();
      } else {
        break;
      }
    }
  }
  /**
   * Stores the given object and returns the refernce id instead
   *
   * @param {Object} obj to store
   *
   * @returns {Number} reference id of the stored object
   */


  put(obj) {
    if (this._busyHandler && Object.keys(this._store).length === 0) {
      this._busyHandler();
    }

    const id = this._genId();

    this._store[id] = obj;
    return id;
  }
  /**
   * Retrieves previously stored object and releases its reference
   *
   * @param {Number} id of an object to retrieve
   */


  fetch(id) {
    const obj = this._store[id];

    if (obj && !obj.__remote_method) {
      delete this._store[id];

      this._releaseId(id);

      if (this._readyHandler && Object.keys(this._store).length === 0) {
        this._readyHandler();
      }
    }

    if (obj && obj.__promise_pair) {
      this.fetch(obj.__promise_pair);
    }

    return obj;
  }

}

/***/ }),

/***/ "./src/socketIOMain.js":
/*!*****************************!*\
  !*** ./src/socketIOMain.js ***!
  \*****************************/
/*! exports provided: setupRPC, waitForInitialization, VERSION, RPC, API_VERSION, loadRequirements, Connection, connectToServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToServer", function() { return connectToServer; });
/* harmony import */ var _pluginCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCore.js */ "./src/pluginCore.js");
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_1__["RPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadRequirements"]; });

/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupRPC", function() { return _main_js__WEBPACK_IMPORTED_MODULE_4__["setupRPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForInitialization", function() { return _main_js__WEBPACK_IMPORTED_MODULE_4__["waitForInitialization"]; });

/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _package_json__WEBPACK_IMPORTED_MODULE_5__["version"]; });

/**
 * Contains the routines loaded by the plugin iframe under web-browser
 * in case when worker failed to initialize
 *
 * Initializes the web environment version of the platform-dependent
 * connection object for the plugin site
 */








class Connection extends _utils_js__WEBPACK_IMPORTED_MODULE_2__["MessageEmitter"] {
  constructor(config) {
    super(config && config.debug);
    this.config = config || {};
    this.peer_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  }

  init() {
    return new Promise((resolve, reject) => {
      const config = this.config;
      const url = config.server_url;
      const extraHeaders = {};

      if (config.token) {
        extraHeaders.Authorization = "Bearer " + config.token;
      }

      const basePath = new URL(url).pathname; // Note: extraHeaders only works for polling transport (the default)
      // If we switch to websocket only, the headers won't be respected

      const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(url, {
        withCredentials: true,
        extraHeaders,
        path: (basePath.endsWith("/") ? basePath.slice(0, -1) : basePath) + "/socket.io"
      });
      socket.on("connect", () => {
        socket.emit("register_plugin", config, result => {
          if (!result.success) {
            console.error(result.detail);
            reject(result.detail);
            return;
          }

          this.plugin_id = result.plugin_id;
          socket.on("plugin_message", data => {
            if (data.peer_id === this.peer_id) {
              this._fire(data.type, data);
            } else if (this.config.debug) {
              console.log(`connection peer id mismatch ${data.peer_id} !== ${this.peer_id}`);
            }
          });
          this.once("initialize", () => {
            if (!this.rpc) {
              this.rpc = Object(_pluginCore_js__WEBPACK_IMPORTED_MODULE_0__["connectRPC"])(this, config);
            } else {
              this.rpc.once("remoteReady", () => {
                this.rpc.sendInterface();
              });
            }

            this.connect();
            resolve();
          });
          this.emit({
            type: "imjoyRPCReady",
            config: config,
            peer_id: this.peer_id
          });
        });
        this._disconnected = false;
      });
      socket.on("connect_error", () => {
        reject("connection error");

        this._fire("connectFailure");
      });
      socket.on("disconnect", () => {
        reject("disconnected");
        this.disconnect();

        this._fire("disconnected");
      });
      this.socket = socket;
    });
  }

  connect() {
    this.emit({
      type: "initialized",
      config: this.config,
      origin: globalThis.location.origin,
      peer_id: this.peer_id
    });

    this._fire("connected");
  }

  reset() {
    this._event_handlers = {};
    this._once_handlers = {};
  }

  execute() {
    throw new Error("Execution is not allowed for socketio connection");
  }

  disconnect() {
    this._fire("beforeDisconnect");

    this.socket.disconnect();
    this.init();

    this._fire("disconnected");
  }

  emit(data) {
    data.plugin_id = this.plugin_id;
    this.socket.emit("plugin_message", data, result => {
      if (!result.success) this._fire("error", data.detail);
    });
  }

}
function connectToServer(config) {
  config = config || {};
  if (!config.server_url) throw new Error("Server URL is not specified.");
  config.name = config.name || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["randId"])();
  config = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeConfig"])(config);
  return new Promise((resolve, reject) => {
    const handleEvent = e => {
      const api = e.detail;

      if (config.expose_api_globally) {
        globalThis.api = api;
      } // imjoy plugin api


      resolve(api);
      globalThis.removeEventListener("imjoy_remote_api_ready", handleEvent);
    };

    globalThis.addEventListener("imjoy_remote_api_ready", handleEvent);
    config = config || {};
    config.dedicated_thread = false;
    config.lang = "javascript";
    config.api_version = _rpc_js__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"];
    const conn = new Connection(config);
    conn.init().catch(reject);
  });
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, urlJoin, MessageEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randId", function() { return randId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtypeToTypedArray", function() { return dtypeToTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWindow", function() { return loadRequirementsInWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWebworker", function() { return loadRequirementsInWebworker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return loadRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtypeMapping", function() { return typedArrayToDtypeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtype", function() { return typedArrayToDtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRequirements", function() { return cacheRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupServiceWorker", function() { return setupServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlJoin", function() { return urlJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmitter", function() { return MessageEmitter; });
function randId() {
  return Math.random().toString(36).substr(2, 10) + new Date().getTime();
}
const dtypeToTypedArray = {
  int8: Int8Array,
  int16: Int16Array,
  int32: Int32Array,
  uint8: Uint8Array,
  uint16: Uint16Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array,
  array: Array
};
async function loadRequirementsInWindow(requirements) {
  function _importScript(url) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element
    return new Promise((resolve, reject) => {
      var scriptTag = document.createElement("script");
      scriptTag.src = url;
      scriptTag.type = "text/javascript";
      scriptTag.onload = resolve;

      scriptTag.onreadystatechange = function () {
        if (this.readyState === "loaded" || this.readyState === "complete") {
          resolve();
        }
      };

      scriptTag.onerror = reject;
      document.head.appendChild(scriptTag);
    });
  } // support importScripts outside web worker


  async function importScripts() {
    var args = Array.prototype.slice.call(arguments),
        len = args.length,
        i = 0;

    for (; i < len; i++) {
      await _importScript(args[i]);
    }
  }

  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      var link_node;
      requirements = typeof requirements === "string" ? [requirements] : requirements;

      if (Array.isArray(requirements)) {
        for (var i = 0; i < requirements.length; i++) {
          if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
            if (requirements[i].startsWith("css:")) {
              requirements[i] = requirements[i].slice(4);
            }

            link_node = document.createElement("link");
            link_node.rel = "stylesheet";
            link_node.href = requirements[i];
            document.head.appendChild(link_node);
          } else if (requirements[i].toLowerCase().endsWith(".mjs") || requirements[i].startsWith("mjs:")) {
            // import esmodule
            if (requirements[i].startsWith("mjs:")) {
              requirements[i] = requirements[i].slice(4);
            }

            await import(
            /* webpackIgnore: true */
            requirements[i]);
          } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
            if (requirements[i].startsWith("js:")) {
              requirements[i] = requirements[i].slice(3);
            }

            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("http")) {
            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("cache:")) {//ignore cache
          } else {
            console.log("Unprocessed requirements url: " + requirements[i]);
          }
        }
      } else {
        throw "unsupported requirements definition";
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
async function loadRequirementsInWebworker(requirements) {
  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      if (!Array.isArray(requirements)) {
        requirements = [requirements];
      }

      for (var i = 0; i < requirements.length; i++) {
        if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
          throw "unable to import css in a webworker";
        } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
          if (requirements[i].startsWith("js:")) {
            requirements[i] = requirements[i].slice(3);
          }

          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("http")) {
          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("cache:")) {//ignore cache
        } else {
          console.log("Unprocessed requirements url: " + requirements[i]);
        }
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
function loadRequirements(requirements) {
  if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
    return loadRequirementsInWebworker(requirements);
  } else {
    return loadRequirementsInWindow(requirements);
  }
}
function normalizeConfig(config) {
  config.version = config.version || "0.1.0";
  config.description = config.description || `[TODO: add description for ${config.name} ]`;
  config.type = config.type || "rpc-window";
  config.id = config.id || randId();
  config.target_origin = config.target_origin || "*";
  config.allow_execution = config.allow_execution || false; // remove functions

  config = Object.keys(config).reduce((p, c) => {
    if (typeof config[c] !== "function") p[c] = config[c];
    return p;
  }, {});
  return config;
}
const typedArrayToDtypeMapping = {
  Int8Array: "int8",
  Int16Array: "int16",
  Int32Array: "int32",
  Uint8Array: "uint8",
  Uint16Array: "uint16",
  Uint32Array: "uint32",
  Float32Array: "float32",
  Float64Array: "float64",
  Array: "array"
};
const typedArrayToDtypeKeys = [];

for (const arrType of Object.keys(typedArrayToDtypeMapping)) {
  typedArrayToDtypeKeys.push(eval(arrType));
}

function typedArrayToDtype(obj) {
  let dtype = typedArrayToDtypeMapping[obj.constructor.name];

  if (!dtype) {
    const pt = Object.getPrototypeOf(obj);

    for (const arrType of typedArrayToDtypeKeys) {
      if (pt instanceof arrType) {
        dtype = typedArrayToDtypeMapping[arrType.name];
        break;
      }
    }
  }

  return dtype;
}

function cacheUrlInServiceWorker(url) {
  return new Promise(function (resolve, reject) {
    const message = {
      command: "add",
      url: url
    };

    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {
      reject("Service worker is not supported.");
      return;
    }

    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event) {
      if (event.data && event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data && event.data.result);
      }
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    } else {
      reject("Service worker controller is not available");
    }
  });
}

async function cacheRequirements(requirements) {
  requirements = requirements || [];

  if (!Array.isArray(requirements)) {
    requirements = [requirements];
  }

  for (let req of requirements) {
    //remove prefix
    if (req.startsWith("js:")) req = req.slice(3);
    if (req.startsWith("css:")) req = req.slice(4);
    if (req.startsWith("cache:")) req = req.slice(6);
    if (!req.startsWith("http")) continue;
    await cacheUrlInServiceWorker(req).catch(e => {
      console.error(e);
    });
  }
}
function setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {
  // register service worker for offline access
  if ("serviceWorker" in navigator) {
    baseUrl = baseUrl || "/";
    navigator.serviceWorker.register(baseUrl + "plugin-service-worker.js").then(function (registration) {
      // Registration was successful
      console.log("ServiceWorker registration successful with scope: ", registration.scope);
    }, function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    });
    targetOrigin = targetOrigin || "*";
    cacheCallback = cacheCallback || cacheRequirements;

    if (cacheCallback && typeof cacheCallback !== "function") {
      throw new Error("config.cache_requirements must be a function");
    }

    window.addEventListener("message", function (e) {
      if (targetOrigin === "*" || e.origin === targetOrigin) {
        const m = e.data;

        if (m.type === "cacheRequirements") {
          cacheCallback(m.requirements);
        }
      }
    });
  }
} //#Source https://bit.ly/2neWfJ2

function urlJoin(...args) {
  return args.join("/").replace(/[\/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
class MessageEmitter {
  constructor(debug) {
    this._event_handlers = {};
    this._once_handlers = {};
    this._debug = debug;
  }

  emit() {
    throw new Error("emit is not implemented");
  }

  on(event, handler) {
    if (!this._event_handlers[event]) {
      this._event_handlers[event] = [];
    }

    this._event_handlers[event].push(handler);
  }

  once(event, handler) {
    handler.___event_run_once = true;
    this.on(event, handler);
  }

  off(event, handler) {
    if (!event && !handler) {
      // remove all events handlers
      this._event_handlers = {};
    } else if (event && !handler) {
      // remove all hanlders for the event
      if (this._event_handlers[event]) this._event_handlers[event] = [];
    } else {
      // remove a specific handler
      if (this._event_handlers[event]) {
        const idx = this._event_handlers[event].indexOf(handler);

        if (idx >= 0) {
          this._event_handlers[event].splice(idx, 1);
        }
      }
    }
  }

  _fire(event, data) {
    if (this._event_handlers[event]) {
      var i = this._event_handlers[event].length;

      while (i--) {
        const handler = this._event_handlers[event][i];

        try {
          handler(data);
        } catch (e) {
          console.error(e);
        } finally {
          if (handler.___event_run_once) {
            this._event_handlers[event].splice(i, 1);
          }
        }
      }
    } else {
      if (this._debug) {
        console.warn("unhandled event", event, data);
      }
    }
  }

}

/***/ })

/******/ });
});
//# sourceMappingURL=imjoy-rpc-socketio.js.map