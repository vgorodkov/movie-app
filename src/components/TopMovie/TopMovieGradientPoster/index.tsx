import {AndroidImageColors} from 'react-native-image-colors/build/types';

import {LoadingFallback} from '@/components/UI/LoadingFallback';
import {mockTop100Movies} from '@/data/top100Mock';
import {useImageColors} from '@/hooks/useImageColors';
import {FlexContainer} from '@/styled/FlexContainer';

import {GradientContainer, PosterImage} from './styles';

export const TopMovieGradientPoster = ({movieId}: {movieId: string}) => {
  const img = mockTop100Movies.find(movie => movie.id === movieId)?.big_image;
  const {colors, isLoading} = useImageColors(img!) as {
    colors: AndroidImageColors;
    isLoading: boolean;
  };

  if (isLoading) {
    return (
      <FlexContainer flex={0.7}>
        <LoadingFallback />
      </FlexContainer>
    );
  }
  return (
    <GradientContainer colors={[colors.muted, colors.lightMuted]}>
      <PosterImage
        source={{
          uri: img,
        }}
      />
    </GradientContainer>
  );
};
