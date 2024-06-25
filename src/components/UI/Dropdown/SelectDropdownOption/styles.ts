import styled from 'styled-components/native';

export const OptionTouchable = styled.TouchableOpacity<{isActive: boolean}>`
  background-color: ${props =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.onPrimary};
`;
