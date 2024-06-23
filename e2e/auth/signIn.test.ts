import {expect} from 'detox';

import {BottomTabRoutes} from '@/constants/routes';

import {byId} from '../utils';
import {checkIfInputErrorsExist, fillInputs} from './utils';

describe('SignIn', () => {
  beforeAll(async () => {
    await device.launchApp();
    const signInBtn = byId('SignInButton');
    await expect(signInBtn).toBeVisible();
    await signInBtn.tap();
  });

  it('should handle empty inputs', async () => {
    const authSubmitBtn = byId('AuthSubmitBtn');
    await authSubmitBtn.tap();
    await checkIfInputErrorsExist({
      email: 'Email is required',
      password: 'Password is required',
    });
  });

  it('should handle invalid inputs', async () => {
    const authSubmitBtn = byId('AuthSubmitBtn');
    await fillInputs({email: 'email', password: '1234'});
    await authSubmitBtn.tap();
    await checkIfInputErrorsExist({
      email: 'Invalid email',
      password: 'Password must be at least 6 characters',
    });
  });

  it('should handle correct inputs', async () => {
    const authSubmitBtn = byId('AuthSubmitBtn');
    const homeScreen = byId(BottomTabRoutes.HOME);
    await fillInputs({email: 'email@gmail.com', password: '12345678!!!'});
    await authSubmitBtn.tap();
    await expect(homeScreen).toBeVisible();
  });
});
