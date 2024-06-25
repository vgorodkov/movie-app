import {useTheme} from 'styled-components';

import {BackdropGradientContainer, Gradient} from './styles';

export const BackdropGradient = () => {
  const theme = useTheme();
  return (
    <BackdropGradientContainer>
      <Gradient colors={['#1E1F2700', theme.colors.modalBackground]} />
    </BackdropGradientContainer>
  );
};
