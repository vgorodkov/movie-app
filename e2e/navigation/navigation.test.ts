import {expect} from 'detox';

import {BottomTabRoutes, TopTabRoutes} from '@/constants/routes';

import {signIn} from '../auth/utils';
import {byId} from '../utils';

describe('Navigation', () => {
  beforeAll(async () => {
    await device.launchApp();
    await signIn();
  });

  it('should correctly navigate using BottomTabsNavigator', async () => {
    const homeTab = byId(`BottomTab.${BottomTabRoutes.HOME}`);
    const topMoviesTab = byId(`BottomTab.${BottomTabRoutes.TOP_MOVIES_NAV}`);
    const ticketsTab = byId(`BottomTab.${BottomTabRoutes.TICKETS}`);
    const profileTab = byId(`BottomTab.${BottomTabRoutes.PROFILE_NAV}`);

    const homeScreen = byId(BottomTabRoutes.HOME);
    const profileScreen = byId(BottomTabRoutes.PROFILE_NAV);
    const upcomingTicketsScreen = byId(TopTabRoutes.UPCOMING);
    const topMoviesScreen = byId(BottomTabRoutes.TOP_MOVIES_NAV);

    await expect(homeScreen).toBeVisible();

    await profileTab.tap();
    await expect(profileScreen).toBeVisible();

    await topMoviesTab.tap();
    await expect(topMoviesScreen).toBeVisible();

    await ticketsTab.tap();
    await expect(upcomingTicketsScreen).toBeVisible();

    await homeTab.tap();
    await expect(homeScreen).toBeVisible();
  });

  it('should correctly navigate using TopTabNavigation inside Tickets screen', async () => {
    const ticketsBottomTab = byId(`BottomTab.${BottomTabRoutes.TICKETS}`);

    const upcomingTicketsTab = byId(`TopTab.${TopTabRoutes.UPCOMING}`);
    const missedTicketsTab = byId(`TopTab.${TopTabRoutes.MISSED}`);
    const pastTicketsTab = byId(`TopTab.${TopTabRoutes.PAST}`);
    const upcomingTicketsScreen = byId(TopTabRoutes.UPCOMING);
    const missedTicketsScreen = byId(TopTabRoutes.MISSED);
    const pastTicketsScreen = byId(TopTabRoutes.PAST);

    await ticketsBottomTab.tap();
    await expect(upcomingTicketsScreen).toBeVisible();

    await missedTicketsTab.tap();
    await expect(missedTicketsScreen).toBeVisible();

    await pastTicketsTab.tap();
    await expect(pastTicketsScreen).toBeVisible();

    await upcomingTicketsTab.tap();
    await expect(upcomingTicketsScreen).toBeVisible();
  });
});
