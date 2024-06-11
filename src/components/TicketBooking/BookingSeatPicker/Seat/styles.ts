import styled from 'styled-components/native';

export const PressableSeat = styled.Pressable<{
  isReserved: boolean;
  isSelected: boolean;
}>`
  width: 32px;
  height: 32px;
  border: 1px solid ${props => props.theme.colors.primaryText};
  background-color: ${props => {
    if (props.isReserved) {
      return props.theme.colors.border;
    }
    if (props.isSelected) {
      return props.theme.colors.primary;
    }
    return 'transparent';
  }};
  border-radius: 4px;
`;

export const Empty = styled.View`
  width: 32px;
  height: 32px;
`;
