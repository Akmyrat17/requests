"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const requests_routes_1 = __importDefault(require("./modules/requests/requests.routes"));
const error_handler_1 = require("./middlewares/error-handler");
const errors_1 = require("./common/errors");
const logger_1 = require("./common/logger");
const app = (0, express_1.default)();
app.use(logger_1.morganMiddleware);
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/requests', requests_routes_1.default);
app.use((req, res, next) => {
    // If no route matches, throw a NotFoundError
    next(new errors_1.NotFoundError('Route not found'));
});
app.use(error_handler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map