import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import {ANIMATION_DURATION} from '@/components/TopMovie/TopMovieBottomSheet/constants';
import {Typography, TypographyVariant} from '@/components/UI';
import {BackdropGradient} from '@/components/UI/BackdropGradient';

import {Headline} from '../styles';
import {DESCIPTION_HEIGHT_LIMIT} from './constants';
import {AnimatedDesciprtion, AnimatedDesciprtionContainer} from './styles';
import {AboutProps} from './types';

export const About = ({plotSummary}: AboutProps) => {
  const {t} = useTranslation('top');
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

  const desicrptionMaxHeight = useDerivedValue(() => {
    return isDescriptionShown ? undefined : DESCIPTION_HEIGHT_LIMIT;
  }, [isDescriptionShown]);

  const animatedDescriptionStyle = useAnimatedStyle(() => {
    return {
      maxHeight: desicrptionMaxHeight.value,
    };
  });

  const toggleDescription = () => {
    setIsDescriptionShown(prev => !prev);
  };

  return (
    <Animated.View
      testID="TopMovieAbout"
      exiting={FadeOut}
      entering={FadeIn.delay(ANIMATION_DURATION)}>
      <Headline variant={TypographyVariant.SUBTITLE_LARGE}>
        {t('About')}
      </Headline>
      <AnimatedDesciprtionContainer
        layout={LinearTransition}
        style={animatedDescriptionStyle}>
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
          {isDescriptionShown ? t('Read less') : t('Read more')}
        </Typography>
      </Animated.View>
    </Animated.View>
  );
};
