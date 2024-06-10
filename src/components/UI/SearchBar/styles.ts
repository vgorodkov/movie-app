import styled from 'styled-components/native';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

export const SearchBarContainer = styled(FlexContainer)`
  flex-direction: row;
  background-color: #d9d9d9;
  align-items: center;
  margin: ${spacing.sm};
  padding: 0 ${spacing.sm};
  border-radius: ${spacing.sm};
  gap: ${spacing.s};
`;
