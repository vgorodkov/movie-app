import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {ToggleButton} from '@/components/UI';
import {ThemeVariant} from '@/constants/theme';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectTheme} from '@/store/slices/themeSlice';
import {selectedThemeSelector} from '@/store/slices/themeSlice/selectors';

export const ToggleThemeBtn = () => {
  const {t} = useTranslation('profile');
  const dispatch = useAppDispatch();
  const isDarkTheme =
    useAppSelector(selectedThemeSelector) === ThemeVariant.DARK;

  const onLeftSidePress = () => {
    AsyncStorage.setItem('theme', ThemeVariant.LIGHT);
    dispatch(selectTheme(ThemeVariant.LIGHT));
  };

  const onRightSidePress = () => {
    AsyncStorage.setItem('theme', ThemeVariant.DARK);
    dispatch(selectTheme(ThemeVariant.DARK));
  };

  return (
    <ToggleButton
      initialSide={isDarkTheme ? 'right' : 'left'}
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
