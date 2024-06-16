import React from 'react';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {BasicDetails} from './BasicDetails';
import {Description} from './Description';
import {MovieDetailsProps} from './types';

export const MovieDetails = ({genre, title, synopsis}: MovieDetailsProps) => {
  return (
    <FlexContainer padding={`${spacing.m}px`} gap={spacing.m}>
      <BasicDetails genre={genre} />
      <Description title={title} synopsis={synopsis} />
    </FlexContainer>
  );
};
