import {MovieSession} from '@/types/movies';
import {getRandomNumbersInRange} from '@/utils/getRandomNumbersInRange';

export const movieSessions: MovieSession[] = [
  {
    time: '2:30 PM - 4:25 PM',
    cinemaType: '1D',
    reservedSeats: getRandomNumbersInRange(0, 68, 25),
  },
  {
    time: '7:30 PM - 9:25 PM',
    cinemaType: '3D',
    reservedSeats: getRandomNumbersInRange(0, 68, 45),
  },
];
