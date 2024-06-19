import auth from '@react-native-firebase/auth';
import {isErrorWithCode} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addUserToFirestore, getUserData} from '@/api/firebase';
import {errorMessages} from '@/constants/errors';
import {SignUpFormInputs} from '@/forms/AuthForm/types';
import {setUser} from '@/store/slices/user';

import {useToast} from './useToast';

export const useAuthSubmit = (isSignUp: boolean) => {
  const dispatch = useDispatch();
  const {showErrorToast} = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (data: SignUpFormInputs) => {
    const {email, name, surname, password} = data;

    setIsLoading(true);

    try {
      if (isSignUp) {
        const {user} = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        addUserToFirestore(user.uid, {name, surname});
        dispatch(setUser({name, surname, uid: user.uid}));
      } else {
        const {user} = await auth().signInWithEmailAndPassword(email, password);
        const userData = await getUserData(user.uid);
        if (userData) {
          dispatch(
            setUser({
              name: userData.name,
              surname: userData.surname,
              uid: user.uid,
            }),
          );
        }
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        showErrorToast(errorMessages[error.code]);
      } else {
        showErrorToast('An Error occured during auth');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {handleAuth, isLoading};
};
