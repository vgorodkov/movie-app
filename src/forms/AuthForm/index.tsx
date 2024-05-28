import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {AuthInputs} from './AuthInputs';
import {AuthSubmitButton} from './AuthSubmitBtn';
import {SIGN_IN_FORM, SIGN_UP_FORM} from './constants';
import {signInValidationSchema, signUpValidationSchema} from './schemas';
import {AuthFormProps, SignUpFormInputs} from './types';

export const AuthForm = ({isSignUp}: AuthFormProps) => {
  const schema = isSignUp ? signUpValidationSchema : signInValidationSchema;
  const form = isSignUp ? SIGN_UP_FORM : SIGN_IN_FORM;

  const methods = useForm<SignUpFormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <AuthInputs authForm={form} isSignUp={isSignUp} />
      <AuthSubmitButton isSignUp={isSignUp} />
    </FormProvider>
  );
};
