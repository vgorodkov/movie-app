import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

import {Comment} from '@/components/MovieComments/types';

export const useMovieComments = (movieId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const subscriber = firestore()
      .collection('comments')
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

  return {comments, error};
};
