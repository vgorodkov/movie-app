import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';

import CalendarIcon from '@/assets/icons/calendar.svg';
import {Typography, TypographyVariant} from '@/components/UI';
import {RootRoutes} from '@/constants/routes';
import {useAppSelector} from '@/store/hooks';
import {bookingDateSelector} from '@/store/slices/ticketBooking/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

export const BookingDatepicker = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {t} = useTranslation('home');
  const selectedDate = useAppSelector(bookingDateSelector);

  const onDatepickerIconPress = () => {
    navigation.navigate(RootRoutes.BOOKING_DATEPICKER);
  };

  return (
    <FlexContainer
      flexFlow="row nowrap"
      justifyContent="space-between"
      alignItems="flex-end">
      <FlexContainer>
        <Typography
          alightSelf="flex-start"
          variant={TypographyVariant.LABEL_LARGE}>
          {t('Schedule')}
        </Typography>
        <Typography
          color={selectedDate ? theme.colors.primaryText : theme.colors.error}
          alightSelf="flex-start"
          variant={TypographyVariant.BODY_MEDIUM}>
          {t('Date')}: {selectedDate ?? t('No Date')}
        </Typography>
      </FlexContainer>
      <CalendarIcon
        style={{color: theme.colors.primaryText}}
        onPress={onDatepickerIconPress}
        width={24}
        height={24}
      />
    </FlexContainer>
  );
};
