import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation('top');
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

  const desicrptionMaxHeight = useDerivedValue(() => {
    if (!isDescriptionShown) {
      return DESCIPTION_HEIGHT_LIMIT;
    }
    return 100000000;
  }, [isDescriptionShown]);

  const toggleDescription = () => {
    setIsDescriptionShown(prev => !prev);
  };

  return (
    <Animated.View
      exiting={FadeOut}
      entering={FadeIn.delay(ANIMATION_DURATION)}>
      <Headline variant={TypographyVariant.SUBTITLE_LARGE}>
        {t('About')}
      </Headline>
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
          {isDescriptionShown ? t('Read less') : t('Read more')}
        </Typography>
      </Animated.View>
    </Animated.View>
  );
};
