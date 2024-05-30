import {css} from 'styled-components';

import {TypographyVariant} from './types';

export const variantStyles = {
  [TypographyVariant.TITLE_LARGE]: css`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    font-family: 'Poppins-Light';
  `,
  [TypographyVariant.TITLE_MEDIUM]: css`
    font-size: 28px;
    line-height: 36px;
    font-family: 'Poppins-SemiBold';
  `,
  [TypographyVariant.TITLE_SMALL]: css`
    font-size: 24px;
    line-height: 32px;
    font-family: 'Poppins-SemiBold';
  `,
  [TypographyVariant.SUBTITLE_LARGE]: css`
    font-size: 22px;
    line-height: 28px;
    font-family: 'Poppins-SemiBold';
  `,
  [TypographyVariant.SUBTITLE_MEDIUM]: css`
    font-size: 16px;
    line-height: 24px;
    font-family: 'Poppins-SemiBold';
  `,
  [TypographyVariant.SUBTITLE_SMALL]: css`
    font-size: 14px;
    line-height: 20px;
    font-family: 'Poppins-SemiBold';
  `,
  [TypographyVariant.BODY_LARGE]: css`
    font-size: 16px;
    font-family: 'Poppins-Regular';
    line-height: 24px;
  `,
  [TypographyVariant.BODY_MEDIUM]: css`
    font-size: 14px;
    font-family: 'Poppins-Regular';
    line-height: 20px;
  `,
  [TypographyVariant.BODY_SMALL]: css`
    font-size: 12px;
    font-family: 'Poppins-Regular';
    line-height: 16px;
  `,
  [TypographyVariant.LABEL_LARGE]: css`
    font-size: 14px;
    line-height: 20px;
    font-family: 'Poppins-SemiBold';
  `,
  [TypographyVariant.LABEL_MEDIUM]: css`
    font-size: 12px;
    line-height: 16px;
    font-family: 'Poppins-SemiBold';
  `,
  [TypographyVariant.LABEL_SMALL]: css`
    font-size: 11px;
    font-family: 'Poppins-SemiBold';
    line-height: 16px;
  `,
};
