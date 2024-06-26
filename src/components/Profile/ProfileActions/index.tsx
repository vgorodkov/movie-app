import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Linking} from 'react-native';

import {BottomTabRoutes, ProfileRoutes, RootRoutes} from '@/constants/routes';
import {spacing} from '@/constants/spacing';

import {PRIVATE_POLICY_URL} from './constants';
import {ProfileActionButton, ProfileActionsContainer} from './styles';

export const ProfileActions = () => {
  const navigation = useNavigation();
  const {t} = useTranslation('profile');

  const onLogOutBtnPress = () => {
    auth().signOut();
  };

  const onEditBtnPress = () => {
    navigation.navigate(RootRoutes.BOTTOM_TAB, {
      screen: BottomTabRoutes.PROFILE_NAV,
      params: {
        screen: ProfileRoutes.EDIT,
      },
    });
  };

  const onSettingsBtnPress = () => {
    navigation.navigate(RootRoutes.BOTTOM_TAB, {
      screen: BottomTabRoutes.PROFILE_NAV,
      params: {
        screen: ProfileRoutes.SETTINGS,
      },
    });
  };

  const onPrivatePolicyBtnPress = () => {
    Linking.openURL(PRIVATE_POLICY_URL);
  };

  const profileActions = [
    {
      name: 'EditBtn',
      onPress: onEditBtnPress,
    },
    {
      name: 'SettingsBtn',
      onPress: onSettingsBtnPress,
    },
    {
      name: 'PrivatePolicyBtn',
      onPress: onPrivatePolicyBtnPress,
    },
    {
      name: 'LogOutBtn',
      onPress: onLogOutBtnPress,
    },
  ];

  return (
    <ProfileActionsContainer gap={spacing.m}>
      {profileActions.map(action => (
        <ProfileActionButton
          testID={`ProfileAction.${action.name}`}
          key={action.name}
          textAlign="center"
          onPress={action.onPress}>
          {t(action.name)}
        </ProfileActionButton>
      ))}
    </ProfileActionsContainer>
  );
};
