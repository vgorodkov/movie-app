import React from 'react';

import {spacing} from '@/constants/spacing';
import {movieSessions} from '@/mocks/mockMovieSessions';
import {FlexContainer} from '@/styled/FlexContainer';

import {AvaibleSession} from './AvaibleSession';

export const BookingSessionPicker = () => {
  return (
    <FlexContainer
      flexFlow="row wrap"
      gap={spacing.sm}
      justifyContent="space-between">
      {movieSessions.map(movieSession => {
        const {reservedSeats, time, cinemaType} = movieSession;
        return (
          <AvaibleSession
            reservedSeats={reservedSeats}
            time={time}
            cinemaType={cinemaType}
            key={time}
          />
        );
      })}
    </FlexContainer>
  );
};
