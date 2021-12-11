import { body } from 'express-validator';

export const createQuestionDto = [
  body('service_id')
    .isString()
    .notEmpty()
    .withMessage('Not valid server ID for questions'),
  body('description')
    .isString()
    .notEmpty()
    .withMessage('Not valid content for questions'),
];
export const updateQuestionDto = [
  body('description')
    .isString()
    .notEmpty()
    .withMessage('Not valid content for questions'),
];
