import {useNavigation} from '@react-navigation/native';

import {Modal} from '@/components/UI/Modal';
import {PressableIcon} from '@/components/UI/PressableIcon';
import {Typography} from '@/components/UI/Typography';
import {TypographyVariant} from '@/components/UI/Typography/types';
import {AuthForm} from '@/forms/AuthForm';
import {FlexContainer} from '@/styled/FlexContainer';

import {AuthModalProps} from './types';

export const AuthModal = ({title, isSignUp = false}: AuthModalProps) => {
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
        <PressableIcon
          onPress={closeModal}
          width={16}
          height={16}
          icon={require('@/assets/icons/cancel.png')}
        />
      </FlexContainer>
      <AuthForm isSignUp={isSignUp} />
    </Modal>
  );
};
