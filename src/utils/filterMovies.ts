import {Top100Movie} from '@/types/movies';

interface NumberRange {
  max: number;
  min: number;
}

interface Top100MovieFilter {
  title?: string;
  year?: NumberRange;
  rating?: NumberRange;
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
