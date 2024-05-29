import styled from 'styled-components/native';

export const PressableMovieGenre = styled.Pressable<{isSelected: boolean}>`
  background-color: ${props => (props.isSelected ? '#D98639' : 'transparent')};
  padding: 4px 8px;
  border-radius: 8px;
`;
