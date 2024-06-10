import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Image} from 'react-native';

import {Typography, TypographyVariant} from '@/components/UI';
import {StarIcon} from '@/components/UI/StarIcon';
import {RootRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {TopFilmMoreButton} from './styles';
import {TopMovieProps} from './types';

export const TopMovie = memo(
  ({title, rank, rating, image, year, genre, id, imdbid}: TopMovieProps) => {
    const navigation = useNavigation();

    const onMoreBtnPress = () => {
      navigation.navigate(RootRoutes.TOP_MOVIE_RATING, {
        movieId: id,
        imdbid,
      });
    };

    return (
      <FlexContainer flexFlow="row nowrap" gap={spacing.sm}>
        <Image style={{flex: 0.25}} source={{uri: image}} />
        <FlexContainer flex={0.75} justifyContent="space-between">
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
              {rating} <StarIcon />
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
