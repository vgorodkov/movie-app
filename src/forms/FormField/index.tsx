import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import {Input} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {PasswordDifficultyIndicator} from '@/forms/PasswordDifficultyIndicator';
import {FlexContainer} from '@/styled/FlexContainer';

import {FormFieldProps} from './types';

export const FormField = ({
  name,
  placeholder,
  IconComponent,
  hideInputValue = false,
  showInputDifficulty = false,
}: FormFieldProps) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  const errorMessage = errors[name]?.message?.toString();
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange, onBlur}}) => (
        <FlexContainer gap={spacing.s}>
          <Input
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            Svgr={IconComponent}
            secureTextEntry={hideInputValue}
            errorMessage={errorMessage}
          />
          {showInputDifficulty && (
            <PasswordDifficultyIndicator password={value} />
          )}
        </FlexContainer>
      )}
    />
  );
};
