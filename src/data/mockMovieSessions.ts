import {MovieSession} from '@/types/booking';
import {getRandomNumbersInRange} from '@/utils/getRandomNumbersInRange';

export const movieSessions: MovieSession[] = [
  {
    time: '14:30 - 16:25',
    cinemaType: '1D',
    reservedSeats: getRandomNumbersInRange(0, 68, 25),
  },
  {
    time: '18:30 - 20:25',
    cinemaType: '3D',
    reservedSeats: getRandomNumbersInRange(0, 68, 45),
  },
];
