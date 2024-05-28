import auth from '@react-native-firebase/auth';
import React from 'react';
import {FieldValues, useFormContext} from 'react-hook-form';

import {AuthButton} from './styles';

export const AuthSubmitButton = ({isSignUp}: {isSignUp: boolean}) => {
  const {handleSubmit} = useFormContext<FieldValues>();

  const handleSignUp = (data: FieldValues) => {
    const {email, password} = data;
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleSignIn = (data: FieldValues) => {
    const {email, password} = data;
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.error(error);
      });
  };

  const onSumbit = (data: FieldValues) => {
    if (isSignUp) {
      handleSignUp(data);
    } else {
      handleSignIn(data);
    }
    console.log(data);
  };

  return (
    <AuthButton onPress={handleSubmit(onSumbit)} backgroundColor="#D98639">
      {isSignUp ? 'Sign Up' : 'Sign In'}
    </AuthButton>
  );
};
