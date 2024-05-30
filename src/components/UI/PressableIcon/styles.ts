import styled from 'styled-components/native';

export const IconContainer = styled.Pressable<{alignSelf: string}>`
  align-self: ${props => props.alignSelf};
  padding: 2px;
  background-color: #d9d9d920;
  border-radius: 100px;
`;
