import React, {useRef} from 'react';
import {PanResponder} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import SwipeTop from '@/assets/icons/swipe_top.svg';
import {
  Separator,
  StarIcon,
  Typography,
  TypographyVariant,
} from '@/components/UI';
import {mockTop100Movies} from '@/data/top100Mock';

import {ANIMATION_DURATION, SWIPE_THRESHOLD} from '../constants';
import {HeaderContainer} from './styles';
import {HeaderProps} from './types';

export const Header = ({
  isOpen,
  openBottomSheet,
  closeBottomSheet,
  imdbid,
}: HeaderProps) => {
  //const {data, isLoading} = useGetMovieInfoQuery(imdbid);
  const mockMovieInfo = mockTop100Movies.find(
    mockMovie => mockMovie.imdbid === imdbid,
  );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -SWIPE_THRESHOLD) {
          openBottomSheet();
        } else {
          closeBottomSheet();
        }
      },
    }),
  ).current;

  if (!mockMovieInfo) {
    return null;
  }

  /* if (isLoading || !data) {
    return (
      <Typography variant={TypographyVariant.LABEL_LARGE}>
        Loading...
      </Typography>
    );
  } */

  return (
    <HeaderContainer {...panResponder.panHandlers}>
      <Separator />
      <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
        {mockMovieInfo.title}
      </Typography>
      <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
        {mockMovieInfo.rating} <StarIcon />
      </Typography>
      {!isOpen && (
        <Animated.View
          entering={FadeIn.delay(ANIMATION_DURATION)}
          exiting={FadeOut}>
          <SwipeTop width={64} height={64} />
        </Animated.View>
      )}
    </HeaderContainer>
  );
};
