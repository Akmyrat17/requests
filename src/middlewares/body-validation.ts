// src/middleware/validateJoi.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateJoi = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);

        if (error) {
            throw new Error(error.message);
        }

        next(); // Proceed to the next middleware or route handler
    };
};
