import React from 'react';
import {useTranslation} from 'react-i18next';

import FilterIcon from '@/assets/icons/filter.svg';
import SearchIcon from '@/assets/icons/search.svg';

import {SearchBarContainer, SearchBarInput} from './styles';
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
      <SearchBarInput
        testID="TopMoviesSearchBar"
        value={value}
        onChangeText={onValueChange}
        placeholder={t('SearchBarPlaceholder')}
      />
      <FilterIcon
        testID="TopMoviesFiltersIcon"
        onPress={onFiltersPress}
        width={16}
        height={16}
      />
    </SearchBarContainer>
  );
};
