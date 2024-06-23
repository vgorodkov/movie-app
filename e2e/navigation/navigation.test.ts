import {BottomTabRoutes, TopTabRoutes} from '@/constants/routes';

import {signIn} from '../auth/utils';
import {
  navigateViaBottomTabsWithCheck,
  navigateViaTopTabsWithCheck,
} from './utils';

describe('Navigation', () => {
  beforeAll(async () => {
    await device.launchApp();
    await signIn();
  });

  it('should correctly navigate using BottomTabsNavigator', async () => {
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.PROFILE_NAV);
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.TOP_MOVIES_NAV);
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.TICKETS);
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.HOME);
  });

  it('should correctly navigate using TopTabNavigation inside Tickets screen', async () => {
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.TICKETS);

    await navigateViaTopTabsWithCheck(TopTabRoutes.MISSED);
    await navigateViaTopTabsWithCheck(TopTabRoutes.PAST);
    await navigateViaTopTabsWithCheck(TopTabRoutes.UPCOMING);
  });
});
