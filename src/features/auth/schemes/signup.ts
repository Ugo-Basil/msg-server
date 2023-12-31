import Joi, { ObjectSchema } from 'joi';

const signUpSchema: ObjectSchema = Joi.object({
  username: Joi.string().required().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username should have a minimum length of {#limit}',
    'string.max': 'Username should have a maximum length of {#limit}'
  }),

  email: Joi.string().required().email().messages({
    'string.base': 'Email should be a string',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email should be a valid email'
  }),

  password: Joi.string().required().min(6).max(20).messages({
    'string.base': 'Password should be a string',
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password should have a minimum length of {#limit}',
    'string.max': 'Password should have a maximum length of {#limit}'
  }),

  avatarColor: Joi.string().required().messages({
    'any.required': 'Avatar color is required'
  }),

  avatarImage: Joi.string().required().messages({
    'any.required': 'Avatar image is required'
  })
});

export { signUpSchema };
