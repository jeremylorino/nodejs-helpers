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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(/*! ./logger */ 1);
exports.Logger = logger_1.default;
var storage_1 = __webpack_require__(/*! ./storage */ 4);
exports.StorageProvider = storage_1.default;
var messageTransport_1 = __webpack_require__(/*! ./messageTransport */ 8);
exports.MessageTransport = messageTransport_1.default;


/***/ }),
/* 1 */
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var winston = __webpack_require__(/*! winston */ 2);
var logging_winston_1 = __webpack_require__(/*! @google-cloud/logging-winston */ 3);
var env = process.env.NODE_ENV || 'dev';
var loggingTransportConfig = {
    level: ['dev', 'test', 'local'].includes(env) ? 'debug' : 'error',
};
// populate values if running this package locally
if (env === 'local') {
    loggingTransportConfig.logName = "projects/" + process.env.GCLOUD_PROJECT + "/logs/myservice-local_log";
    loggingTransportConfig.resource = {
        type: 'global'
    };
}
var transport = new logging_winston_1.LoggingWinston(loggingTransportConfig);
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger(options) {
        var _this = _super.call(this, options) || this;
        _this.add(transport, loggingTransportConfig, true);
        _this.add(winston.transports.Console, {
            timestamp: true,
            colorize: true,
            level: ['dev', 'test', 'local'].includes(env) ? 'debug' : 'error'
        });
        return _this;
    }
    return Logger;
}(winston.Logger));
exports.default = Logger;


/***/ }),
/* 2 */
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 3 */
/*!************************************************!*\
  !*** external "@google-cloud/logging-winston" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/logging-winston");

/***/ }),
/* 4 */
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Storage = __webpack_require__(/*! @google-cloud/storage */ 5);
var _ = __webpack_require__(/*! lodash */ 6);
var mimeTypes = __webpack_require__(/*! mime-types */ 7);
var gcs = Storage();
/**
 * Recursively rename properties in to meet BigQuery field name requirements.
 *
 * @param {*} obj Value to examine.
 */
function fixNames(obj) {
    if (Array.isArray(obj)) {
        obj.forEach(fixNames);
    }
    else if (obj && typeof obj === 'object') {
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            fixNames(value);
            var fixedKey = key.replace('-', '_')
                .replace('@', '_at_')
                .replace('.', '_')
                .replace(/(^[^a-zA-Z_])/, '_$1');
            if (fixedKey !== key) {
                obj[fixedKey] = value;
                delete obj[key];
            }
        });
    }
}
var StorageProvider = /** @class */ (function () {
    /**
     * @param {object} options?
     * @param {string} options.bucketName - The default bucket where files will be saved.
     * @param {boolean} options.forBigQuery - Format data for the consumption
     * of BigQuery before save. Default: false
     **/
    function StorageProvider(options) {
        this.storage = gcs;
        this.options = _.merge({
            forBigQuery: false,
        }, options);
    }
    /**
     * Save data to the remote storage provider.
     *
     * @param {string} filename - The filename as it will appear on the remote storage provider.
     * @param {object} data - Data to be saved.
     * @param {object} options?
     * @param {string} options.bucketName - The bucket where files will be saved; this will
     * override the default bucketName set during instantiation.
     * @param {boolean} options.forBigQuery? - Format data for the consumption
     * of BigQuery before save. Default: false
     **/
    StorageProvider.prototype.save = function (filename, data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _options, payload, bucketName, file, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _options = _.merge({}, this.options, options);
                        payload = data;
                        if (!_options.bucketName) {
                            throw new Error("'options.bucketName' must be provided");
                        }
                        if (_options.forBigQuery === true) {
                            payload = _.merge([], data);
                            fixNames(payload);
                            payload = (Array.isArray(payload) ? payload : [payload])
                                .map(function (event) { return JSON.stringify(event); })
                                .join('\n');
                        }
                        bucketName = _options.bucketName;
                        file = this.storage.bucket(bucketName).file(filename);
                        // logger.info(`Saving events to ${filename} in bucket ${bucketName}`);
                        console.log("Saving events to " + filename + " in bucket " + bucketName);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, file.save(payload, {
                                metadata: {
                                    contentType: mimeTypes.lookup(filename) || '',
                                }
                            })];
                    case 2:
                        _a.sent();
                        // logger.info(`JSON written to gs://${bucketName}/${filename}`);
                        console.log("JSON written to gs://" + bucketName + "/" + filename);
                        return [2 /*return*/, {
                                success: true,
                                payload: payload,
                            }];
                    case 3:
                        err_1 = _a.sent();
                        // logger.error(err);
                        console.error(err_1);
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return StorageProvider;
}());
exports.default = StorageProvider;


