import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {VIDEO_PLAYER_HEIGHT} from './constants';

export const styles = StyleSheet.create({
  videoPlayer: {
    flex: 1,
  },
});

export const VideoContainer = styled.View`
  height: ${VIDEO_PLAYER_HEIGHT}px;
`;
