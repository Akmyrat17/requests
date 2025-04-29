"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelRequestSchema = void 0;
// src/schemas/CancelRequestSchema.ts
const joi_1 = __importDefault(require("joi"));
exports.cancelRequestSchema = joi_1.default.object({
    cancelReason: joi_1.default.string().required().messages({
        'string.base': '"cancelReason" should be a type of "string"',
        'any.required': '"cancelReason" is a required field',
    }),
});
//# sourceMappingURL=cancel-request.schema.js.map