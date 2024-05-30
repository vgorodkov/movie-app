import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import {MovieGenreRow} from '@/components/MovieGenreRow';
import {Typography, TypographyVariant} from '@/components/UI';
import {ProtectedRoutes} from '@/constants/routes';

import {MOVIE_ITEM_WIDTH, SIDECARD_WIDTH} from '../constants';
import {DUMMY_URI} from './constants';
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

  const animatedImageStyle = useAnimatedStyle(() => {
    const outputScaleRange = [0.8, 1, 0.8];
    return {
      transform: [
        {
          scale: interpolate(
            scrollOffset.value,
            inputOffsetRange,
            outputScaleRange,
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const movieInformationOpacity = useDerivedValue(() => {
    const opacityOutputRange = [0, 1, 0];

    return interpolate(
      scrollOffset.value,
      inputOffsetRange,
      opacityOutputRange,
      Extrapolation.CLAMP,
    );
  }, [scrollOffset]);

  const onMovieItemPress = () => {
    navigation.navigate(ProtectedRoutes.MOVIE_DETAILS, {
      imageurl: imageurl[0] || DUMMY_URI,
      title,
      genre,
      synopsis,
      imdbid,
    });
  };

  return (
    <Pressable onPress={onMovieItemPress}>
      <MovieItemContainer
        marginLeft={isFirst ? SIDECARD_WIDTH : 0}
        marginRight={isLast ? SIDECARD_WIDTH : 0}
        width={MOVIE_ITEM_WIDTH}
        style={animatedImageStyle}>
        <MovieImage
          source={{
            uri: imageurl[0] || DUMMY_URI,
          }}
        />
        <AnimatedFlexBox gap={8} style={{opacity: movieInformationOpacity}}>
          <Typography variant={TypographyVariant.LABEL_LARGE}>
            {title}
          </Typography>
          <MovieGenreRow genre={genre} />
        </AnimatedFlexBox>
      </MovieItemContainer>
    </Pressable>
  );
};
