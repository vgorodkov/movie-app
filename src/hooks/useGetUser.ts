import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

interface User {
  name: string;
  surname: string;
}

export const useGetUser = (uid: string) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getFirestoreUser = async () => {
      try {
        const firestoreUser = await firestore()
          .collection('users')
          .doc(uid)
          .get();

        const userData = firestoreUser.data();
        if (userData) {
          setUser(userData as User);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getFirestoreUser();
  }, [uid]);

  return user;
};
