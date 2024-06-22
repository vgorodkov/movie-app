import {BottomTabRoutes} from '@/constants/routes';

import {signIn} from '../auth/utils';
import {byId, expectBitmapsToBeEqual, setDemoMode} from '../utils';

describe('Dark Theme', () => {
  const homeDark = './e2e/localization/assets/home_en.png';
  const ticketsDark = './e2e/localization/assets/tickets_en.png';
  const profileDark = './e2e/localization/assets/profile_en.png';

  beforeAll(async () => {
    await setDemoMode();
    await device.launchApp();
    await signIn();
  });

  it('should match HomeScreen with en screenshot', async () => {
    const screenshotPath = await device.takeScreenshot('Home');
    expectBitmapsToBeEqual(screenshotPath, homeDark);
  });

  it('should match TicketsScreen with en screenshot', async () => {
    const ticketsTab = byId(`BottomTab.${BottomTabRoutes.TICKETS}`);
    await ticketsTab.tap();

    const screenshotPath = await device.takeScreenshot('Tickets');
    expectBitmapsToBeEqual(screenshotPath, ticketsDark);
  });

  it('should match ProfileScreen with en screenshot', async () => {
    const ticketsTab = byId(`BottomTab.${BottomTabRoutes.PROFILE_NAV}`);
    await ticketsTab.tap();

    const screenshotPath = await device.takeScreenshot('Profile');
    expectBitmapsToBeEqual(screenshotPath, profileDark);
  });
});

describe('Light Theme', () => {
  const homeLight = './e2e/theme/assets/home_light.png';
  const ticketsLight = './e2e/theme/assets/tickets_light.png';
  const profileLight = './e2e/theme/assets/profile_light.png';

  beforeAll(async () => {
    const profileTab = byId(`BottomTab.${BottomTabRoutes.PROFILE_NAV}`);
    const lightTheme = byId('ToggeButtonLeft');
    await profileTab.tap();
    await lightTheme.tap();
  });

  it('should match HomeScreen with en screenshot', async () => {
    const homeTab = byId(`BottomTab.${BottomTabRoutes.HOME}`);
    await homeTab.tap();
    const screenshotPath = await device.takeScreenshot('Home');
    expectBitmapsToBeEqual(screenshotPath, homeLight);
  });

  it('should match TicketsScreen with en screenshot', async () => {
    const ticketsTab = byId(`BottomTab.${BottomTabRoutes.TICKETS}`);
    await ticketsTab.tap();

    const screenshotPath = await device.takeScreenshot('Tickets');
    expectBitmapsToBeEqual(screenshotPath, ticketsLight);
  });

  it('should match ProfileScreen with en screenshot', async () => {
    const profileTab = byId(`BottomTab.${BottomTabRoutes.PROFILE_NAV}`);
    await profileTab.tap();

    const screenshotPath = await device.takeScreenshot('Profile');
    expectBitmapsToBeEqual(screenshotPath, profileLight);
  });
});
