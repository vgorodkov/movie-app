import {AndroidImageColors} from 'react-native-image-colors/build/types';

import {ErrorFallback} from '@/components/UI';
import {LoadingFallback} from '@/components/UI/LoadingFallback';
import {useImageColors} from '@/hooks/useImageColors';
import {useGetTop100MovieByIdQuery} from '@/store/apiSlices/imbdApi';
import {FlexContainer} from '@/styled/FlexContainer';

import {GradientContainer, PosterImage} from './styles';
import {TopMovieGradientPosterProps} from './types';

export const TopMovieGradientPoster = ({
  movieId,
}: TopMovieGradientPosterProps) => {
  const {
    data,
    isLoading: isTop100Loading,
    isError,
  } = useGetTop100MovieByIdQuery(movieId);
  const {colors, isLoading} = useImageColors(data?.big_image) as {
    colors: AndroidImageColors;
    isLoading: boolean;
  };

  if (isError) {
    return <ErrorFallback error="Error while loading movie poster" />;
  }

  if (isLoading || isTop100Loading) {
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
          uri: data?.big_image,
        }}
      />
    </GradientContainer>
  );
};
