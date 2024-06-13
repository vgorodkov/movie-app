import styled from 'styled-components/native';

import {Typography} from '../Typography';

export const ToggleButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ToggleButtonLabel = styled(Typography)<{
  side: 'left' | 'right';
  isActive?: boolean;
}>`
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  border-top-right-radius: ${props => (props.side === 'right' ? 8 : 0)}px;
  border-bottom-right-radius: ${props => (props.side === 'right' ? 8 : 0)}px;
  border-top-left-radius: ${props => (props.side === 'left' ? 8 : 0)}px;
  border-bottom-left-radius: ${props => (props.side === 'left' ? 8 : 0)}px;
  padding: 8px 16px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.card : props.theme.colors.disabledText};
  color: ${props =>
    props.isActive
      ? props.theme.colors.primaryText
      : props.theme.colors.disabledText};
`;
