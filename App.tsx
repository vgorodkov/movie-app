import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components/native';

import {WelcomeScreen} from '@/screens/Welcome';
import {darkTheme} from '@/theme/darkTheme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <WelcomeScreen />
    </ThemeProvider>
  );
};

export default App;
