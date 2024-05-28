import styled from 'styled-components/native';

interface FlexContainerProps {
  alignItems?: string;
  justifyContent?: string;
  flexFlow?: string;
  gap?: string;
}

export const FlexContainer = styled.View<FlexContainerProps>`
  display: flex;
  align-items: ${({alignItems = 'stretch'}) => alignItems};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
  flex-flow: ${({flexFlow = 'column nowrap'}) => flexFlow};
  gap: ${({gap = '0'}) => gap};
`;

interface FullscreenContainerProps extends FlexContainerProps {
  paddingHorizontal?: string;
  paddingVertical?: string;
}

export const FullscreenContainer = styled(
  FlexContainer,
)<FullscreenContainerProps>`
  flex: 1;
  padding-top: ${({paddingVertical = '0'}) => paddingVertical};
  padding-bottom: ${({paddingVertical = '0'}) => paddingVertical};
  padding-left: ${({paddingHorizontal = '0'}) => paddingHorizontal};
  padding-right: ${({paddingHorizontal = '0'}) => paddingHorizontal};
  background-color: ${({theme}) => theme.colors.background};
`;
