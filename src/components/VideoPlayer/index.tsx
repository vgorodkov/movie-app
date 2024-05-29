import React, {useRef} from 'react';
import Video, {VideoRef} from 'react-native-video';

import {styles} from './styles';

const MOCK_VIDEO_URI =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

export const VideoPlayer = () => {
  const videoRef = useRef<VideoRef>(null);
  return (
    <Video
      controls={true}
      paused={true}
      style={styles.videoContainer}
      source={{
        uri: MOCK_VIDEO_URI,
      }}
      onError={e => console.error(e)}
      ref={videoRef}
    />
  );
};
