import React from 'react';

import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';
import {BookingTicket} from '@/types/movies';

import {BookedTicketCancel} from './BookedTicketCancel';
import {BookedTicketInformation} from './BookedTicketInformation';
import {BookedTicketContainer, BookedTicketImage} from './styles';

interface BookedTicketProps extends BookingTicket {
  cancelTicket: (ticketId: string) => void;
}

export const BookedTicket = ({
  movieName,
  date,
  movieImgUrl,
  ticketId,
  seatsAmount,
  price,
  cancelTicket,
}: BookedTicketProps) => {
  return (
    <BookedTicketContainer>
      <BookedTicketImage source={{uri: movieImgUrl}} />
      <FlexContainer padding="8px" flex={1} gap={spacing.xs}>
        <BookedTicketInformation
          movieName={movieName}
          ticketId={ticketId}
          date={date}
        />
        <BookedTicketCancel
          ticketId={ticketId}
          price={price}
          seatsAmount={seatsAmount}
          cancelTicket={cancelTicket}
        />
      </FlexContainer>
    </BookedTicketContainer>
  );
};
