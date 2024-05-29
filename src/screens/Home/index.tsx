import {MovieCarousel} from '@/components/MovieCarousel';
import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {VideoPlayer} from '@/components/VideoPlayer';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {ComingSoonContainer, MovieCarouselContainer} from './styles';

const MOCK_DATA = [
  {
    id: 1,
    title: 'Spider-Man:No Way Home',
    tags: ['13+', 'Action', 'IMAX'],
    img: require('@/assets/imgs/movie_2.png'),
  },
  {
    id: 2,
    title: 'Spider-Man:No Way Home',
    tags: ['13+', 'Action', 'IMAX'],
    img: require('@/assets/imgs/movie_2.png'),
  },
  {
    id: 3,
    title: 'Spider-Man:No Way Home',
    tags: ['13+', 'Action', 'IMAX'],
    img: require('@/assets/imgs/movie_3.png'),
  },
  {
    id: 4,
    title: 'Spider-Man:No Way Home',
    tags: ['13+', 'Action', 'IMAX'],
    img: require('@/assets/imgs/movie_3.png'),
  },
  {
    id: 5,
    title: 'Spider-Man:No Way Home',
    tags: ['13+', 'Action', 'IMAX'],
    img: require('@/assets/imgs/movie_3.png'),
  },
];

export const HomeScreen = () => {
  return (
    <FullscreenContainer gap="16px">
      <ComingSoonContainer>
        <Typography
          alightSelf="flex-start"
          variant={TypographyVariant.SUBTITLE_LARGE}>
          Coming Soon
        </Typography>
        <VideoPlayer />
      </ComingSoonContainer>
      <MovieCarouselContainer>
        <MovieCarousel data={MOCK_DATA} title="Now Showing" />
      </MovieCarouselContainer>
    </FullscreenContainer>
  );
};
