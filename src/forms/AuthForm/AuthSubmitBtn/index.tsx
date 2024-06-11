import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {FieldValues, useFormContext} from 'react-hook-form';
import {useTheme} from 'styled-components';

import {LoadingBackdrop} from '@/components/UI/LoadingBackdrop';
import {addUserToFirestore} from '@/utils/addUserToFirestore';
import {handleAuthError} from '@/utils/handleAuthError';

import {AuthButton} from './styles';
import {AuthSubmitButtonProps} from './types';

export const AuthSubmitButton = ({isSignUp}: AuthSubmitButtonProps) => {
  const theme = useTheme();
  const {handleSubmit} = useFormContext<FieldValues>();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (data: FieldValues) => {
    const {email, password} = data;
    setIsLoading(true);

    try {
      if (isSignUp) {
        await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(({user}) => {
            addUserToFirestore(user.uid, {
              name: data.name,
              surname: data.surname,
            });
          });
      } else {
        await auth().signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      handleAuthError(error as {code: string; message: string});
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
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </AuthButton>
    </>
  );
};
