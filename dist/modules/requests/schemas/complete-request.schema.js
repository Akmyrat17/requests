"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeRequestSchema = void 0;
// src/schemas/CompleteRequestSchema.ts
const joi_1 = __importDefault(require("joi"));
exports.completeRequestSchema = joi_1.default.object({
    solutionText: joi_1.default.string().required().messages({
        'string.base': '"solutionText" should be a type of "string"',
        'any.required': '"solutionText" is a required field',
    }),
});
//# sourceMappingURL=complete-request.schema.js.map