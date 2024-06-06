import React, {useRef, useState} from 'react';
import Video, {VideoRef} from 'react-native-video';

import {TypographyVariant} from '../UI/Typography/types';
import {MOCK_VIDEO_URI} from './constants';
import {PlayBtn} from './PlayBtn';
import {ShareBtn} from './ShareBtn';
import {styles, VideoContainer} from './styles';
import {TicketVoucher} from './TicketVoucher';
import {VideoThumbnail} from './VideoThumbnail';
import {VideoTitle} from './VideoTitle';

export const VideoPlayer = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<VideoRef>(null);

  const handlePlayBtn = () => {
    setIsVideoPlaying(true);
    videoRef.current?.resume();
  };

  const onPlaybackStateChanged = ({isPlaying}: {isPlaying: boolean}) => {
    setIsVideoPlaying(isPlaying);
  };

  return (
    <VideoContainer>
      <Video
        onPlaybackStateChanged={onPlaybackStateChanged}
        paused={true}
        style={styles.videoPlayer}
        source={{
          uri: MOCK_VIDEO_URI,
        }}
        ref={videoRef}
        controls={isVideoPlaying}
      />
      {!isVideoPlaying && (
        <>
          <VideoTitle variant={TypographyVariant.LABEL_LARGE}>
            The Trailer
          </VideoTitle>
          <ShareBtn source={require('@/assets/icons/share.png')} />
          <TicketVoucher />
          <PlayBtn handlePlayBtn={handlePlayBtn} />
          <VideoThumbnail source={require('@/assets/imgs/movie_3.png')} />
        </>
      )}
    </VideoContainer>
  );
};
