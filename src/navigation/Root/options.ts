import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const stackNavigatorOptions = {
  headerShown: false,
};

export const transparentModalOptions: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'fade',
};

export const movieDetailsScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTransparent: true,
  headerTitle: '',
  headerTintColor: 'white',
};
