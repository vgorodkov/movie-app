import {AuthVariant} from './types';

export const AUTH_VARIANTS: AuthVariant[] = [
  {
    name: 'account',
    label: 'Create an Account',
    icon: require('@/assets/icons/person.png'),
    backgroundColor: '#404040',
    color: 'white',
  },
  {
    name: 'google',
    label: 'Continue with Google',
    icon: require('@/assets/icons/google.png'),
    backgroundColor: 'white',
    color: '#00000085',
  },
  {
    name: 'facebook',
    label: 'Sign up with Facebook',
    icon: require('@/assets/icons/facebook.png'),
    backgroundColor: '#1877F2',
    color: 'white',
  },
  {
    name: 'github',
    label: 'Sign up with GitHub',
    icon: require('@/assets/icons/github.png'),
    backgroundColor: '#000000',
    color: 'white',
  },
];
