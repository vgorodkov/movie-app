import React from 'react';
import {FlatList} from 'react-native';

import {Input, Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {renderMovieComment} from './renderMovieComment';
import {styles} from './styles';

const MOCK_COMMENTS = [
  {
    author: 'Andrew Garfield',
    comment: 'This trailer looks sick! So excited to see this!',
  },
  {
    author: 'Ivan Garfield',
    comment: 'Cool!',
  },
  {
    author: 'Evgenij Garfield',
    comment: 'Cool!',
  },
  {
    author: 'Gleb Garfield',
    comment: 'Cool!',
  },
  {
    author: 'Misha Garfield',
    comment: 'Cool!',
  },
  {
    author: 'Stas Garfield',
    comment: 'Cool!',
  },
  {
    author: 'Roman Garfield',
    comment: 'Cool!',
  },
  {
    author: 'Sergey Garfield',
    comment: 'Cool!',
  },
];

export const MovieComments = () => {
  return (
    <FlexContainer
      flex={1}
      gap={spacing.m}
      padding={`${spacing.sm} ${spacing.sm} 0`}>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_LARGE}>
        10.4K Comments
      </Typography>
      <Input author="Ivan" placeholder="Add a comment.." />
      <FlatList
        contentContainerStyle={styles.commentsListContentContainer}
        data={MOCK_COMMENTS}
        renderItem={renderMovieComment}
      />
    </FlexContainer>
  );
};
