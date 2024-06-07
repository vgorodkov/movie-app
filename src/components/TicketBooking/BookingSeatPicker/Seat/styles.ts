import styled from 'styled-components/native';

export const PressableSeat = styled.Pressable<{bgColor: string}>`
  width: 32px;
  height: 32px;
  border: 2px solid #787878;
  background-color: ${props => props.bgColor};
  border-radius: 4px;
`;

export const Empty = styled.View`
  width: 32px;
  height: 32px;
`;
