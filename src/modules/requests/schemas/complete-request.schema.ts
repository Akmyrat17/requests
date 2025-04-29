// src/schemas/CompleteRequestSchema.ts
import Joi from 'joi';

export const completeRequestSchema = Joi.object({
    solutionText: Joi.string().required().messages({
        'string.base': '"solutionText" should be a type of "string"',
        'any.required': '"solutionText" is a required field',
    }),
});
