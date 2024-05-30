import styled from 'styled-components/native';

import {Button} from '@/components/UI/Button';

export const AuthButton = styled(Button)`
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
`;
