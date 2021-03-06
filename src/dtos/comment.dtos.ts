import { body } from 'express-validator';

export const createCommentDto = [
  body('content')
    .isString()
    .notEmpty()
    .withMessage('Not valid content for comment'),
  body('service_id')
    .isString()
    .notEmpty()
    .withMessage('Not valid server ID for comment'),
];

export const updateCommentDto = [
  body('content')
    .isString()
    .notEmpty()
    .withMessage('Not valid content for comment'),
];
