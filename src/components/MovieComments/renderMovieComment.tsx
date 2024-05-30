import {MovieComment} from './MovieComment';
import {Comment} from './types';

export const renderMovieComment = ({item}: {item: Comment}) => {
  const {comment, author} = item;
  return <MovieComment comment={comment} author={author} />;
};
