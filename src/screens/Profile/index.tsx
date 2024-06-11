import auth from '@react-native-firebase/auth';
import React from 'react';

import {ToggleThemeBtn} from '@/components/ToggleThemeBtn';
import {Button} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {FlexContainer, FullscreenContainer} from '@/styled/FlexContainer';

export const ProfileScreen = () => {
  const onLogOutBtnPress = () => {
    auth().signOut();
  };

  const onEditBtnPress = () => {};

  const onSettingsBtnPress = () => {};

  const onPrivatePolicyBtnPress = () => {};

  return (
    <FullscreenContainer gap={spacing.l} alignItems="center">
      <FlexContainer gap={spacing.m}>
        <Button onPress={onEditBtnPress}>Edit profile info</Button>
        <Button onPress={onSettingsBtnPress}>Settings</Button>
        <Button onPress={onPrivatePolicyBtnPress}>Private Policy</Button>
        <Button onPress={onLogOutBtnPress}>Log Out</Button>
      </FlexContainer>
      <ToggleThemeBtn />
    </FullscreenContainer>
  );
};
