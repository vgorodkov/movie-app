import {Movie} from '@/types/movies';

export interface DescriptionProps extends Pick<Movie, 'title' | 'synopsis'> {}
