import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import {Button} from '@/components/UI/Button';
import {PressableIcon} from '@/components/UI/PressableIcon';
import {ProtectedRoutes} from '@/constants/routes';

import {BackdropGradient} from './BackdropGradient';
import {MovieImageBackground} from './styles';

export const MovieDetailsPoster = () => {
  const navigation = useNavigation();

  const onBookTicketIconPress = () => {
    navigation.navigate(ProtectedRoutes.BOOK_TICKET);
  };

  return (
    <MovieImageBackground source={require('@/assets/imgs/movie_1.png')}>
      <BackdropGradient>
        <View />
        <PressableIcon
          width={40}
          height={40}
          icon={require('@/assets/icons/play.png')}
        />
        <Button
          onPress={onBookTicketIconPress}
          iconVariant="relative"
          icon={require('@/assets/icons/ticket-voucher.png')}
          backgroundColor="#D98639">
          Get tickets
        </Button>
      </BackdropGradient>
    </MovieImageBackground>
  );
};
