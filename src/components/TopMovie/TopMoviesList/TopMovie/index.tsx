import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';

import {Typography, TypographyVariant} from '@/components/UI';
import {StarIcon} from '@/components/UI/StarIcon';
import {RootRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {TopFilmImage, TopFilmMoreButton} from './styles';
import {TopMovieProps} from './types';

export const TopMovie = memo(
  ({title, rank, rating, image, year, genre, id, imdbid}: TopMovieProps) => {
    const {t} = useTranslation('top');
    const navigation = useNavigation();
    const theme = useTheme();
    const onMoreBtnPress = () => {
      navigation.navigate(RootRoutes.TOP_MOVIE_RATING, {
        movieId: id,
        imdbid,
      });
    };
    return (
      <FlexContainer
        testID={`TopMovie.${id}`}
        flexFlow="row nowrap"
        gap={spacing.sm}>
        <TopFilmImage source={{uri: image}} />
        <FlexContainer flex={0.75} justifyContent="space-between">
          <FlexContainer gap={spacing.xs}>
            <Typography variant={TypographyVariant.LABEL_LARGE}>
              {rank}. {title} ({year})
            </Typography>
            <Typography variant={TypographyVariant.BODY_MEDIUM}>
              Genre: {genre.join(', ')}
            </Typography>
            <Typography variant={TypographyVariant.BODY_MEDIUM}>
              Authors: Ilya, Stanislav, Marina
            </Typography>
            <Typography variant={TypographyVariant.LABEL_LARGE}>
              {rating} <StarIcon />
            </Typography>
          </FlexContainer>
          <TopFilmMoreButton
            testID={`TopMovieMoreBtn.${id}`}
            onPress={onMoreBtnPress}>
            <Typography
              color={theme.colors.onPrimary}
              variant={TypographyVariant.LABEL_MEDIUM}>
              {t('More')}
            </Typography>
          </TopFilmMoreButton>
        </FlexContainer>
      </FlexContainer>
    );
  },
);
