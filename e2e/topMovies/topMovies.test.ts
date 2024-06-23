import {expect} from 'detox';

import {BottomTabRoutes} from '@/constants/routes';

import {signIn} from '../auth/utils';
import {navigateViaBottomTabsWithCheck} from '../navigation/utils';
import {byId, byText} from '../utils';

describe('TopMovies', () => {
  beforeAll(async () => {
    await device.launchApp();
    await signIn();
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.TOP_MOVIES_NAV);
  });

  it('should render top movies list', async () => {
    const topMoviesScreen = byId(BottomTabRoutes.TOP_MOVIES_NAV);
    await expect(topMoviesScreen).toBeVisible();
    const topMoviesList = byId('TopMoviesList');
    await expect(topMoviesList).toBeVisible();
  });

  it('should filter movies using searchbar', async () => {
    const searchQuery = 'Pulp Fiction';
    const topMoviesSearchBar = byId('TopMoviesSearchBar');
    await expect(topMoviesSearchBar).toBeVisible();
    await topMoviesSearchBar.typeText(searchQuery);
    await expect(byText(searchQuery)).toBeVisible();
    await topMoviesSearchBar.clearText();
  });

  it('should open top movies filters', async () => {
    const topMoviesFiltersIcon = byId('TopMoviesFiltersIcon');
    const yearInputRange = byId('Year.RangeBar');
    const ratingInputRange = byId('Rating.RangeBar');
    const modalExitIcon = byId('ModalExitIcon');

    await topMoviesFiltersIcon.tap();
    await expect(yearInputRange).toBeVisible();
    await expect(ratingInputRange).toBeVisible();
    await modalExitIcon.tap();
  });

  it('should open top movie details', async () => {
    const firstTopMovie = byId('TopMovie.top1');
    const firstTopMovieMoreBtn = byId('TopMovieMoreBtn.top1');
    const topMoviePoster = byId('TopMoviePoster');
    await expect(firstTopMovie).toBeVisible();
    await expect(firstTopMovieMoreBtn).toBeVisible();
    await firstTopMovieMoreBtn.multiTap(2);
    await expect(topMoviePoster).toBeVisible();
  });

  it('should open bottom sheet with swipe up', async () => {
    const topMovieBottomSheetHeader = byId('TopMovieBottomSheetHeader');
    const topMovieBottomSheet = byId('TopMovieBottomSheet');
    await topMovieBottomSheetHeader.swipe('up');
    await expect(topMovieBottomSheet).toBeVisible();
  });

  it('should have video player, about, actors and reviews content', async () => {
    const videoPlayer = byId('Video');
    const about = byId('TopMovieAbout');
    const actors = byId('TopMovieActors');
    const reviews = byId('TopMovieReviewsList');
    const topMovieBottomSheet = byId('TopMovieBottomSheet');

    await expect(videoPlayer).toBeVisible();
    await expect(about).toBeVisible();
    await expect(actors).toBeVisible();
    await topMovieBottomSheet.scroll(200, 'down');
    await expect(reviews).toBeVisible();
  });

  it('should correctly scroll reviews list', async () => {
    const arrowBack = byId('TopMovieReviewsListArrowBack');
    const arrowForward = byId('TopMovieReviewsListArrowForward');
    await arrowForward.tap();
    await arrowBack.tap();
  });
});
