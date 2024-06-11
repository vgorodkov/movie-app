import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import {Input} from '@/components/UI/Input';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {ForgotPasswordBtn} from '../ForgotPasswordBtn';
import {PasswordDifficultyIndicator} from '../PasswordDifficultyIndicator';
import {inputIcons} from './icons';
import {AuthInputsProps} from './types';

export const AuthInputs = ({authForm, isSignUp}: AuthInputsProps) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  return (
    <FlexContainer gap={spacing.l}>
      {authForm.map(({placeholder, name}) => {
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
                <FlexContainer gap={spacing.s}>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    Svgr={inputIcons[name]}
                    secureTextEntry={isPassword}
                    errorMessage={errorMessage}
                  />
                  {shouldShowPasswordDifficulty && (
                    <PasswordDifficultyIndicator password={value} />
                  )}
                  {shouldShowForgotPassword && <ForgotPasswordBtn />}
                </FlexContainer>
              );
            }}
          />
        );
      })}
    </FlexContainer>
  );
};
