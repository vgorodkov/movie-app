import {BookingTicket} from '@/types/movies';

import {BookedTicket} from './BookedTicket';

export const renderTickets =
  (cancelTicket: (ticketId: string) => void) =>
  ({item}: {item: BookingTicket}) => {
    const {movieName, date, movieImgUrl, ticketId, seatsAmount, price} = item;

    return (
      <BookedTicket
        cancelTicket={cancelTicket}
        ticketId={ticketId}
        seatsAmount={seatsAmount}
        price={price}
        movieImgUrl={movieImgUrl}
        movieName={movieName}
        date={date}
      />
    );
  };
