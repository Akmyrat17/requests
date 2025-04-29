"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const app_error_1 = require("../common/errors/app.error");
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err); // Delegate to the default Express error handler
    }
    if (err instanceof app_error_1.AppError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            path: req.path, // Path of the request (e.g., /requests/1)
            url: req.originalUrl, // Full URL (e.g., http://localhost:3000/requests/1)
        });
    }
    else {
        // If the error is an uncaught one (non-AppError)
        // Send generic response and log the details
        res.status(500).json({
            success: false,
            message: 'Internal Server Error', // Generic message for uncaught errors
            path: req.path,
            url: req.originalUrl,
            errorDetails: err.message || err, // Optionally include error details for debugging
        });
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map