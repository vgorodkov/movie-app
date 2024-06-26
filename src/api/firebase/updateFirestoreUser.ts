import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {User} from '@/types/user';

interface UpdatedInfo extends Omit<User, 'uid'> {
  newPassword: string;
}

export const updateFirestoreUser = async (
  user: FirebaseAuthTypes.User,
  updatedInfo: UpdatedInfo,
) => {
  const {name, surname, newPassword} = updatedInfo;
  await firestore().collection('users').doc(user.uid).update({
    name,
    surname,
  });
  await user.updatePassword(newPassword);
};
