import styled from 'styled-components/native';

import {SeatLegendVariant} from '../constants';

export const SeatLegendIcon = styled.View<{
  type: SeatLegendVariant;
}>`
  width: 16px;
  height: 16px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.primaryText};
  background-color: ${props =>
    props.type === SeatLegendVariant.RESERVED
      ? props.theme.colors.border
      : props.type === SeatLegendVariant.SELECTED
      ? props.theme.colors.primary
      : 'transparent'};
  border-radius: 4px;
`;
