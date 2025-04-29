"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganMiddleware = exports.logFormat = void 0;
const morgan_1 = __importDefault(require("morgan"));
const chalk_1 = __importDefault(require("chalk"));
// Custom Morgan format with colorized logs using Chalk
const logFormat = (tokens, req, res) => {
    const status = res.statusCode;
    const method = req.method;
    const url = req.url;
    const responseTime = tokens['response-time'](req, res);
    const date = new Date().toISOString().split('T').join(' ').split('.')[0];
    const coloredDate = chalk_1.default.gray(`[${date}]`);
    const coloredMethod = chalk_1.default.blue(method);
    const coloredStatus = status >= 400 ? chalk_1.default.red(status) : chalk_1.default.green(status);
    const coloredUrl = chalk_1.default.yellow(url);
    const coloredResponseTime = chalk_1.default.magenta(responseTime + ' ms');
    return `${coloredDate} ${coloredMethod} ${coloredUrl} ${coloredStatus} - ${coloredResponseTime}`;
};
exports.logFormat = logFormat;
// Export morgan as a middleware
exports.morganMiddleware = (0, morgan_1.default)(exports.logFormat);
//# sourceMappingURL=logger.js.map