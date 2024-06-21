import {expect} from 'detox';

import {SEAT_PRICE} from '@/constants/cinema';

import {signIn} from '../auth/utils';
import {byId} from '../utils';
import {checkBookingData, getNearDates} from './utils';

describe('SignIn', () => {
  beforeAll(async () => {
    await device.launchApp();
    await signIn();
  });

  it('should correctly open booking screen', async () => {
    const movieCard = byId('MovieCarouselItem.5');
    const bookTicketsBtn = byId('BookTicketsBtn');
    const datepickerIcon = byId('DatePickerIcon');

    await movieCard.tap();
    await expect(bookTicketsBtn).toBeVisible();

    await bookTicketsBtn.tap();
    await expect(datepickerIcon).toBeVisible();
  });

  it('should correctly handle date picker', async () => {
    const datepickerIcon = byId('DatePickerIcon');
    const datepickerCalendar = byId('DatepickerCalendar');

    await checkBookingData({
      seatsAmount: 0,
      price: 0,
      date: 'No Date selected',
    });

    await datepickerIcon.tap();
    await expect(datepickerCalendar).toBeVisible();

    const {tommorowDate, yesterdayDate} = getNearDates();

    const tommorowCalendarDate = byId(`DatepickerCalendar.day_${tommorowDate}`);
    const yesterdayCalendarDate = byId(
      `DatepickerCalendar.day_${yesterdayDate}`,
    );

    await yesterdayCalendarDate.tap();
    await checkBookingData({
      seatsAmount: 0,
      price: 0,
      date: 'No Date selected',
    });

    await expect(tommorowCalendarDate).toBeVisible();
    await tommorowCalendarDate.tap();
    await checkBookingData({
      seatsAmount: 0,
      price: 0,
      date: tommorowDate,
    });
  });

  it('should correctly handle seat picker', async () => {
    const {tommorowDate} = getNearDates();

    const session = byId('MovieSession.14:30 - 16:25');
    const avaibleSeat = byId('Seat.1');
    const reservedSeat = byId('Seat.0');

    await expect(session).toBeVisible();
    await avaibleSeat.tap();
    await reservedSeat.tap();

    await checkBookingData({
      seatsAmount: 1,
      price: SEAT_PRICE,
      date: tommorowDate,
    });
  });

  it('should reset seats after session change', async () => {
    const {tommorowDate} = getNearDates();
    const session = byId('MovieSession.18:30 - 20:25');
    await session.tap();

    await checkBookingData({price: 0, seatsAmount: 0, date: tommorowDate});
  });

  it('should book ticket, redirect to tickets page and show toast notification', async () => {
    const {tommorowDate} = getNearDates();
    const avaibleSeat = byId('Seat.1');
    const reservedSeat = byId('Seat.0');

    await avaibleSeat.tap();
    await reservedSeat.tap();

    await checkBookingData({
      price: SEAT_PRICE,
      seatsAmount: 1,
      date: tommorowDate,
    });

    const upcomingTicketsScreen = byId('UpcomingTicketsScreen');
    const bookingSubmitBtn = byId('BookingSubmitBtn');

    await bookingSubmitBtn.tap();
    await expect(upcomingTicketsScreen).toBeVisible();
  });
});
