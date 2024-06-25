import {EditProfileFormValues} from '@/forms/EditProfileForm/types';
import {useAppDispatch} from '@/store/hooks';
import {updateUser} from '@/store/slices/user';

export const useEditProfile = () => {
  const dispatch = useAppDispatch();

  const handleProfileEdit = async (data: EditProfileFormValues) => {
    const {name, surname} = data;
    dispatch(updateUser({name, surname}));
  };

  return {handleProfileEdit};
};
