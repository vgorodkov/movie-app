import {firebase} from '@react-native-firebase/auth';
import {FieldValues, useFormContext} from 'react-hook-form';

import {reauth} from '@/api/firebase/reauth';
import {updateFirestoreUser} from '@/api/firebase/updateFirestoreUser';
import {Button} from '@/components/UI';
import {useAppDispatch} from '@/store/hooks';
import {showToast, ToastStatus} from '@/store/slices/toast';
import {updateUser} from '@/store/slices/user';

export const EditFormSubmitBtn = () => {
  const {handleSubmit} = useFormContext();

  const dispatch = useAppDispatch();

  const onEditButtonPress = async (data: FieldValues) => {
    const {name, surname, currentPassword, newPassword} = data;
    const user = firebase.auth().currentUser;

    if (!user) {
      dispatch(
        showToast({
          status: ToastStatus.ERROR,
          content: 'User not authenticated',
        }),
      );
      return;
    }

    try {
      await reauth(user, currentPassword);
      await updateFirestoreUser(user, {name, surname, newPassword});
      await user.updatePassword(newPassword);
      dispatch(updateUser({name, surname}));
      dispatch(
        showToast({
          status: ToastStatus.SUCCESS,
          content: 'User information was succesfully updated',
        }),
      );
    } catch (err) {
      if (err instanceof Error) {
        dispatch(
          showToast({
            status: ToastStatus.ERROR,
            content: err.message,
          }),
        );
      }
    }
  };

  return <Button onPress={handleSubmit(onEditButtonPress)}>Edit</Button>;
};
