import React, {useRef, useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {FadeIn, FadeOut, LinearTransition} from 'react-native-reanimated';

import {PressableIcon, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {ANIMATION_DURATION} from '../../constants';
import {Headline} from '../styles';
import {REVIEW_WIDTH} from './constants';
import {ReviewsContainer} from './styles';
import {renderReviews} from './utils';

export const Reviews = ({reviews}: {reviews: string[]}) => {
  const reviewListRef = useRef<FlatList | null>(null);

  const [currentListIndex, setCurrentListIndex] = useState(0);

  const isLast = currentListIndex === reviews.length - 1;
  const isFirst = currentListIndex === 0;

  const scrollForward = () => {
    if (!isLast) {
      setCurrentListIndex(prev => prev + 1);
      reviewListRef.current?.scrollToIndex({
        animated: true,
        index: currentListIndex + 1,
      });
    }
  };

  const scrollBackward = () => {
    if (!isFirst) {
      setCurrentListIndex(prev => prev - 1);
      reviewListRef.current?.scrollToIndex({
        animated: true,
        index: currentListIndex - 1,
      });
    }
  };

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / REVIEW_WIDTH);
    setCurrentListIndex(index);
  };

  return (
    <ReviewsContainer
      entering={FadeIn.delay(ANIMATION_DURATION * 3)}
      exiting={FadeOut}
      layout={LinearTransition}>
      <Headline variant={TypographyVariant.SUBTITLE_LARGE}>Reviews</Headline>
      <FlexContainer flexFlow="row nowrap" gap={spacing.s}>
        <PressableIcon
          disabled={isFirst}
          width={20}
          height={15}
          icon={require('@/assets/icons/arrow-prev.png')}
          onPress={scrollBackward}
        />
        <FlexContainer flex={1}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onMomentumScrollEnd}
            data={reviews}
            renderItem={renderReviews}
            horizontal
            pagingEnabled
            ref={reviewListRef}
          />
        </FlexContainer>
        <PressableIcon
          disabled={isLast}
          width={20}
          height={15}
          icon={require('@/assets/icons/arrow-next.png')}
          onPress={scrollForward}
        />
      </FlexContainer>
    </ReviewsContainer>
  );
};