/***/ }),
/* 5 */
/*!****************************************!*\
  !*** external "@google-cloud/storage" ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/storage");

/***/ }),
/* 6 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 7 */
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("mime-types");

/***/ }),
/* 8 */
/*!*********************************!*\
  !*** ./src/messageTransport.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PubSub = __webpack_require__(/*! @google-cloud/pubsub */ 9);
// { logger } = require('./index');
var pubsub = PubSub();
/**
 * An abstraction class for Google Pubsub
 **/
var MessageTransport = /** @class */ (function () {
    /**
     * @param {string} topicName - Message topic name.
     * @param {boolean} autoCreateTopic? - Create the topic if it does not exist.
     **/
    function MessageTransport(topicName, autoCreateTopic) {
        this.topicName = topicName;
        this.topic = pubsub.topic(this.topicName);
        this.publisher = this.topic.publisher();
        this.autoCreateTopic = autoCreateTopic || false;
        this.checkTopic();
    }
    MessageTransport.prototype.checkTopic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var exists, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.topic.exists()];
                    case 1:
                        exists = (_b.sent())[0];
                        if (!(this.autoCreateTopic === true && !exists)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.createTopic()];
                    case 2:
                        _a.topic = (_b.sent())[0];
                        _b.label = 3;
                    case 3: return [2 /*return*/, this.topic];
                }
            });
        });
    };
    MessageTransport.prototype.createTopic = function () {
        return this.topic.create();
    };
    /**
     * Publish the provided message.
     *
     * @param {object|buffer} data - The message payload to publish. If data is not a Buffer object
     *   then it will be converted before publishing the message; otherwise the message is published.
     * @param {object} attributes? - Attributes of the message in the form
     *   of an object containing a list of "key": value pairs.
     * @return {string[]} - The server-assigned ID of the published message.
     **/
    MessageTransport.prototype.publish = function (data, attributes) {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkTopic()];
                    case 1:
                        _a.sent();
                        if (data instanceof Buffer) {
                            payload = data;
                        }
                        else {
                            payload = new Buffer(JSON.stringify(data));
                        }
                        return [2 /*return*/, this.publisher.publish(payload, attributes)];
                }
            });
        });
    };
    return MessageTransport;
}());
exports.default = MessageTransport;


