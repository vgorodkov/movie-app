import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TopMoviesRoutes} from '@/constants/routes';
import {TopMoviesFiltersScreenModal, TopMoviesScreen} from '@/screens';
import {TopMoviesStackParamList} from '@/types/navigation';

import {transparentModalOptions} from '../Root/options';

const StackNavigator = createNativeStackNavigator<TopMoviesStackParamList>();

export const TopMoviesStackNavigation = () => {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen
        component={TopMoviesScreen}
        name={TopMoviesRoutes.TOP_MOVIES}
      />
      <StackNavigator.Screen
        options={transparentModalOptions}
        component={TopMoviesFiltersScreenModal}
        name={TopMoviesRoutes.TOP_MOVIES_FILTERS}
      />
    </StackNavigator.Navigator>
  );
};
