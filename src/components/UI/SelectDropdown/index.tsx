import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Animated, {useDerivedValue, withTiming} from 'react-native-reanimated';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import {FlexContainer} from '@/styled/FlexContainer';

import {TypographyVariant} from '../Typography/types';
import {renderDropdownOption} from './renderDropdownOption';
import {DropdownSelect, DropdownSelectLabel} from './styles';
import {DropdownOption, SelectDropdownProps} from './types';

export const SelectDropdown = ({
  label,
  data,
  onSelect,
  initialOption,
}: SelectDropdownProps) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    DropdownOption | undefined
  >(initialOption);

  const arrowRotation = useDerivedValue(() => {
    if (isVisible) {
      return withTiming('180deg');
    } else {
      return withTiming('0deg');
    }
  });

  const toggleDropdown = () => {
    setVisible(p => !p);
  };

  const onOptionPress = (option: DropdownOption) => {
    onSelect(option.code);
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <FlexContainer gap="8px">
      <DropdownSelect onPress={toggleDropdown}>
        <DropdownSelectLabel variant={TypographyVariant.LABEL_LARGE}>
          {selectedOption?.label ?? label}
        </DropdownSelectLabel>
        <Animated.View style={{transform: [{rotate: arrowRotation}]}}>
          <ArrowDown />
        </Animated.View>
      </DropdownSelect>
      {isVisible && (
        <FlatList
          data={data}
          renderItem={renderDropdownOption(onOptionPress, selectedOption)}
        />
      )}
    </FlexContainer>
  );
};
