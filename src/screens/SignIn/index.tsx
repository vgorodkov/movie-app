import {useTranslation} from 'react-i18next';

import {AuthModal} from '@/components/AuthModal';

export const SignIn = () => {
  const {t} = useTranslation('auth');
  return <AuthModal title={t('AccountSignIn')} />;
};
