// src/schemas/CancelRequestSchema.ts
import Joi from 'joi';

export const cancelRequestSchema = Joi.object({
    cancelReason: Joi.string().required().messages({
        'string.base': '"cancelReason" should be a type of "string"',
        'any.required': '"cancelReason" is a required field',
    }),
});
