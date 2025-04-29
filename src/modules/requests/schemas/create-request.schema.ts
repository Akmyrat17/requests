// src/schemas/CreateRequestSchema.ts
import Joi from 'joi';

export const createRequestSchema = Joi.object({
    subject: Joi.string().required().messages({
        'string.base': '"subject" should be a type of "string"',
        'any.required': '"subject" is a required field',
    }),
    text: Joi.string().required().messages({
        'string.base': '"text" should be a type of "string"',
        'any.required': '"text" is a required field',
    }),
});
