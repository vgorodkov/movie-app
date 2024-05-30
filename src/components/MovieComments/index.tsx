import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {FlatList, KeyboardAvoidingView} from 'react-native';

import {Input, Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {EmptyCommentsList} from './EmptyCommentsList';
import {renderMovieComment} from './renderMovieComment';
import {styles} from './styles';
import {Comment} from './types';

export const MovieComments = ({imdbid}: {imdbid: string}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  useEffect(() => {
    const subscriber = firestore()
      .collection('comments')
      .onSnapshot(snapshot => {
        const snapshotComments = snapshot.docs
          .map(doc => doc.data())
          .filter(doc => doc.movieId === imdbid)
          .sort((a, b) => a.createdAt - b.createdAt);
        setComments(snapshotComments as Comment[]);
      });

    return () => subscriber();
  }, [imdbid]);

  const onInputSubmit = () => {
    const newComment: Comment = {
      author: 'Stan Garfield',
      comment: commentText,
      createdAt: Date.now(),
      movieId: imdbid,
    };
    firestore().collection('comments').add(newComment);
    setCommentText('');
  };

  return (
    <FlexContainer flex={1} gap={spacing.m} padding={`0 ${spacing.m} 0`}>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_LARGE}>
        {comments.length} Comments
      </Typography>
      <KeyboardAvoidingView style={{gap: 16, flex: 1}}>
        <Input
          value={commentText}
          onChangeText={setCommentText}
          onSubmitEditing={onInputSubmit}
          author="Ivan"
          placeholder="Add a comment.."
        />
        <FlatList
          contentContainerStyle={styles.commentsListContentContainer}
          data={comments}
          renderItem={renderMovieComment}
          ListEmptyComponent={EmptyCommentsList}
        />
      </KeyboardAvoidingView>
    </FlexContainer>
  );
};
