import React from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native';

import FilterIcon from '@/assets/icons/filter.svg';
import SearchIcon from '@/assets/icons/search.svg';

import {SearchBarContainer} from './styles';
import {SearchBarProps} from './types';

export const SearchBar = ({
  value,
  onValueChange,
  onFiltersPress,
}: SearchBarProps) => {
  const {t} = useTranslation('top');
  return (
    <SearchBarContainer>
      <SearchIcon width={16} height={16} />
      <TextInput
        value={value}
        onChangeText={onValueChange}
        style={{flex: 1}}
        placeholder={t('SearchBarPlaceholder')}
      />
      <FilterIcon onPress={onFiltersPress} width={16} height={16} />
    </SearchBarContainer>
  );
};
