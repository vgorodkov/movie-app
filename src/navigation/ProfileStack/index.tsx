import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProfileRoutes} from '@/constants/routes';
import {transparentModalOptions} from '@/navigation/Root/options';
import {
  EditProfileScreenModal,
  ProfileScreen,
  SettingsScreenModal,
} from '@/screens';
import {ProfileStackParamList} from '@/types/navigation';

const StackNavigator = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStackNavigation = () => {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen
        component={ProfileScreen}
        name={ProfileRoutes.PROFILE}
      />
      <StackNavigator.Screen
        options={transparentModalOptions}
        component={EditProfileScreenModal}
        name={ProfileRoutes.EDIT}
      />
      <StackNavigator.Screen
        options={transparentModalOptions}
        component={SettingsScreenModal}
        name={ProfileRoutes.SETTINGS}
      />
    </StackNavigator.Navigator>
  );
};
