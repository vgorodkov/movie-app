import styled from 'styled-components/native';

export const Icon = styled.Image<{width: number; height: number}>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
