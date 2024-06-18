import styled from 'styled-components/native';

import {FlexContainer} from '@/styled/FlexContainer';
import {darkTheme} from '@/theme/darkTheme';

export const LoadingFallbackContainer = styled(FlexContainer)<{
  transparent?: boolean;
}>`
  background-color: ${props =>
    props.transparent
      ? 'transparent'
      : props.theme.colors.background ?? darkTheme.colors.background};
`;
