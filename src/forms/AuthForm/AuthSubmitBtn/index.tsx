import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {FieldValues, useFormContext} from 'react-hook-form';
import {useTheme} from 'styled-components';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {AuthButton} from './styles';

export const AuthSubmitButton = ({isSignUp}: {isSignUp: boolean}) => {
  const theme = useTheme();
  const {handleSubmit} = useFormContext<FieldValues>();
  const [authError, setAuthError] = useState<string | null>(null);

  const handleSignUp = (data: FieldValues) => {
    const {email, password} = data;
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setAuthError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setAuthError('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleSignIn = (data: FieldValues) => {
    const {email, password} = data;
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/invalid-credential') {
          setAuthError('Auth credential is invalid!');
        }
        console.error(error);
      });
  };

  const onSubmit = (data: FieldValues) => {
    if (isSignUp) {
      handleSignUp(data);
    } else {
      handleSignIn(data);
    }
  };

  return (
    <FlexContainer gap={spacing.s}>
      {authError && (
        <Typography
          color={theme.colors.error}
          variant={TypographyVariant.LABEL_MEDIUM}
          alightSelf="flex-start">
          {authError}
        </Typography>
      )}
      <AuthButton onPress={handleSubmit(onSubmit)}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </AuthButton>
    </FlexContainer>
  );
};
