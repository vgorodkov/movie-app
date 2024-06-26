import styled from 'styled-components/native';

import {variantStyles} from './constants';
import {TypographyVariant} from './types';

export const Typography = styled.Text<{
  variant: TypographyVariant;
  color?: string;
  alightSelf?: string;
  textDecoration?: 'underline' | 'dashed';
  padding?: string;
}>`
  ${({variant}) => variantStyles[variant]}
  color: ${props =>
    props.color ? props.color : props.theme.colors.primaryText};
  align-self: ${props => props.alightSelf || 'auto'};
  text-decoration: ${props => props.textDecoration};
  padding: ${props => props.padding || 0};
`;
