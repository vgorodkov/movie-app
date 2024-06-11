import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components';

import {styles} from './styles';

export const BackdropGradient = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={['#1E1F2780', '#00000000', '#00000000', theme.colors.background]}
      locations={[0, 0.4, 0.7, 1]}
      style={styles.backdropGradient}>
      {children}
    </LinearGradient>
  );
};
