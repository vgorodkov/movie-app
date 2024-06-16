import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {Modal} from '@/components/UI';
import {AuthForm} from '@/forms/AuthForm';

import {AuthModalProps} from './types';

export const AuthModal = ({title, isSignUp = false}: AuthModalProps) => {
  const {t} = useTranslation('auth');
  const navigation = useNavigation();

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <Modal title={t(title)} onBackdropPress={closeModal}>
      <AuthForm isSignUp={isSignUp} />
    </Modal>
  );
};
