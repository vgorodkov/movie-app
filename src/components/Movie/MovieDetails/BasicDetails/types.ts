import {Movie} from '@/types/movies';

export interface BasicDetailsProps extends Pick<Movie, 'genre'> {}
