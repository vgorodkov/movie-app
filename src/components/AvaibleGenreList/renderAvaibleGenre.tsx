import {ListRenderItem} from 'react-native';

import {AvaibleGenre} from './AvaibleGenre';

export const renderAvaibleGenre =
  (selectedMovieGenre: string): ListRenderItem<string> =>
  ({item}) => {
    return (
      <AvaibleGenre genre={item} isSelected={selectedMovieGenre === item} />
    );
  };
