import React from 'react';

import {spacing} from '@/constants/spacing';
import {MOCK_DATA} from '@/data/mockMovies';
import {FlexContainer} from '@/styled/FlexContainer';
import {BookingTicket} from '@/types/booking';

import {BookedTicketCancel} from './BookedTicketCancel';
import {BookedTicketInformation} from './BookedTicketInformation';
import {BookedTicketContainer, BookedTicketImage} from './styles';

interface BookedTicketProps extends BookingTicket {}

export const BookedTicket = ({
  movieId,
  date,
  ticketId,
  seatsAmount,
  price,
}: BookedTicketProps) => {
  const movie = MOCK_DATA.results.find(
    mockMovie => mockMovie.imdbid === movieId,
  );

  if (!movie) {
    return null;
  }

  return (
    <BookedTicketContainer>
      <BookedTicketImage source={{uri: movie.imageurl[0]}} />
      <FlexContainer padding={`${spacing.s}px`} flex={1} gap={spacing.xs}>
        <BookedTicketInformation
          movieName={movie.title}
          ticketId={ticketId}
          date={date}
        />
        <BookedTicketCancel
          ticketId={ticketId}
          price={price}
          seatsAmount={seatsAmount}
        />
      </FlexContainer>
    </BookedTicketContainer>
  );
};
