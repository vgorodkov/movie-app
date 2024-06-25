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
import {useGetTop100MovieByIdQuery} from '@/store/apiSlices/imbdApi';

import {ANIMATION_DURATION, SWIPE_THRESHOLD} from '../constants';
import {HeaderContainer} from './styles';
import {HeaderProps} from './types';

export const Header = ({
  isOpen,
  openBottomSheet,
  closeBottomSheet,
  movieId,
}: HeaderProps) => {
  const {data, isLoading, isError} = useGetTop100MovieByIdQuery(movieId);

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
    <HeaderContainer
      testID="TopMovieBottomSheetHeader"
      {...panResponder.panHandlers}>
      <Separator />
      <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
        {data?.title}
      </Typography>
      <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
        {data?.rating} <StarIcon />
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
