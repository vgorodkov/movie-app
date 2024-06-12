import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

import {Typography} from '../Typography';

export const DropdownSelect = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.onPrimary};
  padding: ${spacing.s} ${spacing.sm};
  border-radius: 4px;
`;

export const DropdownSelectLabel = styled(Typography)`
  flex: 1;
  text-align: center;
  color: black;
`;