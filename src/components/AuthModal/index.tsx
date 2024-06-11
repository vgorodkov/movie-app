import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import Cancel from '@/assets/icons/cancel.svg';
import {Modal, Typography, TypographyVariant} from '@/components/UI';
import {AuthForm} from '@/forms/AuthForm';
import {FlexContainer} from '@/styled/FlexContainer';

import {AuthModalProps} from './types';

export const AuthModal = ({title, isSignUp = false}: AuthModalProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <Modal onBackdropPress={closeModal}>
      <FlexContainer
        flexFlow="row nowrap"
        justifyContent="space-between"
        alignItems="center">
        <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
          {title}
        </Typography>
        <Cancel
          style={{color: theme.colors.primaryText}}
          onPress={closeModal}
          width={24}
          height={24}
        />
      </FlexContainer>
      <AuthForm isSignUp={isSignUp} />
    </Modal>
  );
};
