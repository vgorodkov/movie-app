import {useTranslation} from 'react-i18next';

import {AvaibleGenreList} from '@/components/AvaibleGenreList';
import {MovieCarousel} from '@/components/Movie/MovieCarousel';
import {Typography, TypographyVariant} from '@/components/UI';
import {VideoPlayer} from '@/components/VideoPlayer';
import {spacing} from '@/constants/spacing';
import {FullscreenContainer} from '@/styled/FlexContainer';

import {ComingSoonContainer, MovieCarouselContainer} from './styles';

export const HomeScreen = () => {
  const {t} = useTranslation('home');
  return (
    <FullscreenContainer padding={`${spacing.m}px 0`}>
      <ComingSoonContainer>
        <Typography
          alightSelf="flex-start"
          variant={TypographyVariant.SUBTITLE_LARGE}>
          {t('CommingSoonLabel')}
        </Typography>
        <VideoPlayer />
      </ComingSoonContainer>
      <AvaibleGenreList />
      <MovieCarouselContainer>
        <MovieCarousel title={t('NowShowingLabel')} />
      </MovieCarouselContainer>
    </FullscreenContainer>
  );
};
