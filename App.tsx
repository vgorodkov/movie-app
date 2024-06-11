import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {GlobalThemeProvider} from '@/components/GlobalThemeProvider';
import {RootNavigation} from '@/navigation/Root';
import {store} from '@/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <GlobalThemeProvider>
        <RootNavigation />
      </GlobalThemeProvider>
    </Provider>
  );
};

export default App;
