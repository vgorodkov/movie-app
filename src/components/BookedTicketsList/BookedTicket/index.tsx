import React from 'react';

import {ErrorFallback, LoadingFallback} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {useGetMovieInfoQuery} from '@/store/apiSlices/movieApi';
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
  const {data, isLoading, isError} = useGetMovieInfoQuery(movieId);

  if (isError) {
    return <ErrorFallback error="Error while loading booked tickets" />;
  }

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <BookedTicketContainer>
      <BookedTicketImage source={{uri: data?.imageurl[0]}} />
      <FlexContainer padding={`${spacing.s}px`} flex={1} gap={spacing.xs}>
        <BookedTicketInformation
          movieName={data?.title || 'movie'}
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
