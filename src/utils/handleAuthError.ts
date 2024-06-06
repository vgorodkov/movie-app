import {showToast} from '@/utils/showToast';

export const handleAuthError = (error: {code: string; message: string}) => {
  const errorMessages: {[key: string]: string} = {
    'auth/email-already-in-use': 'That email address is already in use!',
    'auth/invalid-email': 'That email address is invalid!',
    'auth/invalid-credential': 'Auth credential is invalid!',
    'auth/account-exists-with-different-credential':
      'An account already exists with the same email address but different sign-in credentials',
  };

  const message = errorMessages[error.code] || error.message;
  showToast(message);
};
