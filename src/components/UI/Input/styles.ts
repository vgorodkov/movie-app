import styled from 'styled-components/native';

export const InputField = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.colors.primaryText};
  padding: 0;
  border-bottom-width: 0.5px;
  border-color: ${props => props.theme.colors.border};
`;

export const InputIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
