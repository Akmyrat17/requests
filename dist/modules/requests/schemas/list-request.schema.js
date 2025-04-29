"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRequestSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.listRequestSchema = joi_1.default.object({
    startDate: joi_1.default.string().optional().messages({
        'string.base': '"startDate" should be a type of "string"',
    }),
    endDate: joi_1.default.string().optional().messages({
        'string.base': '"endDate" should be a type of "string"',
    }),
});
//# sourceMappingURL=list-request.schema.js.map