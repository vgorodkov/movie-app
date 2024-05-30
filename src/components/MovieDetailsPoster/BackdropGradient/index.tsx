import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';

export const BackdropGradient = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <LinearGradient
      colors={['#1E1F2780', '#00000000', '#00000000', '#1E1F27']}
      locations={[0, 0.4, 0.7, 1]}
      style={styles.backdropGradient}>
      {children}
    </LinearGradient>
  );
};
