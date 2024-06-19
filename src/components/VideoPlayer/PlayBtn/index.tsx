import React from 'react';

import PlayIcon from '@/assets/icons/play.svg';

import {PlayBtnContainer} from './styles';
import {PlayBtnProps} from './types';

export const PlayBtn = ({handlePlayBtn}: PlayBtnProps) => {
  return (
    <PlayBtnContainer onPress={handlePlayBtn}>
      <PlayIcon color="#D98639" />
    </PlayBtnContainer>
  );
};
