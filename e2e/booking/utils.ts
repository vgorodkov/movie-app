import {expect} from 'detox';

import {DAY_BEFORE_SECS} from '@/constants/date';
import {BookingTicket} from '@/types/booking';

import {byId} from '../utils';

interface BookingData
  extends Pick<BookingTicket, 'price' | 'seatsAmount' | 'date'> {}

export const checkBookingData = async ({
  seatsAmount,
  price,
  date,
}: BookingData) => {
  const selectedDate = byId('SelectedDate');
  const bookingSeatAmount = byId('BookingSeatAmount');
  const bookingPrice = byId('BookingPrice');
  await expect(bookingSeatAmount).toHaveText(`${seatsAmount} Seats`);
  await expect(bookingPrice).toHaveText(`${price} $`);
  await expect(selectedDate).toHaveText(`Date: ${date}`);
};

export const getNearDates = () => {
  const today = new Date();
  const tommorow = new Date(today.getTime() + DAY_BEFORE_SECS);
  const yesterday = new Date(today.getTime() - DAY_BEFORE_SECS);
  const tommorowDate = tommorow.toISOString().split('T')[0];
  const yesterdayDate = yesterday.toISOString().split('T')[0];

  return {tommorowDate, yesterdayDate};
};
