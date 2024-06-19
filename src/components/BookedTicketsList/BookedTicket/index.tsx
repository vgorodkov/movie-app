import React from 'react';

import {DUMMY_URI} from '@/components/Movie/MovieCarousel/MovieItem/constants';
import {LoadingFallback} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {useGetMovieInfoQuery} from '@/store/apiSlices/movieApi';
import {FlexContainer} from '@/styled/FlexContainer';

import {BookedTicketCancel} from './BookedTicketCancel';
import {BookedTicketInformation} from './BookedTicketInformation';
import {BookedTicketContainer, BookedTicketImage} from './styles';
import {BookedTicketProps} from './types';

export const BookedTicket = ({
  movieId,
  date,
  ticketId,
  seatsAmount,
  price,
}: BookedTicketProps) => {
  const {data, isLoading} = useGetMovieInfoQuery(movieId);

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <BookedTicketContainer>
      <BookedTicketImage source={{uri: data?.imageurl[0] || DUMMY_URI}} />
      <FlexContainer padding={`${spacing.s}px`} flex={1} gap={spacing.xs}>
        <BookedTicketInformation
          movieName={data?.title || 'Movie'}
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
