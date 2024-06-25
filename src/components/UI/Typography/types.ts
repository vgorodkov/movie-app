import {TextProps as RNTextProps} from 'react-native';

export enum TypographyVariant {
  TITLE_LARGE = 'title-large',
  TITLE_MEDIUM = 'title-medium',
  TITLE_SMALL = 'title-small',
  SUBTITLE_LARGE = 'subtitle-large',
  SUBTITLE_MEDIUM = 'subtitle-medium',
  SUBTITLE_SMALL = 'subtitle-small',
  BODY_LARGE = 'body-large',
  BODY_MEDIUM = 'body-medium',
  BODY_SMALL = 'body-small',
  LABEL_LARGE = 'label-large',
  LABEL_MEDIUM = 'label-medium',
  LABEL_SMALL = 'label-small',
}

export interface TextProps extends RNTextProps {
  variant: TypographyVariant;
}
