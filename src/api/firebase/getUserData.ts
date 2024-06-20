import firestore from '@react-native-firebase/firestore';

export const getUserData = async (uid: string) => {
  const user = await firestore().collection('users').doc(uid).get();
  return user.data();
};
