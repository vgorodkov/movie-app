import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

import Name from '@/assets/icons/account.svg';
import Email from '@/assets/icons/email.svg';
import Surname from '@/assets/icons/group.svg';
import Password from '@/assets/icons/password.svg';

export const inputIcons: Record<string, FC<SvgProps>> = {
  ['email']: Email,
  ['password']: Password,
  ['name']: Name,
  ['surname']: Surname,
};
