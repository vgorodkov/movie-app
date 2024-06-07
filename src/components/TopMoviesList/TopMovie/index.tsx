import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Image} from 'react-native';

import {Typography, TypographyVariant} from '@/components/UI';
import {RootRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {MOVIE_HEIGHT, MOVIE_WIDTH} from '../constants';
import {StarIcon, TopFilmMoreButton} from './styles';
import {TopMovieProps} from './types';

export const TopMovie = memo(
  ({title, rank, rating, image, year, genre}: TopMovieProps) => {
    const navigation = useNavigation();

    const onMoreBtnPress = () => {
      navigation.navigate(RootRoutes.TOP_MOVIE_RATING);
    };

    return (
      <FlexContainer flexFlow="row nowrap" gap={spacing.sm}>
        <Image
          style={{height: MOVIE_HEIGHT, width: MOVIE_WIDTH}}
          source={{uri: image}}
        />
        <FlexContainer justifyContent="space-between">
          <FlexContainer gap={spacing.xs}>
            <Typography
              variant={TypographyVariant.LABEL_LARGE}
              alightSelf="flex-start">
              {rank}. {title} ({year})
            </Typography>
            <Typography
              variant={TypographyVariant.BODY_MEDIUM}
              alightSelf="flex-start">
              Genre: {genre.join(', ')}
            </Typography>
            <Typography
              variant={TypographyVariant.BODY_MEDIUM}
              alightSelf="flex-start">
              Authors: Ilya, Stanislav, Marina
            </Typography>
            <Typography
              alightSelf="flex-start"
              variant={TypographyVariant.LABEL_LARGE}>
              {rating} <StarIcon>&#9733;</StarIcon>
            </Typography>
          </FlexContainer>
          <TopFilmMoreButton onPress={onMoreBtnPress}>
            <Typography variant={TypographyVariant.LABEL_MEDIUM}>
              More
            </Typography>
          </TopFilmMoreButton>
        </FlexContainer>
      </FlexContainer>
    );
  },
);
