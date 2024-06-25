import styled from 'styled-components/native';

import {VIDEO_PLAYER_HEIGHT} from '../constants';
import {PLAYER_BTN_SIZE} from './constants';

export const PlayBtnContainer = styled.Pressable`
  position: absolute;
  top: ${VIDEO_PLAYER_HEIGHT / 2 - PLAYER_BTN_SIZE / 2}px;
  align-self: center;
  z-index: 10;
`;

export const PlayBtnIcon = styled.Image`
  width: ${PLAYER_BTN_SIZE}px;
  height: ${PLAYER_BTN_SIZE}px;
`;
