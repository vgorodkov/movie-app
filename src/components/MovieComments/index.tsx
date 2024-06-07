import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {FlatList, KeyboardAvoidingView} from 'react-native';

import {Input, Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {useGetUser} from '@/hooks/useGetUser';
import {useMovieComments} from '@/hooks/useMovieComments';
import {FlexContainer} from '@/styled/FlexContainer';

import {EmptyCommentsList} from './EmptyCommentsList';
import {renderMovieComment} from './renderMovieComment';
import {styles} from './styles';
import {Comment} from './types';

export const MovieComments = ({imdbid}: {imdbid: string}) => {
  const user = useGetUser(auth().currentUser?.uid!);
  const [commentText, setCommentText] = useState('');
  const {comments, addComment} = useMovieComments(imdbid);

  const author = `${user?.name} ${user?.surname}`;

  const onInputSubmit = () => {
    const newComment: Comment = {
      author: author,
      comment: commentText,
      createdAt: Date.now(),
      movieId: imdbid,
    };
    addComment(newComment);
    setCommentText('');
  };

  return (
    <FlexContainer flex={1} gap={spacing.m} padding={`0 ${spacing.m} 0`}>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_LARGE}>
        {comments.length} Comments
      </Typography>
      <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}>
        <Input
          value={commentText}
          onChangeText={setCommentText}
          onSubmitEditing={onInputSubmit}
          author={author}
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
