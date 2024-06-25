import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, KeyboardAvoidingView} from 'react-native';

import {
  ErrorFallback,
  Input,
  Typography,
  TypographyVariant,
} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {useMovieComments} from '@/hooks/useMovieComments';
import {FlexContainer} from '@/styled/FlexContainer';

import {EmptyCommentsList} from './EmptyCommentsList';
import {renderMovieComment} from './renderMovieComment';
import {styles} from './styles';
import {Comment} from './types';

export const MovieComments = ({imdbid}: {imdbid: string}) => {
  const {t} = useTranslation('home');
  const [commentText, setCommentText] = useState('');
  const {author, comments, addComment, error} = useMovieComments(imdbid);

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

  if (error) {
    return <ErrorFallback error="Error while loading comments" />;
  }

  return (
    <FlexContainer flex={1} gap={spacing.m} padding={`0 ${spacing.m}px 0`}>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_LARGE}>
        {comments.length} {t('Comments')}
      </Typography>
      <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}>
        <Input
          value={commentText}
          onChangeText={setCommentText}
          onSubmitEditing={onInputSubmit}
          author={author}
          placeholder={t('CommentsInputPlaceholder')}
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
