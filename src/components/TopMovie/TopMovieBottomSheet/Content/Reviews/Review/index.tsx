import {View} from 'react-native';

import {TypographyVariant} from '@/components/UI';
import {BackdropGradient} from '@/components/UI/BackdropGradient';

import {REVIEW_WIDTH} from '../constants';
import {ReviewTypography} from './styles';
import {ReviewProps} from './types';

export const Review = ({review}: ReviewProps) => {
  return (
    <View
      style={{
        width: REVIEW_WIDTH,
      }}>
      <BackdropGradient />
      <ReviewTypography variant={TypographyVariant.BODY_SMALL}>
        {review}
      </ReviewTypography>
    </View>
  );
};
