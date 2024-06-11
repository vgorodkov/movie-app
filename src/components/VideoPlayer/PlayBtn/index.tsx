import React from 'react';

import PlayIcon from '@/assets/icons/play.svg';

import {PlayBtnContainer} from './styles';

export const PlayBtn = ({handlePlayBtn}: {handlePlayBtn: () => void}) => {
  return (
    <PlayBtnContainer onPress={handlePlayBtn}>
      <PlayIcon color="#D98639" />
    </PlayBtnContainer>
  );
};
