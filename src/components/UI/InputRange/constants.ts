import {Dimensions} from 'react-native';

import {spacing} from '@/constants/spacing';

const {width} = Dimensions.get('window');

export const RANGE_WIDTH = width * 0.8 - spacing.m * 2;
export const MIN_CONTROLLER_SEPARATION = 12;
export const NORMALIZED_RANGE_WIDTH = RANGE_WIDTH - MIN_CONTROLLER_SEPARATION;
export const SCALE_ACTIVE = 1.4;
export const SCALE_INACTIVE = 1;
