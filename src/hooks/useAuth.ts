import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (authUser: FirebaseAuthTypes.User | null) => {
    setUser(authUser);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {initializing, user};
};
