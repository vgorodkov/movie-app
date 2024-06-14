import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '@/store/types';
import {filterBookedTickets} from '@/utils/filterBookedTickets';

const bookedTicketsSelector = (state: RootState) =>
  state.bookedTickets.bookedTickets;

export const upcomingBookedTicketsSelector = createSelector(
  [bookedTicketsSelector],
  bookedTickets => {
    return filterBookedTickets(bookedTickets, 'upcoming');
  },
);

export const pastBookedTicketsSelector = createSelector(
  [bookedTicketsSelector],
  bookedTickets => {
    return filterBookedTickets(bookedTickets, 'past');
  },
);

export const missedBookedTicketsSelector = createSelector(
  [bookedTicketsSelector],
  bookedTickets => {
    return filterBookedTickets(bookedTickets, 'missed');
  },
);
