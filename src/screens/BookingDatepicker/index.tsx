import React from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import {useTheme} from 'styled-components';

import {
  Modal,
  PressableIcon,
  Typography,
  TypographyVariant,
} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectDate} from '@/store/slices/ticketBooking';
import {bookingDateSelector} from '@/store/slices/ticketBooking/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

import {MAX_DATE, MIN_DATE} from './constants';
import {BookDatepickerModalProps} from './types';

export const BookingDatepickerModal = ({
  navigation,
}: BookDatepickerModalProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector(bookingDateSelector);

  const markedDates = selectedDate
    ? {[selectedDate]: {selected: true}}
    : undefined;

  const closeModal = () => {
    navigation.goBack();
  };

  const onDayPress = (date: DateData) => {
    const {dateString} = date;
    dispatch(selectDate(dateString));
    closeModal();
  };

  return (
    <Modal onBackdropPress={closeModal}>
      <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
        <Typography variant={TypographyVariant.LABEL_LARGE}>
          Choose visiting day
        </Typography>
        <PressableIcon
          onPress={closeModal}
          icon={require('@/assets/icons/cancel.png')}
          width={24}
          height={24}
        />
      </FlexContainer>
      <Calendar
        markedDates={markedDates}
        onDayPress={onDayPress}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        hideExtraDays
        theme={theme.calendar}
      />
    </Modal>
  );
};
