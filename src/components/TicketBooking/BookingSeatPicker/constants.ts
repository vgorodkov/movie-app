import {SEATS_PER_ROW, TOTAL_SEATS} from '@/constants/cinema';

export const EMPTY_SEAT_INDEX = TOTAL_SEATS / 2 - (SEATS_PER_ROW - 1);

export enum SeatLegendVariant {
  AVAIBLE = 'Avaible',
  RESERVED = 'Reserved',
  SELECTED = 'Selected',
}

export const seatLegend = [
  {
    type: SeatLegendVariant.AVAIBLE,
  },
  {
    type: SeatLegendVariant.RESERVED,
  },
  {
    type: SeatLegendVariant.SELECTED,
  },
];
