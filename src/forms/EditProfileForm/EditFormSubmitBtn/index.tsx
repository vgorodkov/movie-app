import {firebase} from '@react-native-firebase/auth';
import {FieldValues, useFormContext} from 'react-hook-form';

import {Button} from '@/components/UI';
import {useAppDispatch} from '@/store/hooks';
import {updateUser} from '@/store/slices/user';
import {reauth} from '@/utils/firebase/reauth';
import {updateFirestoreUser} from '@/utils/firebase/updateFirestoreUser';
import {showToast} from '@/utils/showToast';

export const EditFormSubmitBtn = () => {
  const {handleSubmit} = useFormContext();

  const dispatch = useAppDispatch();

  const onEditButtonPress = async (data: FieldValues) => {
    const {name, surname, currentPassword, newPassword} = data;
    const user = firebase.auth().currentUser;

    if (!user) {
      showToast('User not authenticated');
      return;
    }

    try {
      await reauth(user, currentPassword);
      await updateFirestoreUser(user, {name, surname, newPassword});
      await user.updatePassword(newPassword);
      dispatch(updateUser({name, surname}));
      showToast('User information was succesfully updated');
    } catch (err) {
      if (err instanceof Error) {
        showToast(err.message);
      }
    }
  };

  return <Button onPress={handleSubmit(onEditButtonPress)}>Edit</Button>;
};
