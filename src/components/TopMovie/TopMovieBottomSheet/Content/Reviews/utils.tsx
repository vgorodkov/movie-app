import {ListRenderItem} from 'react-native';

import {Review} from './Review';

export const renderReviews: ListRenderItem<string> = ({item}) => {
  return <Review review={item} />;
};
