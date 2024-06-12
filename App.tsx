import {useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {GlobalThemeProvider} from '@/components/GlobalThemeProvider';
import {RootNavigation} from '@/navigation/Root';
import {store} from '@/store';

import i18next from './i18n.config';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <GlobalThemeProvider>
          <RootNavigation />
        </GlobalThemeProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
