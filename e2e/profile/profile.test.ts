import {expect} from 'detox';

import {BottomTabRoutes} from '@/constants/routes';

import {signIn} from '../auth/utils';
import {navigateViaBottomTabsWithCheck} from '../navigation/utils';
import {byId} from '../utils';

describe('Profile', () => {
  beforeAll(async () => {
    await device.launchApp();
    await signIn();
    await navigateViaBottomTabsWithCheck(BottomTabRoutes.PROFILE_NAV);
  });

  it('should open edit profile modal', async () => {
    const editProfileBtn = byId('ProfileAction.EditBtn');
    await editProfileBtn.tap();
  });

  it('should edit profile name and surname', async () => {
    const nameInput = byId('AuthInput.name');
    const surnameInput = byId('AuthInput.surname');
    const passwordInput = byId('AuthInput.currentPassword');
    const newPasswordInput = byId('AuthInput.newPassword');
    const editProfileSubmitBtn = byId('EditProfileSubmitBtn');

    const profileName = byId('ProfileName');

    await nameInput.typeText('Name');
    await surnameInput.typeText('Surname');
    await passwordInput.typeText('12345678');
    await newPasswordInput.typeText('12345678');

    await editProfileSubmitBtn.tap();
    await expect(profileName).toHaveText('Name Surname');
  });
});
