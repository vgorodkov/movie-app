import auth from '@react-native-firebase/auth';
import React from 'react';

import {Button} from '@/components/UI';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const ProfileScreen = () => {
  const onLogOutBtnPress = () => {
    auth().signOut();
  };
  return (
    <FullscreenContainer>
      <Button onPress={onLogOutBtnPress}>Log Out</Button>
    </FullscreenContainer>
  );
};
