import React from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native';

import {Icon} from '../Icon';
import {PressableIcon} from '../PressableIcon';
import {SearchBarContainer} from './styles';

export interface SearchBarProps {
  value: string;
  onValueChange: (value: string) => void;
  onFiltersPress: () => void;
}

export const SearchBar = ({
  value,
  onValueChange,
  onFiltersPress,
}: SearchBarProps) => {
  const {t} = useTranslation('top');
  return (
    <SearchBarContainer>
      <Icon
        source={require('@/assets/icons/search.png')}
        width={16}
        height={16}
      />
      <TextInput
        value={value}
        onChangeText={onValueChange}
        style={{flex: 1}}
        placeholder={t('SearchBarPlaceholder')}
      />
      <PressableIcon
        onPress={onFiltersPress}
        icon={require('@/assets/icons/filter.png')}
        width={16}
        height={16}
      />
    </SearchBarContainer>
  );
};
