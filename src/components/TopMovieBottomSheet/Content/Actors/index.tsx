import React from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import {Typography, TypographyVariant} from '@/components/UI';

import {ANIMATION_DURATION} from '../../constants';
import {Headline} from '../styles';

export const Actors = () => {
  return (
    <Animated.View
      exiting={FadeOut}
      entering={FadeIn.delay(ANIMATION_DURATION * 2)}
      layout={LinearTransition}>
      <Headline variant={TypographyVariant.SUBTITLE_LARGE}>Actors</Headline>
      <Typography variant={TypographyVariant.BODY_MEDIUM}>
        Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Kate
        Winslet
      </Typography>
    </Animated.View>
  );
};
