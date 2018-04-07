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
     */
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
     */
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
 */
var MessageTransport = /** @class */ (function () {
    /**
     * @param {string} topicName - Message topic name.
     * @param {boolean} autoCreateTopic? - Create the topic if it does not exist.
     */
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
     */
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