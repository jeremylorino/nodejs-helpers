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
var env = process.env.NODE_ENV || "dev";
var loggingTransportConfig = {
    level: ["dev", "test", "local"].includes(env) ? "debug" : "error",
};
// populate values if running this package locally
if (env === "local") {
    loggingTransportConfig.logName = "projects/" + process.env.GCLOUD_PROJECT + "/logs/myservice-local_log";
    loggingTransportConfig.resource = {
        type: "global"
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
            level: ["dev", "test", "local"].includes(env) ? "debug" : "error"
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
var pubsub = PubSub(), _logger = new Logger();
/**
 * An abstraction class for Google Pubsub
 **/
var MessageTransport = /** @class */ (function () {
    /**
     * @param {string} topicName - Message topic name.
     * @param {boolean} autoCreateTopic? - Create the topic if it does not exist.
     **/
    function MessageTransport(topicName, autoCreateTopic, logger) {
        this.logger = logger || _logger;
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
                this.logger.debug("publish message", { data: data, attributes: attributes });
                if (data instanceof Buffer) {
                    payload = data;
                }
                else {
                    payload = new Buffer(JSON.stringify(data));
                }
                return [2 /*return*/, this.publisher.publish(payload, attributes)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGM1YTA5MGEwYjk3ZTEzOTY1MWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3RvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvbG9nZ2luZy13aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdvb2dsZS1jbG91ZC9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWltZS10eXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlVHJhbnNwb3J0LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvcHVic3ViXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSxzQ0FBOEI7QUFLNUIsaUJBTEssZ0JBQU0sQ0FLTDtBQUpSLHVDQUF3QztBQUt0QywwQkFMSyxpQkFBZSxDQUtMO0FBSmpCLGdEQUFrRDtBQUtoRCwyQkFMSyww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LFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELHNCQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBQzs7O0tBQ3BEO0lBQ0gsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQzNFRCxpRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRjNWEwOTBhMGI5N2UxMzk2NTFlIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgU3RvcmFnZVByb3ZpZGVyIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgTWVzc2FnZVRyYW5zcG9ydCBmcm9tICcuL21lc3NhZ2VUcmFuc3BvcnQnO1xuXG5leHBvcnQge1xuICBMb2dnZXIsXG4gIFN0b3JhZ2VQcm92aWRlcixcbiAgTWVzc2FnZVRyYW5zcG9ydCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gXCJ3aW5zdG9uXCI7XG5pbXBvcnQgeyBMb2dnaW5nV2luc3RvbiB9IGZyb20gXCJAZ29vZ2xlLWNsb3VkL2xvZ2dpbmctd2luc3RvblwiO1xuaW1wb3J0ICogYXMgTG9nZ2luZ1dpbnN0b25UeXBlcyBmcm9tIFwiQGdvb2dsZS1jbG91ZC9sb2dnaW5nLXdpbnN0b24vYnVpbGQvc3JjL3R5cGVzL2NvcmVcIjtcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZcIjtcblxubGV0IGxvZ2dpbmdUcmFuc3BvcnRDb25maWc6IExvZ2dpbmdXaW5zdG9uVHlwZXMuT3B0aW9ucyA9IHtcbiAgbGV2ZWw6IFtcImRldlwiLCBcInRlc3RcIiwgXCJsb2NhbFwiXS5pbmNsdWRlcyhlbnYpID8gXCJkZWJ1Z1wiOiBcImVycm9yXCIsXG59O1xuXG4vLyBwb3B1bGF0ZSB2YWx1ZXMgaWYgcnVubmluZyB0aGlzIHBhY2thZ2UgbG9jYWxseVxuaWYgKGVudiA9PT0gXCJsb2NhbFwiKSB7XG4gIGxvZ2dpbmdUcmFuc3BvcnRDb25maWcubG9nTmFtZSA9IGBwcm9qZWN0cy8ke3Byb2Nlc3MuZW52LkdDTE9VRF9QUk9KRUNUfS9sb2dzL215c2VydmljZS1sb2NhbF9sb2dgO1xuICBsb2dnaW5nVHJhbnNwb3J0Q29uZmlnLnJlc291cmNlID0ge1xuICAgIHR5cGU6IFwiZ2xvYmFsXCJcbiAgfTtcbn1cblxuY29uc3QgdHJhbnNwb3J0ID0gbmV3IExvZ2dpbmdXaW5zdG9uKGxvZ2dpbmdUcmFuc3BvcnRDb25maWcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIgZXh0ZW5kcyB3aW5zdG9uLkxvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHdpbnN0b24uTG9nZ2VyT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hZGQodHJhbnNwb3J0LCBsb2dnaW5nVHJhbnNwb3J0Q29uZmlnLCB0cnVlKTtcbiAgICB0aGlzLmFkZCh3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSwge1xuICAgICAgdGltZXN0YW1wOiB0cnVlLFxuICAgICAgY29sb3JpemU6IHRydWUsXG4gICAgICBsZXZlbDogW1wiZGV2XCIsIFwidGVzdFwiLCBcImxvY2FsXCJdLmluY2x1ZGVzKGVudikgPyBcImRlYnVnXCI6IFwiZXJyb3JcIlxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9nZ2VyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL2xvZ2dpbmctd2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvbG9nZ2luZy13aW5zdG9uXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tICdAZ29vZ2xlLWNsb3VkL3N0b3JhZ2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgbWltZVR5cGVzIGZyb20gJ21pbWUtdHlwZXMnO1xuXG5jbGFzcyBMb2dnZXIge1xuICBpbmZvKC4uLmFyZ3M6YW55W10pe31cbiAgbG9nKC4uLmFyZ3M6YW55W10pe31cbiAgZGVidWcoLi4uYXJnczphbnlbXSl7fVxuICB3YXJuKC4uLmFyZ3M6YW55W10pe31cbiAgZXJyb3IoLi4uYXJnczphbnlbXSl7fVxufVxuY29uc3QgZ2NzID0gU3RvcmFnZSgpLFxuICBfbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHJlbmFtZSBwcm9wZXJ0aWVzIGluIHRvIG1lZXQgQmlnUXVlcnkgZmllbGQgbmFtZSByZXF1aXJlbWVudHMuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVmFsdWUgdG8gZXhhbWluZS5cbiAqL1xuZnVuY3Rpb24gZml4TmFtZXMob2JqOiBhbnkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIG9iai5mb3JFYWNoKGZpeE5hbWVzKTtcbiAgfVxuICBlbHNlIGlmIChvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGZpeE5hbWVzKHZhbHVlKTtcbiAgICAgIGNvbnN0IGZpeGVkS2V5ID0ga2V5LnJlcGxhY2UoJy0nLCAnXycpXG4gICAgICAgIC5yZXBsYWNlKCdAJywgJ19hdF8nKVxuICAgICAgICAucmVwbGFjZSgnLicsICdfJylcbiAgICAgICAgLnJlcGxhY2UoLyheW15hLXpBLVpfXSkvLCAnXyQxJyk7XG4gICAgICBpZiAoZml4ZWRLZXkgIT09IGtleSkge1xuICAgICAgICBvYmpbZml4ZWRLZXldID0gdmFsdWU7XG4gICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VQcm92aWRlck9wdGlvbnMge1xuICBidWNrZXROYW1lOiBzdHJpbmc7XG4gIGZvckJpZ1F1ZXJ5OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlUHJvdmlkZXIge1xuICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UuU3RvcmFnZTtcbiAgcHJpdmF0ZSBsb2dnZXI6IGFueTtcblxuICBvcHRpb25zOiBTdG9yYWdlUHJvdmlkZXJPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucz9cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYnVja2V0TmFtZSAtIFRoZSBkZWZhdWx0IGJ1Y2tldCB3aGVyZSBmaWxlcyB3aWxsIGJlIHNhdmVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuZm9yQmlnUXVlcnkgLSBGb3JtYXQgZGF0YSBmb3IgdGhlIGNvbnN1bXB0aW9uXG4gICAqIG9mIEJpZ1F1ZXJ5IGJlZm9yZSBzYXZlLiBEZWZhdWx0OiBmYWxzZVxuICAgKiovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBTdG9yYWdlUHJvdmlkZXJPcHRpb25zLCBsb2dnZXI/OiBhbnkpIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBnY3M7XG4gICAgdGhpcy5vcHRpb25zID0gXy5tZXJnZSh7XG4gICAgICBmb3JCaWdRdWVyeTogZmFsc2UsXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlciB8fCBfbG9nZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgZGF0YSB0byB0aGUgcmVtb3RlIHN0b3JhZ2UgcHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBmaWxlbmFtZSBhcyBpdCB3aWxsIGFwcGVhciBvbiB0aGUgcmVtb3RlIHN0b3JhZ2UgcHJvdmlkZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gRGF0YSB0byBiZSBzYXZlZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnM/XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJ1Y2tldE5hbWUgLSBUaGUgYnVja2V0IHdoZXJlIGZpbGVzIHdpbGwgYmUgc2F2ZWQ7IHRoaXMgd2lsbFxuICAgKiBvdmVycmlkZSB0aGUgZGVmYXVsdCBidWNrZXROYW1lIHNldCBkdXJpbmcgaW5zdGFudGlhdGlvbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmZvckJpZ1F1ZXJ5PyAtIEZvcm1hdCBkYXRhIGZvciB0aGUgY29uc3VtcHRpb25cbiAgICogb2YgQmlnUXVlcnkgYmVmb3JlIHNhdmUuIERlZmF1bHQ6IGZhbHNlXG4gICAqKi9cbiAgYXN5bmMgc2F2ZShmaWxlbmFtZTogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM/OiBTdG9yYWdlUHJvdmlkZXJPcHRpb25zKSB7XG4gICAgbGV0IF9vcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICBsZXQgcGF5bG9hZCA9IGRhdGE7XG5cbiAgICBpZiAoIV9vcHRpb25zLmJ1Y2tldE5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ29wdGlvbnMuYnVja2V0TmFtZScgbXVzdCBiZSBwcm92aWRlZGApO1xuICAgIH1cblxuICAgIGlmIChfb3B0aW9ucy5mb3JCaWdRdWVyeSA9PT0gdHJ1ZSkge1xuICAgICAgcGF5bG9hZCA9IF8ubWVyZ2UoW10sIGRhdGEpO1xuICAgICAgZml4TmFtZXMocGF5bG9hZCk7XG4gICAgICBwYXlsb2FkID0gKEFycmF5LmlzQXJyYXkocGF5bG9hZCkgPyBwYXlsb2FkIDogW3BheWxvYWRdKVxuICAgICAgICAubWFwKChldmVudCkgPT4gSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgICAgICAuam9pbignXFxuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVja2V0TmFtZSA9IF9vcHRpb25zLmJ1Y2tldE5hbWU7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuc3RvcmFnZS5idWNrZXQoYnVja2V0TmFtZSkuZmlsZShmaWxlbmFtZSk7XG5cbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBTYXZpbmcgZXZlbnRzIHRvICR7ZmlsZW5hbWV9IGluIGJ1Y2tldCAke2J1Y2tldE5hbWV9YCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmlsZS5zYXZlKHBheWxvYWQsIHtcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICBjb250ZW50VHlwZTogbWltZVR5cGVzLmxvb2t1cChmaWxlbmFtZSkgfHwgJycsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhgSlNPTiB3cml0dGVuIHRvIGdzOi8vJHtidWNrZXROYW1lfS8ke2ZpbGVuYW1lfWApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgIH07XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycik7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1pbWUtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtaW1lLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUHViU3ViIGZyb20gXCJAZ29vZ2xlLWNsb3VkL3B1YnN1YlwiO1xuXG5jbGFzcyBMb2dnZXIge1xuICBpbmZvKC4uLmFyZ3M6YW55W10pe31cbiAgbG9nKC4uLmFyZ3M6YW55W10pe31cbiAgZGVidWcoLi4uYXJnczphbnlbXSl7fVxuICB3YXJuKC4uLmFyZ3M6YW55W10pe31cbiAgZXJyb3IoLi4uYXJnczphbnlbXSl7fVxufVxuY29uc3QgcHVic3ViID0gUHViU3ViKCksXG4gIF9sb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUF0dHJpYnV0ZXMge1xuICBba2V5OnN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBjbGFzcyBmb3IgR29vZ2xlIFB1YnN1YlxuICoqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVRyYW5zcG9ydCB7XG4gIGxvZ2dlcj86IGFueTtcbiAgdG9waWNOYW1lOiBzdHJpbmc7XG4gIHRvcGljOiBQdWJTdWIuVG9waWM7XG4gIHB1Ymxpc2hlcjogUHViU3ViLlB1Ymxpc2hlcjtcbiAgcmVhZG9ubHkgYXV0b0NyZWF0ZVRvcGljOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWNOYW1lIC0gTWVzc2FnZSB0b3BpYyBuYW1lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9DcmVhdGVUb3BpYz8gLSBDcmVhdGUgdGhlIHRvcGljIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgKiovXG4gIGNvbnN0cnVjdG9yKHRvcGljTmFtZTogc3RyaW5nLCBhdXRvQ3JlYXRlVG9waWM/OiBib29sZWFuLCBsb2dnZXI/OiBhbnkpIHtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlciB8fCBfbG9nZ2VyO1xuICAgIHRoaXMudG9waWNOYW1lID0gdG9waWNOYW1lO1xuICAgIHRoaXMudG9waWMgPSBwdWJzdWIudG9waWModGhpcy50b3BpY05hbWUpO1xuICAgIHRoaXMucHVibGlzaGVyID0gdGhpcy50b3BpYy5wdWJsaXNoZXIoKTtcbiAgICB0aGlzLmF1dG9DcmVhdGVUb3BpYyA9IGF1dG9DcmVhdGVUb3BpYyB8fCBmYWxzZTtcblxuICAgIHRoaXMuY2hlY2tUb3BpYygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGVja1RvcGljKCkge1xuICAgIGxldCBbZXhpc3RzXSA9IGF3YWl0IHRoaXMudG9waWMuZXhpc3RzKCk7XG5cbiAgICBpZih0aGlzLmF1dG9DcmVhdGVUb3BpYyA9PT0gdHJ1ZSAmJiAhZXhpc3RzKSB7XG4gICAgICB0aGlzLnRvcGljID0gKGF3YWl0IHRoaXMuY3JlYXRlVG9waWMoKSlbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudG9waWM7XG4gIH1cblxuICBjcmVhdGVUb3BpYygpIHtcbiAgICByZXR1cm4gdGhpcy50b3BpYy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaXNoIHRoZSBwcm92aWRlZCBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdHxidWZmZXJ9IGRhdGEgLSBUaGUgbWVzc2FnZSBwYXlsb2FkIHRvIHB1Ymxpc2guIElmIGRhdGEgaXMgbm90IGEgQnVmZmVyIG9iamVjdFxuICAgKiAgIHRoZW4gaXQgd2lsbCBiZSBjb252ZXJ0ZWQgYmVmb3JlIHB1Ymxpc2hpbmcgdGhlIG1lc3NhZ2U7IG90aGVyd2lzZSB0aGUgbWVzc2FnZSBpcyBwdWJsaXNoZWQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzPyAtIEF0dHJpYnV0ZXMgb2YgdGhlIG1lc3NhZ2UgaW4gdGhlIGZvcm1cbiAgICogICBvZiBhbiBvYmplY3QgY29udGFpbmluZyBhIGxpc3Qgb2YgXCJrZXlcIjogdmFsdWUgcGFpcnMuXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSAtIFRoZSBzZXJ2ZXItYXNzaWduZWQgSUQgb2YgdGhlIHB1Ymxpc2hlZCBtZXNzYWdlLlxuICAgKiovXG4gIGFzeW5jIHB1Ymxpc2goZGF0YTogYW55LCBhdHRyaWJ1dGVzPzogTWVzc2FnZUF0dHJpYnV0ZXMpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoXCJwdWJsaXNoIG1lc3NhZ2VcIiwgeyBkYXRhLCBhdHRyaWJ1dGVzIH0pO1xuICAgIGxldCBwYXlsb2FkOiBhbnk7XG5cbiAgICBpZihkYXRhIGluc3RhbmNlb2YgQnVmZmVyKSB7XG4gICAgICBwYXlsb2FkID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZCA9IG5ldyBCdWZmZXIoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hlci5wdWJsaXNoKHBheWxvYWQsIGF0dHJpYnV0ZXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVzc2FnZVRyYW5zcG9ydC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnb29nbGUtY2xvdWQvcHVic3ViXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGdvb2dsZS1jbG91ZC9wdWJzdWJcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9