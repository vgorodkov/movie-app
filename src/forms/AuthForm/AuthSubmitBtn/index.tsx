import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';

import {addUserToFirestore} from '@/api/firebase/addUserToFirestore';
import {getUserData} from '@/api/firebase/getUserData';
import {LoadingBackdrop} from '@/components/UI/LoadingBackdrop';
import {useHandleError} from '@/hooks/useHandleError';
import {setUser} from '@/store/slices/user';
import {isErrorWithCode} from '@/utils/isErrorWithCode';

import {SignUpFormInputs} from '../types';
import {AuthButton} from './styles';
import {AuthSubmitButtonProps} from './types';

export const AuthSubmitButton = ({isSignUp}: AuthSubmitButtonProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation('auth');
  const {handleSubmit} = useFormContext<SignUpFormInputs>();
  const {showErrorToast} = useHandleError();
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
        showErrorToast(error.code);
      } else {
        showErrorToast('An Error occured during auth');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: SignUpFormInputs) => {
    handleAuth(data);
  };

  return (
    <>
      {isLoading && <LoadingBackdrop />}
      <AuthButton
        color={theme.colors.onPrimary}
        disabled={isLoading}
        onPress={handleSubmit(onSubmit)}>
        {isSignUp ? t('SignUp') : t('SignIn')}
      </AuthButton>
    </>
  );
};
