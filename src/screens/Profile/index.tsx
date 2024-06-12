import auth from '@react-native-firebase/auth';
import i18next from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {ToggleThemeBtn} from '@/components/ToggleThemeBtn';
import {Button, SelectDropdown} from '@/components/UI';
import {languages} from '@/constants/languages';
import {spacing} from '@/constants/spacing';
import {FlexContainer, FullscreenContainer} from '@/styled/FlexContainer';

export const ProfileScreen = () => {
  const {t} = useTranslation('profile');

  const onLogOutBtnPress = () => {
    auth().signOut();
  };

  const onEditBtnPress = () => {};

  const onSettingsBtnPress = () => {};

  const onPrivatePolicyBtnPress = () => {};

  const onDropdownSelect = (optionCode: string) => {
    i18next.changeLanguage(optionCode);
  };

  return (
    <FullscreenContainer gap={spacing.l}>
      <FlexContainer gap={spacing.m}>
        <Button onPress={onEditBtnPress}>{t('EditBtn')}</Button>
        <Button onPress={onSettingsBtnPress}>{t('SettingsBtn')}</Button>
        <Button onPress={onPrivatePolicyBtnPress}>
          {t('PrivatePolicyBtn')}
        </Button>
        <Button onPress={onLogOutBtnPress}>{t('LogOutBtn')}</Button>
      </FlexContainer>
      <ToggleThemeBtn />
      <SelectDropdown
        initialOption={languages[0]}
        label={t('Select language')}
        data={languages}
        onSelect={onDropdownSelect}
      />
    </FullscreenContainer>
  );
};
