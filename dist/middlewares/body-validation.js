"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJoi = void 0;
const validateJoi = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        next(); // Proceed to the next middleware or route handler
    };
};
exports.validateJoi = validateJoi;
//# sourceMappingURL=body-validation.js.map