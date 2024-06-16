import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {FieldValues, useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';

import {LoadingBackdrop} from '@/components/UI/LoadingBackdrop';
import {useHandleError} from '@/hooks/useHandleError';
import {setUser} from '@/store/slices/user';
import {addUserToFirestore} from '@/utils/addUserToFirestore';
import {getUserData} from '@/utils/firebase/getUserData';

import {AuthButton} from './styles';
import {AuthSubmitButtonProps} from './types';

export const AuthSubmitButton = ({isSignUp}: AuthSubmitButtonProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation('auth');
  const {handleSubmit} = useFormContext<FieldValues>();
  const showErrorToast = useHandleError();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (data: FieldValues) => {
    const {email, name, surname, password} = data;
    setIsLoading(true);
    try {
      if (isSignUp) {
        const {user} = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        addUserToFirestore(user.uid, {name, surname});
        dispatch(setUser({name, surname}));
      } else {
        const {user} = await auth().signInWithEmailAndPassword(email, password);
        const userData = await getUserData(user.uid);
        if (userData) {
          dispatch(setUser({name: userData.name, surname: userData.surname}));
        }
      }
    } catch (error) {
      showErrorToast(error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: FieldValues) => {
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
