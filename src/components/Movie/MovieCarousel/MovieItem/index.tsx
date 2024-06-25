import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {
  Extrapolation,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

import {MovieGenreRow} from '@/components/Movie/MovieGenreRow';
import {Typography, TypographyVariant} from '@/components/UI';
import {RootRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';

import {MOVIE_ITEM_WIDTH, SIDECARD_WIDTH} from '../constants';
import {DUMMY_URI, OPACITY_OUTPUT_RANGE, SCALE_OUTPUT_RANGE} from './constants';
import {AnimatedFlexBox, MovieImage, MovieItemContainer} from './styles';
import {MovieItemProps} from './types';

export const MovieItem = ({
  scrollOffset,
  index,
  title,
  genre,
  imageurl,
  isLast,
  isFirst,
  synopsis,
  imdbid,
}: MovieItemProps) => {
  const navigation = useNavigation();

  const inputOffsetRange = [
    (index - 1) * MOVIE_ITEM_WIDTH,
    index * MOVIE_ITEM_WIDTH,
    (index + 1) * MOVIE_ITEM_WIDTH,
  ];

  const movieItemScale = useDerivedValue(() => {
    return interpolate(
      scrollOffset.value,
      inputOffsetRange,
      SCALE_OUTPUT_RANGE,
      Extrapolation.CLAMP,
    );
  });

  const movieInformationOpacity = useDerivedValue(() => {
    return interpolate(
      scrollOffset.value,
      inputOffsetRange,
      OPACITY_OUTPUT_RANGE,
      Extrapolation.CLAMP,
    );
  }, [scrollOffset]);

  const onMovieItemPress = () => {
    navigation.navigate(RootRoutes.MOVIE_DETAILS, {
      imageurl: imageurl[0] || DUMMY_URI,
      title,
      genre,
      synopsis,
      imdbid,
    });
  };

  return (
    <Pressable onPress={onMovieItemPress} testID={`MovieCarouselItem.${index}`}>
      <MovieItemContainer
        marginLeft={isFirst ? SIDECARD_WIDTH : 0}
        marginRight={isLast ? SIDECARD_WIDTH : 0}
        width={MOVIE_ITEM_WIDTH}
        style={{transform: [{scale: movieItemScale}]}}>
        <MovieImage
          source={{
            uri: imageurl[0] || DUMMY_URI,
          }}
        />
        <AnimatedFlexBox
          gap={spacing.s}
          style={{opacity: movieInformationOpacity}}>
          <Typography
            alightSelf="center"
            variant={TypographyVariant.LABEL_LARGE}>
            {title}
          </Typography>
          <MovieGenreRow genre={genre} />
        </AnimatedFlexBox>
      </MovieItemContainer>
    </Pressable>
  );
};
