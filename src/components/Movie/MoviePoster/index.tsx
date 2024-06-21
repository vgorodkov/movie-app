import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useTheme} from 'styled-components';

import PlayIcon from '@/assets/icons/play.svg';
import {Button} from '@/components/UI';
import {RootRoutes} from '@/constants/routes';

import {BackdropGradient} from './BackdropGradient';
import {MovieImageBackground} from './styles';
import {MoviePosterProps} from './types';

export const MoviePoster = ({movieId}: MoviePosterProps) => {
  const {t} = useTranslation('home');
  const theme = useTheme();
  const navigation = useNavigation();

  const onBookTicketIconPress = () => {
    navigation.navigate(RootRoutes.BOOKING_TICKET, {
      movieId,
    });
  };

  return (
    <MovieImageBackground source={require('@/assets/imgs/movie_1.png')}>
      <BackdropGradient>
        <View />
        <PlayIcon width={40} height={40} color={theme.colors.primary} />
        <Button
          testID="BookTicketsBtn"
          color={'white'}
          onPress={onBookTicketIconPress}
          iconVariant="relative"
          icon={require('@/assets/icons/ticket-voucher.png')}>
          {t('GetTicketsBtn')}
        </Button>
      </BackdropGradient>
    </MovieImageBackground>
  );
};
