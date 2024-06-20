import {SeatProps} from '../Seat/types';

export interface SeatsSideProps extends Pick<SeatProps, 'id' | 'isReserved'> {}
