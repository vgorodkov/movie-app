import {AuthVariant} from './types';

export const AUTH_VARIANTS: AuthVariant[] = [
  {
    name: 'account',
    label: 'AccountAuth',
    icon: require('@/assets/icons/person.png'),
    backgroundColor: '#404040',
    color: 'white',
  },
  {
    name: 'google',
    label: 'GoogleAuth',
    icon: require('@/assets/icons/google.png'),
    backgroundColor: '#D4D4D4',
    color: '#00000085',
  },
  {
    name: 'facebook',
    label: 'FacebookAuth',
    icon: require('@/assets/icons/facebook.png'),
    backgroundColor: '#1877F2',
    color: 'white',
  },
  {
    name: 'github',
    label: 'GithubAuth',
    icon: require('@/assets/icons/github.png'),
    backgroundColor: '#000000',
    color: 'white',
  },
];
