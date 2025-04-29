"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestSchema = void 0;
// src/schemas/CreateRequestSchema.ts
const joi_1 = __importDefault(require("joi"));
exports.createRequestSchema = joi_1.default.object({
    subject: joi_1.default.string().required().messages({
        'string.base': '"subject" should be a type of "string"',
        'any.required': '"subject" is a required field',
    }),
    text: joi_1.default.string().required().messages({
        'string.base': '"text" should be a type of "string"',
        'any.required': '"text" is a required field',
    }),
});
//# sourceMappingURL=create-request.schema.js.map