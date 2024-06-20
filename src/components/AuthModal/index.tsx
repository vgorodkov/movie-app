import {useNavigation} from '@react-navigation/native';

import {Modal} from '@/components/UI';
import {AuthForm} from '@/forms/AuthForm';

import {AuthModalProps} from './types';

export const AuthModal = ({title, isSignUp = false}: AuthModalProps) => {
  const navigation = useNavigation();

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <Modal title={title} onBackdropPress={closeModal}>
      <AuthForm isSignUp={isSignUp} />
    </Modal>
  );
};
