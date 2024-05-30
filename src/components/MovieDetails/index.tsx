import React from 'react';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {Movie} from '@/types/movies';

import {BasicDetails} from './BasicDetails';
import {Description} from './Description';

export interface MovieDetailsProps
  extends Pick<Movie, 'genre' | 'title' | 'synopsis'> {}

export const MovieDetails = ({genre, title, synopsis}: MovieDetailsProps) => {
  return (
    <FlexContainer padding={spacing.sm} gap={spacing.m}>
      <BasicDetails genre={genre} />
      <Description title={title} synopsis={synopsis} />
    </FlexContainer>
  );
};
