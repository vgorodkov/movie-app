import {NavigationContainer} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {useAppSelector} from '@/store/hooks';
import {selectedThemeSelector} from '@/store/slices/themeSlice/selectors';
import {darkTheme} from '@/theme/darkTheme';
import {lightTheme} from '@/theme/lightTheme';

export const GlobalThemeProvider = ({children}: {children: ReactNode}) => {
  const theme = useAppSelector(selectedThemeSelector);
  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <NavigationContainer theme={selectedTheme}>
      <ThemeProvider theme={selectedTheme}>
        <StatusBar
          barStyle={selectedTheme.dark ? 'light-content' : 'dark-content'}
          backgroundColor={selectedTheme.colors.background}
        />
        {children}
      </ThemeProvider>
    </NavigationContainer>
  );
};
