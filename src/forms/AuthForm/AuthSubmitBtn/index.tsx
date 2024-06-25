import React from 'react';
import {useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';

import {LoadingBackdrop} from '@/components/UI/LoadingBackdrop';
import {useAuthSubmit} from '@/hooks/useAuthSubmit';

import {SignUpFormInputs} from '../types';
import {AuthButton} from './styles';
import {AuthSubmitButtonProps} from './types';

export const AuthSubmitButton = ({isSignUp}: AuthSubmitButtonProps) => {
  const theme = useTheme();
  const {t} = useTranslation('auth');
  const {handleSubmit} = useFormContext<SignUpFormInputs>();

  const {isLoading, handleAuth} = useAuthSubmit(isSignUp);

  const onSubmit = (data: SignUpFormInputs) => {
    handleAuth(data);
  };

  return (
    <>
      {isLoading && <LoadingBackdrop />}
      <AuthButton
        testID="AuthSubmitBtn"
        color={theme.colors.onPrimary}
        disabled={isLoading}
        onPress={handleSubmit(onSubmit)}>
        {isSignUp ? t('SignUp') : t('SignIn')}
      </AuthButton>
    </>
  );
};
