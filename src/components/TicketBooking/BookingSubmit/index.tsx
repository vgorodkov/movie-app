import {useNavigation} from '@react-navigation/native';
import {nanoid} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {SEAT_PRICE} from '@/constants/cinema';
import {RootRoutes} from '@/constants/routes';
import {useAppSelector} from '@/store/hooks';
import {ticketBookingSelector} from '@/store/slices/ticketBooking/selectors';
import {FlexContainer} from '@/styled/FlexContainer';
import {BookingTicket} from '@/types/booking';
import {getEncryptedData, saveEncryptedData} from '@/utils/encryptedStorage';

import {BookingSubmitButton} from './styles';

export const BookingSubmit = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  const {t} = useTranslation('home');
  const navigation = useNavigation();
  const ticketBookingInfo = useAppSelector(ticketBookingSelector);
  const [error, setError] = useState<string | null>(null);

  const {selectedSeats, selectedDate} = ticketBookingInfo;
  const selectedSeatsAmount = selectedSeats.length;
  const isButtonActive = selectedDate && selectedSeatsAmount > 0;

  const onBookingSubmitBtnPress = async () => {
    const newBooking = {
      ticketId: nanoid(),
      movieName: title,
      movieImgUrl: imageUrl,
      date: ticketBookingInfo.selectedDate!,
      price: ticketBookingInfo.selectedSeats.length * SEAT_PRICE,
      seatsAmount: ticketBookingInfo.selectedSeats.length,
    };

    try {
      const existingData = await getEncryptedData<BookingTicket[]>('booking');
      if (existingData) {
        const updatedData = [...existingData, newBooking];
        await saveEncryptedData('booking', updatedData);
      } else {
        await saveEncryptedData('booking', [newBooking]);
      }
      navigation.navigate(RootRoutes.BOTTOM_TAB);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      {error && (
        <Typography
          variant={TypographyVariant.LABEL_LARGE}
          color="red"
          alightSelf="flex-end">
          {error}
        </Typography>
      )}
      <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
        <FlexContainer>
          <Typography variant={TypographyVariant.LABEL_MEDIUM}>
            {selectedSeatsAmount} {t('Seats')}
          </Typography>
          <Typography variant={TypographyVariant.SUBTITLE_LARGE}>
            {SEAT_PRICE * selectedSeatsAmount} $
          </Typography>
        </FlexContainer>
        <BookingSubmitButton
          onPress={onBookingSubmitBtnPress}
          disabled={!isButtonActive}>
          {t('Book now')}
        </BookingSubmitButton>
      </FlexContainer>
    </>
  );
};
