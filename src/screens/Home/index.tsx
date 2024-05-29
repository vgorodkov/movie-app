import {MovieCarousel} from '@/components/MovieCarousel';
import {MovieGenreList} from '@/components/MovieGenreList';
import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {VideoPlayer} from '@/components/VideoPlayer';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {ComingSoonContainer, MovieCarouselContainer} from './styles';

export const HomeScreen = () => {
  return (
    <FullscreenContainer>
      <ComingSoonContainer>
        <Typography
          alightSelf="flex-start"
          variant={TypographyVariant.SUBTITLE_LARGE}>
          Coming Soon
        </Typography>
        <VideoPlayer />
      </ComingSoonContainer>
      <MovieGenreList />
      <MovieCarouselContainer>
        <MovieCarousel title="Now Showing" />
      </MovieCarouselContainer>
    </FullscreenContainer>
  );
};
