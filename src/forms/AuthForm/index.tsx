import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

import {FormField} from '../FormField';
import {AuthSubmitButton} from './AuthSubmitBtn';
import {SIGN_IN_FORM, SIGN_UP_FORM} from './constants';
import {inputIcons} from './icons';
import {signInValidationSchema, signUpValidationSchema} from './schemas';
import {AuthFormProps, SignUpFormInputs} from './types';

export const AuthForm = ({isSignUp}: AuthFormProps) => {
  const {t} = useTranslation('auth');

  const schema = isSignUp ? signUpValidationSchema : signInValidationSchema;
  const form = isSignUp ? SIGN_UP_FORM : SIGN_IN_FORM;

  const methods = useForm<SignUpFormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      {form.map(item => {
        const {name, placeholder} = item;
        const isPassword = name === 'password';
        const showInputDifficulty = isSignUp && isPassword;
        return (
          <FormField
            key={name}
            name={name}
            placeholder={t(placeholder)}
            IconComponent={inputIcons[name]}
            showInputDifficulty={showInputDifficulty}
            hideInputValue={isPassword}
          />
        );
      })}
      <AuthSubmitButton isSignUp={isSignUp} />
    </FormProvider>
  );
};
