import {useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {AppProvider} from '@/components/AppProvider';
import {LoadingFallback} from '@/components/UI/LoadingFallback';
import {RootNavigation} from '@/navigation/Root';
import {persistor, store} from '@/store';

import i18next from './i18n.config';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <AppProvider>
          <PersistGate loading={<LoadingFallback />} persistor={persistor}>
            <RootNavigation />
          </PersistGate>
        </AppProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
