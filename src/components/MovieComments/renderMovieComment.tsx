import {MovieComment} from './MovieComment';
import {Comment} from './types';

export const renderMovieComment = ({item}: {item: Comment}) => {
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
