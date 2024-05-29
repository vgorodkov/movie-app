import React from 'react';

import {PlayBtnContainer, PlayBtnIcon} from './styles';

export const PlayBtn = ({handlePlayBtn}: {handlePlayBtn: () => void}) => {
  return (
    <PlayBtnContainer onPress={handlePlayBtn}>
      <PlayBtnIcon source={require('@/assets/icons/play.png')} />
    </PlayBtnContainer>
  );
};
