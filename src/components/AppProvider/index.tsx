import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {ErrorBoundary} from '@/components/ErrorBoundary';
import {Toast} from '@/components/UI/Toast';
import {linking} from '@/constants/deeplinking';
import {ThemeVariant} from '@/constants/theme';
import {useBookedTicketsInit} from '@/hooks/useBookedTicketsInit';
import {useAppSelector} from '@/store/hooks';
import {selectedThemeSelector} from '@/store/slices/themeSlice/selectors';
import {darkTheme} from '@/theme/darkTheme';
import {lightTheme} from '@/theme/lightTheme';

import {AppProviderProps} from './types';

export const AppProvider = ({children}: AppProviderProps) => {
  useBookedTicketsInit();
  const isDark = useAppSelector(selectedThemeSelector) === ThemeVariant.DARK;
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ErrorBoundary>
      <NavigationContainer theme={theme} linking={linking}>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle={theme.dark ? 'light-content' : 'dark-content'}
            backgroundColor={theme.colors.background}
          />
          {children}
          <Toast autoclose delay={1500} />
        </ThemeProvider>
      </NavigationContainer>
    </ErrorBoundary>
  );
};
