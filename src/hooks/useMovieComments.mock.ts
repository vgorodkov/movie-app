import {useState} from 'react';

import {Comment} from '@/components/Movie/MovieComments/types';

export const useMovieComments = (movieId: string) => {
  const MOCK_COMMENTS: Comment[] = [
    {
      author: 'Igor Igor',
      comment: '213123123',
      createdAt: Date.now(),
      movieId: movieId,
    },
    {
      author: 'Ivan Ivan',
      comment: 'asdasdads',
      createdAt: Date.now(),
      movieId: movieId,
    },
  ];
  const error = null;
  const user = {name: 'Ivan', surname: 'ivan'};
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);

  const author = `${user?.name || 'John'} ${user?.surname || 'Doe'}`;

  const addComment = (newComment: Comment) => {
    setComments(prev => [...prev, newComment]);
  };

  return {comments, addComment, error, author};
};
