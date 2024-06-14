import {StyleSheet} from 'react-native';

import {spacing} from '@/constants/spacing';

export const styles = StyleSheet.create({
  commentsListContentContainer: {
    gap: spacing.m,
    paddingTop: spacing.sm,
  },
  keyboardAvoidingContainer: {
    gap: spacing.sm,
    flex: 1,
  },
});
