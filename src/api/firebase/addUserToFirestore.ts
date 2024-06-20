import firestore from '@react-native-firebase/firestore';

import {User} from '@/types/user';

export const addUserToFirestore = (
  uid: string,
  userInfo: Omit<User, 'uid'>,
) => {
  firestore().collection('users').doc(uid).set(userInfo);
};
