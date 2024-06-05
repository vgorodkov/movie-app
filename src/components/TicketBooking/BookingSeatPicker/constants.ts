import {SEATS_PER_ROW, TOTAL_SEATS} from '@/constants/cinema';

export const seatLegend = [
  {
    label: 'Avaible',
    borderColor: 'gray',
  },
  {
    label: 'Reserved',
    backgroundColor: '#C4C4C4',
  },
  {
    label: 'Selected',
    backgroundColor: '#D98639',
  },
];

export const EMPTY_SEAT_INDEX = TOTAL_SEATS / 2 - (SEATS_PER_ROW - 1);
