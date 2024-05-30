import {AvaibleGenreList} from '@/components/AvaibleGenreList';
import {MovieCarousel} from '@/components/MovieCarousel';
import {Typography, TypographyVariant} from '@/components/UI';
import {VideoPlayer} from '@/components/VideoPlayer';
import {spacing} from '@/constants/spacing';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {ComingSoonContainer, MovieCarouselContainer} from './styles';

export const HomeScreen = () => {
  return (
    <FullscreenContainer padding={`${spacing.m} 0`}>
      <ComingSoonContainer>
        <Typography
          alightSelf="flex-start"
          variant={TypographyVariant.SUBTITLE_LARGE}>
          Coming Soon
        </Typography>
        <VideoPlayer />
      </ComingSoonContainer>
      <AvaibleGenreList />
      <MovieCarouselContainer>
        <MovieCarousel title="Now Showing" />
      </MovieCarouselContainer>
    </FullscreenContainer>
  );
};
