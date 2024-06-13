import React from 'react';
import {useTranslation} from 'react-i18next';

import {ToggleButton} from '@/components/UI';
import {ThemeVariant} from '@/constants/theme';
import {useAppDispatch} from '@/store/hooks';
import {selectTheme} from '@/store/slices/themeSlice';

export const ToggleThemeBtn = () => {
  const {t} = useTranslation('profile');
  const dispatch = useAppDispatch();

  const onLeftSidePress = () => {
    dispatch(selectTheme(ThemeVariant.LIGHT));
  };

  const onRightSidePress = () => {
    dispatch(selectTheme(ThemeVariant.DARK));
  };

  return (
    <ToggleButton
      left={{
        label: t('LightTheme'),
        onPress: onLeftSidePress,
      }}
      right={{
        label: t('DarkTheme'),
        onPress: onRightSidePress,
      }}
    />
  );
};
