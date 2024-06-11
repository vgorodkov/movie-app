import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components';

import PlayIcon from '@/assets/icons/play.svg';
import {Button} from '@/components/UI';
import {RootRoutes} from '@/constants/routes';

import {BackdropGradient} from './BackdropGradient';
import {MovieImageBackground} from './styles';

interface MovieDetailsPosterProps {
  imageurl: string;
  title: string;
}

export const MovieDetailsPoster = ({
  imageurl,
  title,
}: MovieDetailsPosterProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const onBookTicketIconPress = () => {
    navigation.navigate(RootRoutes.BOOKING_TICKET, {
      title,
      imageurl,
    });
  };

  return (
    <MovieImageBackground source={require('@/assets/imgs/movie_1.png')}>
      <BackdropGradient>
        <View />
        <PlayIcon width={40} height={40} color={theme.colors.primary} />
        <Button
          color={'white'}
          onPress={onBookTicketIconPress}
          iconVariant="relative"
          icon={require('@/assets/icons/ticket-voucher.png')}>
          Get tickets
        </Button>
      </BackdropGradient>
    </MovieImageBackground>
  );
};
