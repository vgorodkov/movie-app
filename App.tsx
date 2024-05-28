import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components/native';

import {RootNavigation} from '@/navigation/Root';
import {darkTheme} from '@/theme/darkTheme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={darkTheme}>
        <StatusBar backgroundColor={darkTheme.colors.background} />
        <RootNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
