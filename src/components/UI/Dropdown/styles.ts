import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';

import {Typography} from '../Typography';

export const DropdownSelect = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.onPrimary};
  padding: ${spacing.s}px ${spacing.sm}px;
  border-radius: 4px;
`;

export const DropdownSelectLabel = styled(Typography)`
  flex: 1;
  text-align: center;
  color: black;
`;

export const dropdownContentStyle: StyleProp<ViewStyle> = {
  position: 'absolute',
  width: '100%',
  top: 50,
  zIndex: 1000,
};
