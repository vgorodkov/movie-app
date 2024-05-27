import {css} from 'styled-components';

import {TypographyVariant} from './types';

export const variantStyles = {
  [TypographyVariant.TITLE_LARGE]: css`
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
  `,
  [TypographyVariant.TITLE_MEDIUM]: css`
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
  `,
  [TypographyVariant.TITLE_SMALL]: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  `,
  [TypographyVariant.SUBTITLE_LARGE]: css`
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
  `,
  [TypographyVariant.SUBTITLE_MEDIUM]: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;
  `,
  [TypographyVariant.SUBTITLE_SMALL]: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
  `,
  [TypographyVariant.BODY_LARGE]: css`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 24px;
  `,
  [TypographyVariant.BODY_MEDIUM]: css`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.25px;
    line-height: 20px;
  `,
  [TypographyVariant.BODY_SMALL]: css`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.4px;
    line-height: 16px;
  `,
  [TypographyVariant.LABEL_LARGE]: css`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    font-weight: 500;
  `,
  [TypographyVariant.LABEL_MEDIUM]: css`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
  `,
  [TypographyVariant.LABEL_SMALL]: css`
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
  `,
};
