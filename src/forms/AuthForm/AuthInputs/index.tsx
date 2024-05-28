import React, {Fragment} from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import {Input} from '@/components/UI/Input';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {ForgotPasswordBtn} from '../ForgotPasswordBtn';
import {PasswordDifficultyIndicator} from '../PasswordDifficultyIndicator';
import {AuthInputsProps} from './types';

export const AuthInputs = ({authForm, isSignUp}: AuthInputsProps) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  return (
    <FlexContainer gap={spacing.sm}>
      {authForm.map(input => {
        const {placeholder, icon, name} = input;

        const isPassword = name === 'password';
        const errorMessage = errors[name]?.message?.toString();
        const shouldShowPasswordDifficulty =
          isSignUp && isPassword && !errorMessage;
        const shouldShowForgotPassword = !isSignUp && isPassword;

        return (
          <Controller
            control={control}
            key={name}
            name={name}
            render={({field: {value, onChange, onBlur}}) => {
              return (
                <>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    icon={icon}
                    secureTextEntry={isPassword}
                    errorMessage={errorMessage}
                  />
                  {shouldShowPasswordDifficulty && (
                    <PasswordDifficultyIndicator password={value} />
                  )}
                  {shouldShowForgotPassword && <ForgotPasswordBtn />}
                </>
              );
            }}
          />
        );
      })}
    </FlexContainer>
  );
};
