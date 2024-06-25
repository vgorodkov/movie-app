import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import ShareIcon from '@/assets/icons/share.svg';
import {spacing} from '@/constants/spacing';

import {Typography} from '../UI';
import {VIDEO_PLAYER_HEIGHT} from './constants';

export const styles = StyleSheet.create({
  videoPlayer: {
    flex: 1,
  },
});

export const VideoContainer = styled.View`
  height: ${VIDEO_PLAYER_HEIGHT}px;
`;

export const ShareBtn = styled(ShareIcon)`
  position: absolute;
  right: ${spacing.sm}px;
  top: ${spacing.sm}px;
  width: 24px;
  height: 24px;
  z-index: 10;
`;

export const VideoThumbnail = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const VideoTitle = styled(Typography)`
  position: absolute;
  top: ${spacing.sm}px;
  left: ${spacing.sm}px;
  z-index: 10;
  color: white;
`;
