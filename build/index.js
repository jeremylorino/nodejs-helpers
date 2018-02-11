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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(1);
exports.Logger = logger_1.default;
var storage_1 = __webpack_require__(4);
exports.StorageProvider = storage_1.default;
var messageTransport_1 = __webpack_require__(8);
exports.MessageTransport = messageTransport_1.default;


/***/ }),
/* 1 */
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
var winston = __webpack_require__(2);
var logging_winston_1 = __webpack_require__(3);
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
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/logging-winston");

/***/ }),
/* 4 */
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
var Storage = __webpack_require__(5);
var _ = __webpack_require__(6);
var mimeTypes = __webpack_require__(7);
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    return Logger;
}());
var gcs = Storage(), _logger = new Logger();
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
    function StorageProvider(options, logger) {
        this.storage = gcs;
        this.options = _.merge({
            forBigQuery: false,
        }, options);
        this.logger = logger || _logger;
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
                        this.logger.info("Saving events to " + filename + " in bucket " + bucketName);
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
                        this.logger.info("JSON written to gs://" + bucketName + "/" + filename);
                        return [2 /*return*/, {
                                success: true,
                                payload: payload,
                            }];
                    case 3:
                        err_1 = _a.sent();
                        this.logger.error(err_1);
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
/***/ (function(module, exports) {

module.exports = require("@google-cloud/storage");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mime-types");

/***/ }),
/* 8 */
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
var PubSub = __webpack_require__(9);
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
/***/ (function(module, exports) {

module.exports = require("@google-cloud/pubsub");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2M4NWRhZjRhNDA1NzdmMWZkNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3RvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvbG9nZ2luZy13aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdvb2dsZS1jbG91ZC9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWltZS10eXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlVHJhbnNwb3J0LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvcHVic3ViXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSxzQ0FBOEI7QUFLNUIsaUJBTEssZ0JBQU0sQ0FLTDtBQUpSLHVDQUF3QztBQUt0QywwQkFMSyxpQkFBZSxDQUtMO0FBSmpCLGdEQUFrRDtBQUtoRCwyQkFMSyww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QyxLQUFLLEVBQUM7Ozs7S0FDbkI7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7OztRQVFJO0lBQ0Usa0NBQU8sR0FBYixVQUFjLElBQVMsRUFBRSxVQUE4Qjs7Ozs7NEJBQ3JELHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUU7O3dCQUF2QixTQUF1QixDQUFDO3dCQUt4QixFQUFFLEVBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ2pCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsQ0FBQzt3QkFFRCxzQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQUM7Ozs7S0FDcEQ7SUFDSCx1QkFBQztBQUFELENBQUM7Ozs7Ozs7O0FDcEVELGlEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2M4NWRhZjRhNDA1NzdmMWZkNDkiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBTdG9yYWdlUHJvdmlkZXIgZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCBNZXNzYWdlVHJhbnNwb3J0IGZyb20gJy4vbWVzc2FnZVRyYW5zcG9ydCc7XG5cbmV4cG9ydCB7XG4gIExvZ2dlcixcbiAgU3RvcmFnZVByb3ZpZGVyLFxuICBNZXNzYWdlVHJhbnNwb3J0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBMb2dnaW5nV2luc3RvbiB9IGZyb20gJ0Bnb29nbGUtY2xvdWQvbG9nZ2luZy13aW5zdG9uJztcbmltcG9ydCAqIGFzIExvZ2dpbmdXaW5zdG9uVHlwZXMgZnJvbSAnQGdvb2dsZS1jbG91ZC9sb2dnaW5nLXdpbnN0b24vYnVpbGQvc3JjL3R5cGVzL2NvcmUnO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2JztcblxubGV0IGxvZ2dpbmdUcmFuc3BvcnRDb25maWc6IExvZ2dpbmdXaW5zdG9uVHlwZXMuT3B0aW9ucyA9IHtcbiAgbGV2ZWw6IFsnZGV2JywgJ3Rlc3QnLCAnbG9jYWwnXS5pbmNsdWRlcyhlbnYpID8gJ2RlYnVnJzogJ2Vycm9yJyxcbn07XG5cbi8vIHBvcHVsYXRlIHZhbHVlcyBpZiBydW5uaW5nIHRoaXMgcGFja2FnZSBsb2NhbGx5XG5pZiAoZW52ID09PSAnbG9jYWwnKSB7XG4gIGxvZ2dpbmdUcmFuc3BvcnRDb25maWcubG9nTmFtZSA9IGBwcm9qZWN0cy8ke3Byb2Nlc3MuZW52LkdDTE9VRF9QUk9KRUNUfS9sb2dzL215c2VydmljZS1sb2NhbF9sb2dgO1xuICBsb2dnaW5nVHJhbnNwb3J0Q29uZmlnLnJlc291cmNlID0ge1xuICAgIHR5cGU6ICdnbG9iYWwnXG4gIH07XG59XG5cbmNvbnN0IHRyYW5zcG9ydCA9IG5ldyBMb2dnaW5nV2luc3Rvbihsb2dnaW5nVHJhbnNwb3J0Q29uZmlnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIGV4dGVuZHMgd2luc3Rvbi5Mb2dnZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB3aW5zdG9uLkxvZ2dlck9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmFkZCh0cmFuc3BvcnQsIGxvZ2dpbmdUcmFuc3BvcnRDb25maWcsIHRydWUpO1xuICAgIHRoaXMuYWRkKHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlLCB7XG4gICAgICB0aW1lc3RhbXA6IHRydWUsXG4gICAgICBjb2xvcml6ZTogdHJ1ZSxcbiAgICAgIGxldmVsOiBbJ2RldicsICd0ZXN0JywgJ2xvY2FsJ10uaW5jbHVkZXMoZW52KSA/ICdkZWJ1Zyc6ICdlcnJvcidcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvZ2dlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndpbnN0b25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5zdG9uXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdvb2dsZS1jbG91ZC9sb2dnaW5nLXdpbnN0b25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAZ29vZ2xlLWNsb3VkL2xvZ2dpbmctd2luc3RvblwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSAnQGdvb2dsZS1jbG91ZC9zdG9yYWdlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIG1pbWVUeXBlcyBmcm9tICdtaW1lLXR5cGVzJztcblxuY2xhc3MgTG9nZ2VyIHtcbiAgaW5mbyguLi5hcmdzOmFueVtdKXt9XG4gIGxvZyguLi5hcmdzOmFueVtdKXt9XG4gIGRlYnVnKC4uLmFyZ3M6YW55W10pe31cbiAgd2FybiguLi5hcmdzOmFueVtdKXt9XG4gIGVycm9yKC4uLmFyZ3M6YW55W10pe31cbn1cbmNvbnN0IGdjcyA9IFN0b3JhZ2UoKSxcbiAgX2xvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSByZW5hbWUgcHJvcGVydGllcyBpbiB0byBtZWV0IEJpZ1F1ZXJ5IGZpZWxkIG5hbWUgcmVxdWlyZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFZhbHVlIHRvIGV4YW1pbmUuXG4gKi9cbmZ1bmN0aW9uIGZpeE5hbWVzKG9iajogYW55KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBvYmouZm9yRWFjaChmaXhOYW1lcyk7XG4gIH1cbiAgZWxzZSBpZiAob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBmaXhOYW1lcyh2YWx1ZSk7XG4gICAgICBjb25zdCBmaXhlZEtleSA9IGtleS5yZXBsYWNlKCctJywgJ18nKVxuICAgICAgICAucmVwbGFjZSgnQCcsICdfYXRfJylcbiAgICAgICAgLnJlcGxhY2UoJy4nLCAnXycpXG4gICAgICAgIC5yZXBsYWNlKC8oXlteYS16QS1aX10pLywgJ18kMScpO1xuICAgICAgaWYgKGZpeGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgb2JqW2ZpeGVkS2V5XSA9IHZhbHVlO1xuICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlUHJvdmlkZXJPcHRpb25zIHtcbiAgYnVja2V0TmFtZTogc3RyaW5nO1xuICBmb3JCaWdRdWVyeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLlN0b3JhZ2U7XG4gIHByaXZhdGUgbG9nZ2VyOiBhbnk7XG5cbiAgb3B0aW9uczogU3RvcmFnZVByb3ZpZGVyT3B0aW9ucztcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnM/XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJ1Y2tldE5hbWUgLSBUaGUgZGVmYXVsdCBidWNrZXQgd2hlcmUgZmlsZXMgd2lsbCBiZSBzYXZlZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmZvckJpZ1F1ZXJ5IC0gRm9ybWF0IGRhdGEgZm9yIHRoZSBjb25zdW1wdGlvblxuICAgKiBvZiBCaWdRdWVyeSBiZWZvcmUgc2F2ZS4gRGVmYXVsdDogZmFsc2VcbiAgICoqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zPzogU3RvcmFnZVByb3ZpZGVyT3B0aW9ucywgbG9nZ2VyPzogYW55KSB7XG4gICAgdGhpcy5zdG9yYWdlID0gZ2NzO1xuICAgIHRoaXMub3B0aW9ucyA9IF8ubWVyZ2Uoe1xuICAgICAgZm9yQmlnUXVlcnk6IGZhbHNlLFxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXIgfHwgX2xvZ2dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGRhdGEgdG8gdGhlIHJlbW90ZSBzdG9yYWdlIHByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgLSBUaGUgZmlsZW5hbWUgYXMgaXQgd2lsbCBhcHBlYXIgb24gdGhlIHJlbW90ZSBzdG9yYWdlIHByb3ZpZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIERhdGEgdG8gYmUgc2F2ZWQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zP1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5idWNrZXROYW1lIC0gVGhlIGJ1Y2tldCB3aGVyZSBmaWxlcyB3aWxsIGJlIHNhdmVkOyB0aGlzIHdpbGxcbiAgICogb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYnVja2V0TmFtZSBzZXQgZHVyaW5nIGluc3RhbnRpYXRpb24uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5mb3JCaWdRdWVyeT8gLSBGb3JtYXQgZGF0YSBmb3IgdGhlIGNvbnN1bXB0aW9uXG4gICAqIG9mIEJpZ1F1ZXJ5IGJlZm9yZSBzYXZlLiBEZWZhdWx0OiBmYWxzZVxuICAgKiovXG4gIGFzeW5jIHNhdmUoZmlsZW5hbWU6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogU3RvcmFnZVByb3ZpZGVyT3B0aW9ucykge1xuICAgIGxldCBfb3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgbGV0IHBheWxvYWQgPSBkYXRhO1xuXG4gICAgaWYgKCFfb3B0aW9ucy5idWNrZXROYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCdvcHRpb25zLmJ1Y2tldE5hbWUnIG11c3QgYmUgcHJvdmlkZWRgKTtcbiAgICB9XG5cbiAgICBpZiAoX29wdGlvbnMuZm9yQmlnUXVlcnkgPT09IHRydWUpIHtcbiAgICAgIHBheWxvYWQgPSBfLm1lcmdlKFtdLCBkYXRhKTtcbiAgICAgIGZpeE5hbWVzKHBheWxvYWQpO1xuICAgICAgcGF5bG9hZCA9IChBcnJheS5pc0FycmF5KHBheWxvYWQpID8gcGF5bG9hZCA6IFtwYXlsb2FkXSlcbiAgICAgICAgLm1hcCgoZXZlbnQpID0+IEpTT04uc3RyaW5naWZ5KGV2ZW50KSlcbiAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1Y2tldE5hbWUgPSBfb3B0aW9ucy5idWNrZXROYW1lO1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLnN0b3JhZ2UuYnVja2V0KGJ1Y2tldE5hbWUpLmZpbGUoZmlsZW5hbWUpO1xuXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgU2F2aW5nIGV2ZW50cyB0byAke2ZpbGVuYW1lfSBpbiBidWNrZXQgJHtidWNrZXROYW1lfWApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZpbGUuc2F2ZShwYXlsb2FkLCB7XG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgY29udGVudFR5cGU6IG1pbWVUeXBlcy5sb29rdXAoZmlsZW5hbWUpIHx8ICcnLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oYEpTT04gd3JpdHRlbiB0byBnczovLyR7YnVja2V0TmFtZX0vJHtmaWxlbmFtZX1gKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICB9O1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL3N0b3JhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAZ29vZ2xlLWNsb3VkL3N0b3JhZ2VcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaW1lLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWltZS10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFB1YlN1YiBmcm9tICdAZ29vZ2xlLWNsb3VkL3B1YnN1Yic7XG4gIC8vIHsgbG9nZ2VyIH0gPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmNvbnN0IHB1YnN1YiA9IFB1YlN1YigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VBdHRyaWJ1dGVzIHtcbiAgW2tleTpzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Rpb24gY2xhc3MgZm9yIEdvb2dsZSBQdWJzdWJcbiAqKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VUcmFuc3BvcnQge1xuICB0b3BpY05hbWU6IHN0cmluZztcbiAgdG9waWM6IFB1YlN1Yi5Ub3BpYztcbiAgcHVibGlzaGVyOiBQdWJTdWIuUHVibGlzaGVyO1xuICByZWFkb25seSBhdXRvQ3JlYXRlVG9waWM6IGJvb2xlYW47XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljTmFtZSAtIE1lc3NhZ2UgdG9waWMgbmFtZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBhdXRvQ3JlYXRlVG9waWM/IC0gQ3JlYXRlIHRoZSB0b3BpYyBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICoqL1xuICBjb25zdHJ1Y3Rvcih0b3BpY05hbWU6IHN0cmluZywgYXV0b0NyZWF0ZVRvcGljPzogYm9vbGVhbikge1xuICAgIHRoaXMudG9waWNOYW1lID0gdG9waWNOYW1lO1xuICAgIHRoaXMudG9waWMgPSBwdWJzdWIudG9waWModGhpcy50b3BpY05hbWUpO1xuICAgIHRoaXMucHVibGlzaGVyID0gdGhpcy50b3BpYy5wdWJsaXNoZXIoKTtcbiAgICB0aGlzLmF1dG9DcmVhdGVUb3BpYyA9IGF1dG9DcmVhdGVUb3BpYyB8fCBmYWxzZTtcbiAgICBcbiAgICB0aGlzLmNoZWNrVG9waWMoKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBhc3luYyBjaGVja1RvcGljKCkge1xuICAgIGxldCBbZXhpc3RzXSA9IGF3YWl0IHRoaXMudG9waWMuZXhpc3RzKCk7XG4gICAgXG4gICAgaWYodGhpcy5hdXRvQ3JlYXRlVG9waWMgPT09IHRydWUgJiYgIWV4aXN0cykge1xuICAgICAgdGhpcy50b3BpYyA9IChhd2FpdCB0aGlzLmNyZWF0ZVRvcGljKCkpWzBdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy50b3BpYztcbiAgfVxuICBcbiAgY3JlYXRlVG9waWMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9waWMuY3JlYXRlKCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBQdWJsaXNoIHRoZSBwcm92aWRlZCBtZXNzYWdlLlxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R8YnVmZmVyfSBkYXRhIC0gVGhlIG1lc3NhZ2UgcGF5bG9hZCB0byBwdWJsaXNoLiBJZiBkYXRhIGlzIG5vdCBhIEJ1ZmZlciBvYmplY3RcbiAgICogICB0aGVuIGl0IHdpbGwgYmUgY29udmVydGVkIGJlZm9yZSBwdWJsaXNoaW5nIHRoZSBtZXNzYWdlOyBvdGhlcndpc2UgdGhlIG1lc3NhZ2UgaXMgcHVibGlzaGVkLlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcz8gLSBBdHRyaWJ1dGVzIG9mIHRoZSBtZXNzYWdlIGluIHRoZSBmb3JtXG4gICAqICAgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBsaXN0IG9mIFwia2V5XCI6IHZhbHVlIHBhaXJzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gLSBUaGUgc2VydmVyLWFzc2lnbmVkIElEIG9mIHRoZSBwdWJsaXNoZWQgbWVzc2FnZS5cbiAgICoqL1xuICBhc3luYyBwdWJsaXNoKGRhdGE6IGFueSwgYXR0cmlidXRlcz86IE1lc3NhZ2VBdHRyaWJ1dGVzKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGF3YWl0IHRoaXMuY2hlY2tUb3BpYygpO1xuICAgIFxuICAgIC8vIGxvZ2dlci5kZWJ1ZygncHVibGlzaCBtZXNzYWdlJywgeyBkYXRhLCBhdHRyaWJ1dGVzIH0pO1xuICAgIGxldCBwYXlsb2FkOiBhbnk7XG4gICAgXG4gICAgaWYoZGF0YSBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgcGF5bG9hZCA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBheWxvYWQgPSBuZXcgQnVmZmVyKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoZXIucHVibGlzaChwYXlsb2FkLCBhdHRyaWJ1dGVzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lc3NhZ2VUcmFuc3BvcnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL3B1YnN1YlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvcHVic3ViXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==