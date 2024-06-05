import styled from 'styled-components/native';

export const SeatLegendIcon = styled.View<{
  borderColor: string;
  backgroundColor: string;
}>`
  width: 16px;
  height: 16px;
  border: ${props => `1px solid ${props.borderColor}`};
  background-color: ${props => props.backgroundColor};
  border-radius: 4px;
`;
