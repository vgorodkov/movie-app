import React from 'react';
import {Text} from 'react-native';

import {AvatarContainer} from './styles';
import {AvatarProps} from './types';

export const Avatar = ({user}: AvatarProps) => {
  const shortedName = user
    .slice(0, 2)
    .split(' ')
    .map(item => item[0].toUpperCase())
    .join('');
  return (
    <AvatarContainer>
      <Text>{shortedName}</Text>
    </AvatarContainer>
  );
};
