import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

import {Comment} from '@/components/Movie/MovieComments/types';
import {COMMENTS_COLLECTION} from '@/constants/firebase';
import {useAppSelector} from '@/store/hooks';
import {userSelector} from '@/store/slices/user/selectors';

export const useMovieComments = (movieId: string) => {
  const user = useAppSelector(userSelector);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<null | string>(null);

  const author = `${user?.name} ${user?.surname}`;

  const addComment = (newComment: Comment) => {
    firestore().collection(COMMENTS_COLLECTION).add(newComment);
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection(COMMENTS_COLLECTION)
      .orderBy('createdAt')
      .where('movieId', '==', movieId)
      .onSnapshot(
        snapshot => {
          if (snapshot && snapshot.docs) {
            const snapshotComments = snapshot.docs.map(doc => doc.data());
            setComments(snapshotComments as Comment[]);
          } else {
            setComments([]);
          }
        },
        firebaseError => {
          console.error('Error fetching comments: ', firebaseError.message);
          setError(firebaseError.message);
          setComments([]);
        },
      );

    return () => subscriber();
  }, [movieId]);

  return {comments, addComment, error, author};
};
