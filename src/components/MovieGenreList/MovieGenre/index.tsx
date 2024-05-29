import React from 'react';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {useAppDispatch} from '@/store/hooks';
import {selectGenre} from '@/store/slices/movieGenre';

import {PressableMovieGenre} from './styles';

export const MovieGenre = ({
  genre,
  isSelected,
}: {
  genre: string;
  isSelected: boolean;
}) => {
  const dispatch = useAppDispatch();
  const onMovieGenrePress = () => {
    dispatch(selectGenre(genre));
  };

  return (
    <PressableMovieGenre isSelected={isSelected} onPress={onMovieGenrePress}>
      <Typography variant={TypographyVariant.LABEL_LARGE}>{genre}</Typography>
    </PressableMovieGenre>
  );
};
