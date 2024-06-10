import React from 'react';

import {InputRange, Modal} from '@/components/UI';
import {useAppDispatch} from '@/store/hooks';
import {setRatingFilter, setYearFilter} from '@/store/slices/topMovieFilters';

import {TopMoviesFiltersModalProps} from './types';

interface Range {
  min: string;
  max: string;
}

export const TopMoviesFiltersModal = ({
  navigation,
}: TopMoviesFiltersModalProps) => {
  const dispatch = useAppDispatch();

  const onBackdropPress = () => {
    navigation.goBack();
  };

  const onYearRangeInputValueChange = (range: Range) => {
    const {max, min} = range;
    dispatch(setYearFilter({max: +max, min: +min}));
  };

  const onRatingRangeInputValueChange = (range: Range) => {
    const {max, min} = range;
    dispatch(setRatingFilter({max: +max, min: +min}));
  };

  return (
    <Modal onBackdropPress={onBackdropPress}>
      <InputRange
        min={1900}
        max={2024}
        title="Year"
        onValueChange={onYearRangeInputValueChange}
      />
      <InputRange
        onValueChange={onRatingRangeInputValueChange}
        min={0}
        max={10}
        title="Rating"
      />
    </Modal>
  );
};
