import {AvaibleGenre} from './AvaibleGenre';

export const renderAvaibleGenre =
  (selectedMovieGenre: string) =>
  ({item}: {item: string}) => {
    return (
      <AvaibleGenre genre={item} isSelected={selectedMovieGenre === item} />
    );
  };
