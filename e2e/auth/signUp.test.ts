import {expect} from 'detox';

import {byId} from '../utils';
import {checkIfInputErrorsExist, fillInputs} from './utils';

describe('SignUp', () => {
  beforeAll(async () => {
    await device.launchApp();

    const accountSignUpBtn = byId('AuthVariant.account');
    await expect(accountSignUpBtn).toBeVisible();
    await accountSignUpBtn.tap();
  });

  it('should handle empty inputs', async () => {
    const authSubmitBtn = byId('AuthSubmitBtn');

    await authSubmitBtn.tap();

    await checkIfInputErrorsExist({
      email: 'Email is required',
      name: 'Name is required',
      surname: 'Surname is required',
      password: 'Password is required',
    });
  });
  it('should handle invalid inputs', async () => {
    const authSubmitBtn = byId('AuthSubmitBtn');

    await fillInputs({
      name: 'n',
      surname: 's',
      email: 'mail',
      password: '123',
    });

    await authSubmitBtn.tap();

    await checkIfInputErrorsExist({
      email: 'Invalid email',
      name: 'Name must be at least 2 characters',
      surname: 'Password must be at least 6 characters',
      password: 'Surname must be at least 2 characters',
    });
  });
  it('should handle correct inputs', async () => {
    const authSubmitBtn = byId('AuthSubmitBtn');
    const homeScreen = byId('HomeScreen');

    await fillInputs({
      name: 'name',
      surname: 'surname',
      email: 'mail@mail.ru',
      password: '12345678',
    });

    await authSubmitBtn.tap();
    await expect(homeScreen).toBeVisible();
  });
});
