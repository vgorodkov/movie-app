import styled from 'styled-components/native';

export const IconContainer = styled.Pressable<{alignSelf: string}>`
  opacity: ${props => (props.disabled ? 0.1 : 1)};
  align-self: ${props => props.alignSelf};
  padding: 2px;
`;
