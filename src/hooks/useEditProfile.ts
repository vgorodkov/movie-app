import {firebase} from '@react-native-firebase/auth';

import {reauth, updateFirestoreUser} from '@/api/firebase';
import {EditProfileFormValues} from '@/forms/EditProfileForm/types';
import {useAppDispatch} from '@/store/hooks';
import {updateUser} from '@/store/slices/user';

import {useToast} from './useToast';

export const useEditProfile = () => {
  const dispatch = useAppDispatch();
  const {showErrorToast, showSuccessToast} = useToast();

  const handleProfileEdit = async (data: EditProfileFormValues) => {
    const {name, surname, currentPassword, newPassword} = data;
    const user = firebase.auth().currentUser;

    if (!user) {
      showErrorToast('User not authenticated');
      return;
    }

    try {
      await reauth(user, currentPassword);
      await updateFirestoreUser(user, {name, surname, newPassword});
      await user.updatePassword(newPassword);
      dispatch(updateUser({name, surname}));
      showSuccessToast('User information was succesfully updated');
    } catch (err) {
      if (err instanceof Error) {
        showErrorToast(err.message);
      }
    }
  };

  return {handleProfileEdit};
};
