import React, {useRef} from 'react';
import {PanResponder} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import SwipeTop from '@/assets/icons/swipe_top.svg';
import {
  ErrorFallback,
  LoadingFallback,
  Separator,
  StarIcon,
  Typography,
  TypographyVariant,
} from '@/components/UI';
import {useGetMovieInfoQuery} from '@/store/apiSlices/movieApi';

import {ANIMATION_DURATION, SWIPE_THRESHOLD} from '../constants';
import {HeaderContainer} from './styles';
import {HeaderProps} from './types';

export const Header = ({
  isOpen,
  openBottomSheet,
  closeBottomSheet,
  imdbid,
}: HeaderProps) => {
  const {data, isLoading, isError} = useGetMovieInfoQuery(imdbid);
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

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (isError || !data) {
    return <ErrorFallback error="Error while loading movie data" />;
  }

  return (
    <HeaderContainer {...panResponder.panHandlers}>
      <Separator />
      <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
        {data?.title}
      </Typography>
      <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
        {data?.imdbrating} <StarIcon />
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
