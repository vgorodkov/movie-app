import * as yup from 'yup';

export const editProfileValidationSchema = yup.object().shape({
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
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be max 16 characters')
    .required('Password is required'),
  currentPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be max 16 characters')
    .required('Password is required'),
});
