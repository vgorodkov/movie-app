import {mockTop100Movies} from '@/data/top100Mock';
import {useImageColors} from '@/hooks/useImageColors';

import {GradientContainer} from './GradientContainer';
import {PosterImage} from './PosterImage';

export const GradientMoviePoster = ({movieId}: {movieId: string}) => {
  const img = mockTop100Movies.find(movie => movie.id === movieId)?.big_image;

  const {colors, isLoading} = useImageColors(img!);

  if (isLoading || !colors) {
    return null;
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
