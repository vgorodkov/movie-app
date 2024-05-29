import {MovieGenre} from './MovieGenre';

export const renderMovieGenre =
  (selectedMovieGenre: string) =>
  ({item}: {item: string}) => {
    return <MovieGenre genre={item} isSelected={selectedMovieGenre === item} />;
  };
