import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';

import {RootNavigation} from '@/navigation/Root';
import {store} from '@/store';
import {darkTheme} from '@/theme/darkTheme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={darkTheme}>
          <StatusBar backgroundColor={darkTheme.colors.background} />
          <RootNavigation />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
