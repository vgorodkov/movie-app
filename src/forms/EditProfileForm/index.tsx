import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {FormField} from '../FormField';
import {inputIcons} from './icons';
import {EditFormProps} from './types';

export const EditProfileForm = ({title, inputs}: EditFormProps) => {
  return (
    <FlexContainer gap={spacing.sm}>
      <Typography variant={TypographyVariant.LABEL_MEDIUM}>{title}</Typography>
      {inputs.map(input => {
        const {name, placeholder, icon} = input;
        return (
          <FormField
            key={name}
            name={name}
            placeholder={placeholder}
            IconComponent={inputIcons[icon]}
            showInputDifficulty={name === 'newPassword'}
            hideInputValue={name.includes('Password')}
          />
        );
      })}
    </FlexContainer>
  );
};
