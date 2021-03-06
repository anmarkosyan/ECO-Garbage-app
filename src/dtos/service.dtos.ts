import { body } from 'express-validator';

export const createServiceDto = [
  body('type').isString().notEmpty().withMessage('Not valid type for services'),
  body('rating_quantity')
    .isNumeric()
    .optional()
    .withMessage('Not valid rating for services'),
  body('coordinates')
    .isArray({ min: 2 })
    .notEmpty()
    .withMessage('Not valid coordinates for services'),
  body('description')
    .isString()
    .notEmpty()
    .withMessage('Not valid description for services'),
  body('address')
    .isString()
    .notEmpty()
    .withMessage('Not valid address for services'),
  body('summary')
    .isString()
    .notEmpty()
    .withMessage('Not valid summary for services'),
  body('phone_number')
    .isNumeric()
    .notEmpty()
    .withMessage('Not valid phone-number for services'),
];

export const updateServiceDto = [
  body('type').isString().optional().notEmpty().withMessage('Not valid type for services'),
  body('rating_quantity').isNumeric().optional().notEmpty().withMessage('Not rating type for services'),
  body('coordinates')
    .isArray({ min: 2 })
    .optional()
    .notEmpty()
    .withMessage('Not valid coordinates for services'),
  body('description')
    .isString()
    .optional()
    .notEmpty()
    .withMessage('Not valid description for services'),
  body('address')
    .isString()
    .optional()
    .notEmpty()
    .withMessage('Not valid address for services'),
  body('summary')
    .isString()
    .optional()
    .notEmpty()
    .withMessage('Not valid summary for services'),
  body('phone_number')
    .isNumeric()
    .notEmpty()
    .optional()
    .withMessage('Not valid phone-number for services'),
];
