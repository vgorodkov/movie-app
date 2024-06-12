import auth from '@react-native-firebase/auth';
import i18next from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {ToggleThemeBtn} from '@/components/ToggleThemeBtn';
import {Button} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer, FullscreenContainer} from '@/styled/FlexContainer';

export const ProfileScreen = () => {
  const {t} = useTranslation('profile');
  const onLogOutBtnPress = () => {
    auth().signOut();
  };

  const onEditBtnPress = () => {
    i18next.changeLanguage('ru');
  };

  const onSettingsBtnPress = () => {
    i18next.changeLanguage('en');
  };

  const onPrivatePolicyBtnPress = () => {};

  return (
    <FullscreenContainer gap={spacing.l} alignItems="center">
      <FlexContainer gap={spacing.m}>
        <Button onPress={onEditBtnPress}>{t('EditBtn')}</Button>
        <Button onPress={onSettingsBtnPress}>{t('SettingsBtn')}</Button>
        <Button onPress={onPrivatePolicyBtnPress}>
          {t('PrivatePolicyBtn')}
        </Button>
        <Button onPress={onLogOutBtnPress}>{t('LogOutBtn')}</Button>
      </FlexContainer>
      <ToggleThemeBtn />
    </FullscreenContainer>
  );
};
