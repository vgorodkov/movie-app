import firestore from '@react-native-firebase/firestore';

export const addUserToFirestore = (
  uid: string,
  userInfo: {name: string; surname: string},
) => {
  firestore().collection('users').doc(uid).set(userInfo);
};
