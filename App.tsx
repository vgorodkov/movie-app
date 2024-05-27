import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {Typography} from '@/styled/Typography';
import {TypographyVariant} from '@/styled/Typography/types';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Typography variant={TypographyVariant.LABEL_SMALL}>1223</Typography>;
};

export default App;
