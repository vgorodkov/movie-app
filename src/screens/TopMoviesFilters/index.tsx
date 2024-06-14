import React from 'react';
import {useTranslation} from 'react-i18next';

import {InputRange, Modal} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {setRatingFilter, setYearFilter} from '@/store/slices/topMovieFilters';
import {
  topMovieRatingFilterSelector,
  topMovieYearFilterSelector,
} from '@/store/slices/topMovieFilters/selectors';
import {Range} from '@/types/common';

import {TopMoviesFiltersModalProps} from './types';

export const TopMoviesFiltersModal = ({
  navigation,
}: TopMoviesFiltersModalProps) => {
  const dispatch = useAppDispatch();
  const yearFilterRange = useAppSelector(topMovieYearFilterSelector);
  const ratingFilterRange = useAppSelector(topMovieRatingFilterSelector);
  const {t} = useTranslation('top');
  const onBackdropPress = () => {
    navigation.goBack();
  };

  const onYearRangeInputValueChange = (range: Range<string>) => {
    const {max, min} = range;
    dispatch(setYearFilter({max: +max, min: +min}));
  };

  const onRatingRangeInputValueChange = (range: Range<string>) => {
    const {max, min} = range;
    dispatch(setRatingFilter({max: +max, min: +min}));
  };

  return (
    <Modal title="Filters" onBackdropPress={onBackdropPress}>
      <InputRange
        min={1900}
        max={2024}
        initialMin={yearFilterRange?.min}
        initialMax={yearFilterRange?.max}
        title={t('Year')}
        onValueChange={onYearRangeInputValueChange}
      />
      <InputRange
        onValueChange={onRatingRangeInputValueChange}
        initialMin={ratingFilterRange?.min}
        initialMax={ratingFilterRange?.max}
        min={0}
        max={10}
        title={t('Rating')}
      />
    </Modal>
  );
};
