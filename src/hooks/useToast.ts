import {useAppDispatch} from '@/store/hooks';
import {showToast, ToastStatus} from '@/store/slices/toast';

export const useToast = () => {
  const dispatch = useAppDispatch();

  const showSuccessToast = (content: string) => {
    dispatch(
      showToast({
        status: ToastStatus.SUCCESS,
        content,
      }),
    );
  };

  const showErrorToast = (content: string) => {
    dispatch(
      showToast({
        status: ToastStatus.ERROR,
        content,
      }),
    );
  };

  return {showSuccessToast, showErrorToast};
};
