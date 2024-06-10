import {Review} from './Review';

export const renderReviews = ({item}: {item: string}) => {
  return <Review review={item} />;
};
