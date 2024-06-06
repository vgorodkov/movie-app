import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {FieldValues, useFormContext} from 'react-hook-form';

import {LoadingBackdrop} from '@/components/UI/LoadingBackdrop';
import {handleAuthError} from '@/utils/handleAuthError';

import {AuthButton} from './styles';
import {AuthSubmitButtonProps} from './types';

export const AuthSubmitButton = ({isSignUp}: AuthSubmitButtonProps) => {
  const {handleSubmit} = useFormContext<FieldValues>();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (data: FieldValues) => {
    const {email, password} = data;
    setIsLoading(true);

    try {
      if (isSignUp) {
        await auth().createUserWithEmailAndPassword(email, password);
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
      <AuthButton disabled={isLoading} onPress={handleSubmit(onSubmit)}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </AuthButton>
    </>
  );
};
