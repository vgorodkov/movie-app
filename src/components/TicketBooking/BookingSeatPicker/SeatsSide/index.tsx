import React from 'react';

import {EMPTY_SEAT_INDEX} from '../constants';
import {Seat} from '../Seat';
import {SeatsSideProps} from './types';

export const SeatsSide = ({seats}: {seats: SeatsSideProps[]}) => {
  return (
    <>
      {seats.map((seat, index) => {
        const {id, isReserved} = seat;
        return (
          <Seat
            key={id}
            id={id}
            isReserved={isReserved}
            isFirst={index === 0}
            isFirstInLastRow={index === EMPTY_SEAT_INDEX}
          />
        );
      })}
    </>
  );
};
