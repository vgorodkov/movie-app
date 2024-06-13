import React from 'react';
import {Text} from 'react-native';

import {AvatarContainer} from './styles';

export const Avatar = ({user}: {user: string}) => {
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
