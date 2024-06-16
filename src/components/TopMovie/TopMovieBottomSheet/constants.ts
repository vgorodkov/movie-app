import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const INITIAL_HEIGHT = height * 0.7;
export const ANIMATION_DURATION = 300;
export const SWIPE_THRESHOLD = 50;
