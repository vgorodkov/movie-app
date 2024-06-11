import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {Avatar} from '../Avatar';
import {InputField, InputIcon} from './styles';

export interface InputProps extends TextInputProps {
  author?: string;
  icon?: number;
  Svgr?: any;
  errorMessage?: string;
}

export const Input = ({
  icon,
  author,
  errorMessage,
  Svgr,
  ...props
}: InputProps) => {
  const theme = useTheme();

  return (
    <FlexContainer gap={spacing.s}>
      <FlexContainer alignItems="center" flexFlow="row nowrap" gap={spacing.s}>
        {author && <Avatar user={author} />}
        {Svgr && <Svgr color={theme.colors.primaryText} />}
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
    </FlexContainer>
  );
};
