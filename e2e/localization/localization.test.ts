import {BottomTabRoutes} from '@/constants/routes';

import {signIn} from '../auth/utils';
import {navigateViaBottomTabsWithCheck} from '../navigation/utils';
import {byId, expectBitmapsToBeEqual, setDemoMode} from '../utils';

describe('En Localization', () => {
  const homeEnPath = './e2e/localization/assets/home_en.png';
  const ticketsEn = './e2e/localization/assets/tickets_en.png';
  const profileEn = './e2e/localization/assets/profile_en.png';

  beforeAll(async () => {
    await setDemoMode();
    await device.launchApp();
    await signIn();
  });

  it('should match HomeScreen with en screenshot', async () => {
    const screenshotPath = await device.takeScreenshot('Home');
    expectBitmapsToBeEqual(screenshotPath, homeEnPath);
  });

  it('should match TicketsScreen with en screenshot', async () => {
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.TICKETS);

    const screenshotPath = await device.takeScreenshot('Tickets');
    expectBitmapsToBeEqual(screenshotPath, ticketsEn);
  });

  it('should match ProfileScreen with en screenshot', async () => {
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.PROFILE_NAV);

    const screenshotPath = await device.takeScreenshot('Profile');
    expectBitmapsToBeEqual(screenshotPath, profileEn);
  });
});

describe('RU Localization', () => {
  const homeRu = './e2e/localization/assets/home_ru.png';
  const ticketsRu = './e2e/localization/assets/tickets_ru.png';
  const profileRu = './e2e/localization/assets/profile_ru.png';

  beforeAll(async () => {
    const openSettringsBtn = byId('ProfileAction.SettingsBtn');
    const dropdownSelect = byId('DropdownSelect');
    const ruOption = byId('DropdownOption.ru');
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.PROFILE_NAV);
    await openSettringsBtn.tap();
    await dropdownSelect.tap();
    await ruOption.tap();
  });

  it('should match HomeScreen with en screenshot', async () => {
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.HOME);

    const screenshotPath = await device.takeScreenshot('Home');
    expectBitmapsToBeEqual(screenshotPath, homeRu);
  });

  it('should match TicketsScreen with en screenshot', async () => {
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.TICKETS);

    const screenshotPath = await device.takeScreenshot('Tickets');
    expectBitmapsToBeEqual(screenshotPath, ticketsRu);
  });

  it('should match ProfileScreen with en screenshot', async () => {
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.PROFILE_NAV);

    const screenshotPath = await device.takeScreenshot('Profile');
    expectBitmapsToBeEqual(screenshotPath, profileRu);
  });
});
