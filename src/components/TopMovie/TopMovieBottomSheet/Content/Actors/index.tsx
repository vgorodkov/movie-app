import React from 'react';
import {useTranslation} from 'react-i18next';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import {Typography, TypographyVariant} from '@/components/UI';

import {ANIMATION_DURATION} from '../../constants';
import {Headline} from '../styles';

export const Actors = () => {
  const {t} = useTranslation('top');
  return (
    <Animated.View
      testID="TopMovieActors"
      exiting={FadeOut}
      entering={FadeIn.delay(ANIMATION_DURATION * 2)}
      layout={LinearTransition}>
      <Headline variant={TypographyVariant.SUBTITLE_LARGE}>
        {t('Actors')}
      </Headline>
      <Typography variant={TypographyVariant.BODY_MEDIUM}>
        Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Kate
        Winslet
      </Typography>
    </Animated.View>
  );
};
