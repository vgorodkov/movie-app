import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {ProtectedRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {MOVIE_ITEM_WIDTH, SIDECARD_WIDTH} from '../constants';
import {
  AnimatedFlexBox,
  MovieImage,
  MovieItemContainer,
  MovieTag,
} from './styles';
import {MovieItemProps} from './types';

const DUMMY_URI =
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9556d16312333.5691dd2255721.jpg';

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

  const navigation = useNavigation();

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
          <FlexContainer
            flexFlow="row nowrap"
            justifyContent="center"
            gap={spacing.s}>
            {genre.map(item => (
              <MovieTag key={item}>
                <Typography variant={TypographyVariant.LABEL_MEDIUM}>
                  {item}
                </Typography>
              </MovieTag>
            ))}
          </FlexContainer>
        </AnimatedFlexBox>
      </MovieItemContainer>
    </Pressable>
  );
};
