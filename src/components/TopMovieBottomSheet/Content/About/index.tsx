import React, {useState} from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useDerivedValue,
} from 'react-native-reanimated';

import {ANIMATION_DURATION} from '@/components/TopMovieBottomSheet/constants';
import {Typography, TypographyVariant} from '@/components/UI';
import {BackdropGradient} from '@/components/UI/BackdropGradient';

import {Headline} from '../styles';
import {DESCIPTION_HEIGHT_LIMIT} from './constants';
import {AnimatedDesciprtion, AnimatedDesciprtionContainer} from './styles';

export const About = ({plotSummary}: {plotSummary: string}) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

  const desicrptionMaxHeight = useDerivedValue(() => {
    if (isDescriptionShown) {
      return undefined;
    }
    return DESCIPTION_HEIGHT_LIMIT;
  }, [isDescriptionShown]);

  const toggleDescription = () => {
    setIsDescriptionShown(prev => !prev);
  };

  return (
    <Animated.View
      exiting={FadeOut}
      entering={FadeIn.delay(ANIMATION_DURATION)}>
      <Headline variant={TypographyVariant.SUBTITLE_LARGE}>About</Headline>
      <AnimatedDesciprtionContainer
        layout={LinearTransition}
        style={{maxHeight: desicrptionMaxHeight}}>
        {!isDescriptionShown && <BackdropGradient />}
        <AnimatedDesciprtion layout={LinearTransition}>
          {plotSummary}
        </AnimatedDesciprtion>
      </AnimatedDesciprtionContainer>
      <Animated.View layout={LinearTransition}>
        <Typography
          onPress={toggleDescription}
          textDecoration="underline"
          variant={TypographyVariant.LABEL_MEDIUM}
          alightSelf="flex-end">
          {isDescriptionShown ? 'Read less' : 'Read more'}
        </Typography>
      </Animated.View>
    </Animated.View>
  );
};
