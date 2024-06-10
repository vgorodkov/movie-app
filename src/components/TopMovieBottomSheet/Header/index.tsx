import React, {useRef} from 'react';
import {PanResponder} from 'react-native';
import Animated, {FadeIn, FadeOut, withTiming} from 'react-native-reanimated';

import {
  Icon,
  Separator,
  StarIcon,
  Typography,
  TypographyVariant,
} from '@/components/UI';
import {mockTop100Movies} from '@/data/top100Mock';

import {
  ANIMATION_DURATION,
  INITIAL_HEIGHT,
  SWIPE_THRESHOLD,
} from '../constants';
import {HeaderContainer} from './styles';
import {HeaderProps} from './types';

export const Header = ({
  bottomSheetTranslateY,
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
          bottomSheetTranslateY.value = withTiming(0);
        } else {
          closeBottomSheet();
          bottomSheetTranslateY.value = withTiming(INITIAL_HEIGHT);
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
          <Icon
            width={64}
            height={64}
            source={require('@/assets/icons/swipe_top.png')}
          />
        </Animated.View>
      )}
    </HeaderContainer>
  );
};
