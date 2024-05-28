import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {InputField, InputIcon} from './styles';

export interface InputProps extends TextInputProps {
  icon: number;
  errorMessage?: string;
}

export const Input = ({icon, errorMessage, ...props}: InputProps) => {
  const theme = useTheme();

  return (
    <>
      <FlexContainer alignItems="center" flexFlow="row nowrap" gap={spacing.s}>
        {icon && <InputIcon source={icon} />}
        <InputField
          {...props}
          placeholderTextColor={theme.colors.primaryText}
        />
      </FlexContainer>
      {errorMessage && (
        <Typography
          color={theme.colors.error}
          variant={TypographyVariant.LABEL_SMALL}
          alightSelf="flex-start">
          {errorMessage}
        </Typography>
      )}
    </>
  );
};
