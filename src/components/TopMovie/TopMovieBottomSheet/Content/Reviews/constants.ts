import {Dimensions} from 'react-native';

import {spacing} from '@/constants/spacing';

const {width} = Dimensions.get('window');

export const ARROW_WIDTH = 20;
export const ARROW_HEIGHT = 15;

export const REVIEW_WIDTH =
  width - spacing.sm * 2 - spacing.l - ARROW_WIDTH * 2 - spacing.s * 2;
