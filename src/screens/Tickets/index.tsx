import React from 'react';
import {FlatList} from 'react-native';

import {BookedTicket} from '@/components/BookedTicket';
import {useBookedTickets} from '@/hooks/useBookedTickets';
import {FullscreenContainer} from '@/styled/FlexContainer';
import {BookingTicket} from '@/types/movies';

const renderTickets =
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

export const TicketsScreen = () => {
  const {data, cancelTicket, isLoading} = useBookedTickets();

  if (isLoading) {
    return null;
  }
  return (
    <FullscreenContainer>
      <FlatList
        contentContainerStyle={{gap: 16, padding: 16}}
        data={data}
        renderItem={renderTickets(cancelTicket)}
      />
    </FullscreenContainer>
  );
};
