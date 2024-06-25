import {useTranslation} from 'react-i18next';

import {AuthModal} from '@/components/AuthModal';

export const SignUpScreen = () => {
  const {t} = useTranslation('auth');
  return <AuthModal isSignUp title={t('AccountAuth')} />;
};
