import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';

import {OptionTouchable} from './styles';
import {SelectDropdownOptionProps} from './types';

export const SelectDropdownOption = ({
  option,
  onSelect,
  isActive,
}: SelectDropdownOptionProps) => {
  const onOptionSelect = () => {
    onSelect(option);
  };
  return (
    <OptionTouchable onPress={onOptionSelect} isActive={isActive}>
      <Typography
        variant={TypographyVariant.LABEL_MEDIUM}
        padding={spacing.s}
        color="black">
        {option.label}
      </Typography>
    </OptionTouchable>
  );
};