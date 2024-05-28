import styled from 'styled-components/native';

export const StudioImage = styled.Image<{isFirst?: boolean}>`
  height: 45px;
  width: ${props => (props.isFirst ? '100px' : '45px')};
`;
