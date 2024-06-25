import {ListRenderItem} from 'react-native';

import {BookingTicket} from '@/types/booking';

import {BookedTicket} from './BookedTicket';

export const renderTickets: ListRenderItem<BookingTicket> = ({item}) => {
  const {date, ticketId, seatsAmount, price, movieId} = item;

  return (
    <BookedTicket
      ticketId={ticketId}
      seatsAmount={seatsAmount}
      price={price}
      movieId={movieId}
      date={date}
    />
  );
};
