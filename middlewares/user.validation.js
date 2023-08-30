import { body } from 'express-validator';

export const createUserValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('name').isString().isLength(3).withMessage('Name should be string with minimum length 3'),
  body('email').isEmail().withMessage('Invalid email format'),
];

