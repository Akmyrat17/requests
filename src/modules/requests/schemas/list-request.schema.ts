import joi from 'joi';

export const listRequestSchema = joi.object({
    startDate: joi.string().optional().messages({
        'string.base': '"startDate" should be a type of "string"',
    }),
    endDate: joi.string().optional().messages({
        'string.base': '"endDate" should be a type of "string"',
    }),
});