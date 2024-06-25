import {Range} from '@/types/common';
import {Top100Movie} from '@/types/movies';

interface Top100MovieFilter {
  title?: string;
  year?: Range<number>;
  rating?: Range<number>;
}

export const filterMovies = (
  data: Top100Movie[],
  {title, year, rating}: Top100MovieFilter,
): Top100Movie[] => {
  return data.filter(
    ({title: movieTitle, year: movieYear, rating: movieRating}) => {
      if (title && !movieTitle.toLowerCase().includes(title.toLowerCase())) {
        return false;
      }

      if (year && (movieYear < year.min || movieYear > year.max)) {
        return false;
      }

      if (rating && (+movieRating < rating.min || +movieRating > rating.max)) {
        return false;
      }

      return true;
    },
  );
};
