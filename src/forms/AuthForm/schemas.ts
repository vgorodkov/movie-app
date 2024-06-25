import * as yup from 'yup';

const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be max 16 characters'),
  surname: yup
    .string()
    .required('Surname is required')
    .min(2, 'Surname must be at least 2 characters')
    .max(16, 'Surname must be max 16 characters'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(emailRegexp, 'Invalid email'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be max 16 characters')
    .required('Password is required'),
});

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(emailRegexp, 'Invalid email'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
