import {NavigationContainer} from '@react-navigation/native';
import React, {ReactNode, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {initBookedTickets} from '@/store/slices/bookedTickets/thunk';
import {selectedThemeSelector} from '@/store/slices/themeSlice/selectors';
import {darkTheme} from '@/theme/darkTheme';
import {lightTheme} from '@/theme/lightTheme';

export const GlobalThemeProvider = ({children}: {children: ReactNode}) => {
  const theme = useAppSelector(selectedThemeSelector);
  const dispatch = useAppDispatch();
  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    dispatch(initBookedTickets());
  }, [dispatch]);

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
