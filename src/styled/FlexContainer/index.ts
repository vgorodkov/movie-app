import styled from 'styled-components/native';

interface FlexContainerProps {
  alignItems?: string;
  justifyContent?: string;
  flexFlow?: string;
  gap?: number;
  flex?: number;
  padding?: string;
}

export const FlexContainer = styled.View<FlexContainerProps>`
  display: flex;
  flex: ${({flex}) => flex || '0 1 auto'};
  align-items: ${({alignItems = 'stretch'}) => alignItems};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
  flex-flow: ${({flexFlow = 'column nowrap'}) => flexFlow};
  gap: ${({gap = '0'}) => `${gap}px`};
  padding: ${({padding = '0'}) => padding};
`;

export const FullscreenContainer = styled(FlexContainer)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
