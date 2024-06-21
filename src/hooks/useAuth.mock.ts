import {useAppSelector} from '@/store/hooks';
import {userSelector} from '@/store/slices/user/selectors';

export const useAuth = () => {
  const initializing = false;
  const user = useAppSelector(userSelector);
  return {initializing, user};
};
