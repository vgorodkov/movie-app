import styled from 'styled-components/native';

export const FlexContainer = styled.View<{
  alignItems?: string;
  justifyContent?: string;
  flexFlow?: string;
  gap?: string;
}>`
  display: flex;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-flow: ${props => props.flexFlow || 'column nowrap'};
  gap: ${props => props.gap || 0};
`;

export const FullscreenContainer = styled(FlexContainer)<{
  paddingHorizontal?: string;
  paddingVertical?: string;
}>`
  flex: 1;
  padding: ${props => props.paddingVertical} ${props => props.paddingHorizontal};
  background-color: ${props => props.theme.colors.background};
`;
