import {ListRenderItem} from 'react-native';

import {MovieComment} from './MovieComment';
import {Comment} from './types';

export const renderMovieComment: ListRenderItem<Comment> = ({item}) => {
  const {comment, author, createdAt, movieId} = item;
  return (
    <MovieComment
      comment={comment}
      author={author}
      createdAt={createdAt}
      movieId={movieId}
    />
  );
};