/***/ }),
/* 9 */
/*!***************************************!*\
  !*** external "@google-cloud/pubsub" ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/pubsub");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmNmZTdhZTYyMjkzZTcyNGEwYjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3RvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvbG9nZ2luZy13aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdvb2dsZS1jbG91ZC9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWltZS10eXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlVHJhbnNwb3J0LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvcHVic3ViXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLHNEQUE4QjtBQUs1QixpQkFMSyxnQkFBTSxDQUtMO0FBSlIsd0RBQXdDO0FBS3RDLDBCQUxLLGlCQUFlLENBS0w7QUFKakIsMEVBQWtEO0FBS2hELDJC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Q3BEO0lBQ0gsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcEVELGlEIiwiZmlsZSI6Im1vZGVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZjZmU3YWU2MjI5M2U3MjRhMGI3IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgU3RvcmFnZVByb3ZpZGVyIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgTWVzc2FnZVRyYW5zcG9ydCBmcm9tICcuL21lc3NhZ2VUcmFuc3BvcnQnO1xuXG5leHBvcnQge1xuICBMb2dnZXIsXG4gIFN0b3JhZ2VQcm92aWRlcixcbiAgTWVzc2FnZVRyYW5zcG9ydCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgTG9nZ2luZ1dpbnN0b24gfSBmcm9tICdAZ29vZ2xlLWNsb3VkL2xvZ2dpbmctd2luc3Rvbic7XG5pbXBvcnQgKiBhcyBMb2dnaW5nV2luc3RvblR5cGVzIGZyb20gJ0Bnb29nbGUtY2xvdWQvbG9nZ2luZy13aW5zdG9uL2J1aWxkL3NyYy90eXBlcy9jb3JlJztcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2Rldic7XG5cbmxldCBsb2dnaW5nVHJhbnNwb3J0Q29uZmlnOiBMb2dnaW5nV2luc3RvblR5cGVzLk9wdGlvbnMgPSB7XG4gIGxldmVsOiBbJ2RldicsICd0ZXN0JywgJ2xvY2FsJ10uaW5jbHVkZXMoZW52KSA/ICdkZWJ1Zyc6ICdlcnJvcicsXG59O1xuXG4vLyBwb3B1bGF0ZSB2YWx1ZXMgaWYgcnVubmluZyB0aGlzIHBhY2thZ2UgbG9jYWxseVxuaWYgKGVudiA9PT0gJ2xvY2FsJykge1xuICBsb2dnaW5nVHJhbnNwb3J0Q29uZmlnLmxvZ05hbWUgPSBgcHJvamVjdHMvJHtwcm9jZXNzLmVudi5HQ0xPVURfUFJPSkVDVH0vbG9ncy9teXNlcnZpY2UtbG9jYWxfbG9nYDtcbiAgbG9nZ2luZ1RyYW5zcG9ydENvbmZpZy5yZXNvdXJjZSA9IHtcbiAgICB0eXBlOiAnZ2xvYmFsJ1xuICB9O1xufVxuXG5jb25zdCB0cmFuc3BvcnQgPSBuZXcgTG9nZ2luZ1dpbnN0b24obG9nZ2luZ1RyYW5zcG9ydENvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciBleHRlbmRzIHdpbnN0b24uTG9nZ2VyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogd2luc3Rvbi5Mb2dnZXJPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5hZGQodHJhbnNwb3J0LCBsb2dnaW5nVHJhbnNwb3J0Q29uZmlnLCB0cnVlKTtcbiAgICB0aGlzLmFkZCh3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSwge1xuICAgICAgdGltZXN0YW1wOiB0cnVlLFxuICAgICAgY29sb3JpemU6IHRydWUsXG4gICAgICBsZXZlbDogWydkZXYnLCAndGVzdCcsICdsb2NhbCddLmluY2x1ZGVzKGVudikgPyAnZGVidWcnOiAnZXJyb3InXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2dnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2luc3RvblwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnb29nbGUtY2xvdWQvbG9nZ2luZy13aW5zdG9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGdvb2dsZS1jbG91ZC9sb2dnaW5nLXdpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJ0Bnb29nbGUtY2xvdWQvc3RvcmFnZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBtaW1lVHlwZXMgZnJvbSAnbWltZS10eXBlcyc7XG5cbmNvbnN0IGdjcyA9IFN0b3JhZ2UoKTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSByZW5hbWUgcHJvcGVydGllcyBpbiB0byBtZWV0IEJpZ1F1ZXJ5IGZpZWxkIG5hbWUgcmVxdWlyZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFZhbHVlIHRvIGV4YW1pbmUuXG4gKi9cbmZ1bmN0aW9uIGZpeE5hbWVzKG9iajogYW55KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBvYmouZm9yRWFjaChmaXhOYW1lcyk7XG4gIH1cbiAgZWxzZSBpZiAob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBmaXhOYW1lcyh2YWx1ZSk7XG4gICAgICBjb25zdCBmaXhlZEtleSA9IGtleS5yZXBsYWNlKCctJywgJ18nKVxuICAgICAgICAucmVwbGFjZSgnQCcsICdfYXRfJylcbiAgICAgICAgLnJlcGxhY2UoJy4nLCAnXycpXG4gICAgICAgIC5yZXBsYWNlKC8oXlteYS16QS1aX10pLywgJ18kMScpO1xuICAgICAgaWYgKGZpeGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgb2JqW2ZpeGVkS2V5XSA9IHZhbHVlO1xuICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlUHJvdmlkZXJPcHRpb25zIHtcbiAgYnVja2V0TmFtZTogc3RyaW5nO1xuICBmb3JCaWdRdWVyeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLlN0b3JhZ2U7XG4gIFxuICBvcHRpb25zOiBTdG9yYWdlUHJvdmlkZXJPcHRpb25zO1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zP1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5idWNrZXROYW1lIC0gVGhlIGRlZmF1bHQgYnVja2V0IHdoZXJlIGZpbGVzIHdpbGwgYmUgc2F2ZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5mb3JCaWdRdWVyeSAtIEZvcm1hdCBkYXRhIGZvciB0aGUgY29uc3VtcHRpb25cbiAgICogb2YgQmlnUXVlcnkgYmVmb3JlIHNhdmUuIERlZmF1bHQ6IGZhbHNlXG4gICAqKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IFN0b3JhZ2VQcm92aWRlck9wdGlvbnMpIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBnY3M7XG4gICAgdGhpcy5vcHRpb25zID0gXy5tZXJnZSh7XG4gICAgICBmb3JCaWdRdWVyeTogZmFsc2UsXG4gICAgfSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBkYXRhIHRvIHRoZSByZW1vdGUgc3RvcmFnZSBwcm92aWRlci5cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBmaWxlbmFtZSBhcyBpdCB3aWxsIGFwcGVhciBvbiB0aGUgcmVtb3RlIHN0b3JhZ2UgcHJvdmlkZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gRGF0YSB0byBiZSBzYXZlZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnM/XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJ1Y2tldE5hbWUgLSBUaGUgYnVja2V0IHdoZXJlIGZpbGVzIHdpbGwgYmUgc2F2ZWQ7IHRoaXMgd2lsbFxuICAgKiBvdmVycmlkZSB0aGUgZGVmYXVsdCBidWNrZXROYW1lIHNldCBkdXJpbmcgaW5zdGFudGlhdGlvbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmZvckJpZ1F1ZXJ5PyAtIEZvcm1hdCBkYXRhIGZvciB0aGUgY29uc3VtcHRpb25cbiAgICogb2YgQmlnUXVlcnkgYmVmb3JlIHNhdmUuIERlZmF1bHQ6IGZhbHNlXG4gICAqKi9cbiAgYXN5bmMgc2F2ZShmaWxlbmFtZTogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM/OiBTdG9yYWdlUHJvdmlkZXJPcHRpb25zKSB7XG4gICAgbGV0IF9vcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICBsZXQgcGF5bG9hZCA9IGRhdGE7XG5cbiAgICBpZiAoIV9vcHRpb25zLmJ1Y2tldE5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ29wdGlvbnMuYnVja2V0TmFtZScgbXVzdCBiZSBwcm92aWRlZGApO1xuICAgIH1cblxuICAgIGlmIChfb3B0aW9ucy5mb3JCaWdRdWVyeSA9PT0gdHJ1ZSkge1xuICAgICAgcGF5bG9hZCA9IF8ubWVyZ2UoW10sIGRhdGEpO1xuICAgICAgZml4TmFtZXMocGF5bG9hZCk7XG4gICAgICBwYXlsb2FkID0gKEFycmF5LmlzQXJyYXkocGF5bG9hZCkgPyBwYXlsb2FkIDogW3BheWxvYWRdKVxuICAgICAgICAubWFwKChldmVudCkgPT4gSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgICAgICAuam9pbignXFxuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVja2V0TmFtZSA9IF9vcHRpb25zLmJ1Y2tldE5hbWU7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuc3RvcmFnZS5idWNrZXQoYnVja2V0TmFtZSkuZmlsZShmaWxlbmFtZSk7XG5cbiAgICAvLyBsb2dnZXIuaW5mbyhgU2F2aW5nIGV2ZW50cyB0byAke2ZpbGVuYW1lfSBpbiBidWNrZXQgJHtidWNrZXROYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKGBTYXZpbmcgZXZlbnRzIHRvICR7ZmlsZW5hbWV9IGluIGJ1Y2tldCAke2J1Y2tldE5hbWV9YCk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZpbGUuc2F2ZShwYXlsb2FkLCB7XG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgY29udGVudFR5cGU6IG1pbWVUeXBlcy5sb29rdXAoZmlsZW5hbWUpIHx8ICcnLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGxvZ2dlci5pbmZvKGBKU09OIHdyaXR0ZW4gdG8gZ3M6Ly8ke2J1Y2tldE5hbWV9LyR7ZmlsZW5hbWV9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgSlNPTiB3cml0dGVuIHRvIGdzOi8vJHtidWNrZXROYW1lfS8ke2ZpbGVuYW1lfWApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgIH07XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIC8vIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL3N0b3JhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAZ29vZ2xlLWNsb3VkL3N0b3JhZ2VcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaW1lLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWltZS10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFB1YlN1YiBmcm9tICdAZ29vZ2xlLWNsb3VkL3B1YnN1Yic7XG4gIC8vIHsgbG9nZ2VyIH0gPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmNvbnN0IHB1YnN1YiA9IFB1YlN1YigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VBdHRyaWJ1dGVzIHtcbiAgW2tleTpzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Rpb24gY2xhc3MgZm9yIEdvb2dsZSBQdWJzdWJcbiAqKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VUcmFuc3BvcnQge1xuICB0b3BpY05hbWU6IHN0cmluZztcbiAgdG9waWM6IFB1YlN1Yi5Ub3BpYztcbiAgcHVibGlzaGVyOiBQdWJTdWIuUHVibGlzaGVyO1xuICByZWFkb25seSBhdXRvQ3JlYXRlVG9waWM6IGJvb2xlYW47XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljTmFtZSAtIE1lc3NhZ2UgdG9waWMgbmFtZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBhdXRvQ3JlYXRlVG9waWM/IC0gQ3JlYXRlIHRoZSB0b3BpYyBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICoqL1xuICBjb25zdHJ1Y3Rvcih0b3BpY05hbWU6IHN0cmluZywgYXV0b0NyZWF0ZVRvcGljPzogYm9vbGVhbikge1xuICAgIHRoaXMudG9waWNOYW1lID0gdG9waWNOYW1lO1xuICAgIHRoaXMudG9waWMgPSBwdWJzdWIudG9waWModGhpcy50b3BpY05hbWUpO1xuICAgIHRoaXMucHVibGlzaGVyID0gdGhpcy50b3BpYy5wdWJsaXNoZXIoKTtcbiAgICB0aGlzLmF1dG9DcmVhdGVUb3BpYyA9IGF1dG9DcmVhdGVUb3BpYyB8fCBmYWxzZTtcbiAgICBcbiAgICB0aGlzLmNoZWNrVG9waWMoKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBhc3luYyBjaGVja1RvcGljKCkge1xuICAgIGxldCBbZXhpc3RzXSA9IGF3YWl0IHRoaXMudG9waWMuZXhpc3RzKCk7XG4gICAgXG4gICAgaWYodGhpcy5hdXRvQ3JlYXRlVG9waWMgPT09IHRydWUgJiYgIWV4aXN0cykge1xuICAgICAgdGhpcy50b3BpYyA9IChhd2FpdCB0aGlzLmNyZWF0ZVRvcGljKCkpWzBdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy50b3BpYztcbiAgfVxuICBcbiAgY3JlYXRlVG9waWMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9waWMuY3JlYXRlKCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBQdWJsaXNoIHRoZSBwcm92aWRlZCBtZXNzYWdlLlxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R8YnVmZmVyfSBkYXRhIC0gVGhlIG1lc3NhZ2UgcGF5bG9hZCB0byBwdWJsaXNoLiBJZiBkYXRhIGlzIG5vdCBhIEJ1ZmZlciBvYmplY3RcbiAgICogICB0aGVuIGl0IHdpbGwgYmUgY29udmVydGVkIGJlZm9yZSBwdWJsaXNoaW5nIHRoZSBtZXNzYWdlOyBvdGhlcndpc2UgdGhlIG1lc3NhZ2UgaXMgcHVibGlzaGVkLlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcz8gLSBBdHRyaWJ1dGVzIG9mIHRoZSBtZXNzYWdlIGluIHRoZSBmb3JtXG4gICAqICAgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBsaXN0IG9mIFwia2V5XCI6IHZhbHVlIHBhaXJzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gLSBUaGUgc2VydmVyLWFzc2lnbmVkIElEIG9mIHRoZSBwdWJsaXNoZWQgbWVzc2FnZS5cbiAgICoqL1xuICBhc3luYyBwdWJsaXNoKGRhdGE6IGFueSwgYXR0cmlidXRlcz86IE1lc3NhZ2VBdHRyaWJ1dGVzKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGF3YWl0IHRoaXMuY2hlY2tUb3BpYygpO1xuICAgIFxuICAgIC8vIGxvZ2dlci5kZWJ1ZygncHVibGlzaCBtZXNzYWdlJywgeyBkYXRhLCBhdHRyaWJ1dGVzIH0pO1xuICAgIGxldCBwYXlsb2FkOiBhbnk7XG4gICAgXG4gICAgaWYoZGF0YSBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgcGF5bG9hZCA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBheWxvYWQgPSBuZXcgQnVmZmVyKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoZXIucHVibGlzaChwYXlsb2FkLCBhdHRyaWJ1dGVzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lc3NhZ2VUcmFuc3BvcnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL3B1YnN1YlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvcHVic3ViXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==