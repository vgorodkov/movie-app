import {useAppDispatch} from '@/store/hooks';
import {showToast, ToastStatus} from '@/store/slices/toast';

const errorMessages: {[key: string]: string} = {
  'auth/email-already-in-use': 'That email address is already in use!',
  'auth/invalid-email': 'That email address is invalid!',
  'auth/invalid-credential': 'Auth credential is invalid!',
  'auth/account-exists-with-different-credential':
    'An account already exists with the same email address but different sign-in credentials',
};

export const useHandleError = () => {
  const dispatch = useAppDispatch();

  const showErrorToast = (errCode: string) => {
    console.log(errCode);
    dispatch(
      showToast({
        status: ToastStatus.ERROR,
        content: errorMessages[errCode] || 'Error',
      }),
    );
  };

  return showErrorToast;
};
