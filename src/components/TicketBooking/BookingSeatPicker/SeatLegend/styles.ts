import styled from 'styled-components/native';

import {SeatLegendVariant} from '../constants';

export const SeatLegendIcon = styled.View<{
  type: SeatLegendVariant;
}>`
  width: 16px;
  height: 16px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.primaryText};
  background-color: ${({type, theme}) => {
    switch (type) {
      case SeatLegendVariant.RESERVED:
        return theme.colors.border;
      case SeatLegendVariant.SELECTED:
        return theme.colors.primary;
      default:
        return 'transparent';
    }
  }};
  border-radius: 4px;
`;
