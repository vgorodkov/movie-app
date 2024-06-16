import {NavigationContainer} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {ThemeVariant} from '@/constants/theme';
import {useBookedTicketsInit} from '@/hooks/useBookedTicketsInit';
import {useAppSelector} from '@/store/hooks';
import {selectedThemeSelector} from '@/store/slices/themeSlice/selectors';
import {darkTheme} from '@/theme/darkTheme';
import {lightTheme} from '@/theme/lightTheme';

import {Toast} from '../UI/Toast';

export const AppProvider = ({children}: {children: ReactNode}) => {
  useBookedTicketsInit();
  const isDark = useAppSelector(selectedThemeSelector) === ThemeVariant.DARK;
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <NavigationContainer theme={theme}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        {children}
        <Toast autoclose delay={1500} />
      </ThemeProvider>
    </NavigationContainer>
  );
};
