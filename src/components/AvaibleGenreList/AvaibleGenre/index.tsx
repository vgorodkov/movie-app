import React from 'react';
import {useTheme} from 'styled-components';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {useAppDispatch} from '@/store/hooks';
import {selectGenre} from '@/store/slices/movieGenre';

import {PressableAvaibleGenre} from './styles';
import {AvaibleGenreProps} from './types';

export const AvaibleGenre = ({genre, isSelected}: AvaibleGenreProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const onMovieGenrePress = () => {
    dispatch(selectGenre(genre));
  };

  return (
    <PressableAvaibleGenre isSelected={isSelected} onPress={onMovieGenrePress}>
      <Typography
        color={isSelected ? theme.colors.onPrimary : theme.colors.primaryText}
        variant={TypographyVariant.LABEL_MEDIUM}>
        {genre}
      </Typography>
    </PressableAvaibleGenre>
  );
};
