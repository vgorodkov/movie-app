import {expect} from 'detox';

import {SignUpFormInputs} from '@/forms/AuthForm/types';

import {byId, byText} from '../utils';

export const fillInputs = async ({
  name,
  surname,
  email,
  password,
}: SignUpFormInputs) => {
  const nameInput = byId('AuthInput.name');
  const emailInput = byId('AuthInput.email');
  const passwordInput = byId('AuthInput.password');
  const surnameInput = byId('AuthInput.surname');
  await emailInput.clearText();
  await passwordInput.clearText();
  if (name) {
    await nameInput.clearText();
    await nameInput.typeText(name);
  }
  if (surname) {
    await surnameInput.clearText();
    await surnameInput.typeText(surname);
  }
  await emailInput.typeText(email);
  await passwordInput.typeText(password);
};

export const checkIfInputErrorsExist = async ({
  name,
  surname,
  email,
  password,
}: SignUpFormInputs) => {
  await expect(byText(email)).toBeVisible();
  if (name) {
    await expect(byText(name)).toBeVisible();
  }
  if (surname) {
    await expect(byText(surname)).toBeVisible();
  }
  await expect(byText(password)).toBeVisible();
};

export const signIn = async () => {
  const signInBtn = byId('SignInButton');
  await expect(signInBtn).toBeVisible();
  await signInBtn.tap();
  const authSubmitBtn = byId('AuthSubmitBtn');
  await fillInputs({email: 'email@gmail.com', password: '12345678!!!'});
  await authSubmitBtn.tap();
};
