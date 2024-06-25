import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useDerivedValue, withTiming} from 'react-native-reanimated';

import {INITIAL_HEIGHT} from './constants';
import {Content} from './Content';
import {Header} from './Header';
import {BottomSheetContainer} from './styles';
import {TopMovieBottomSheetProps} from './types';

export const TopMovieBottomSheet = ({
  imdbid,
  movieId,
}: TopMovieBottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {height} = useWindowDimensions();

  const bottomSheetTranslateY = useDerivedValue(() => {
    if (isOpen) {
      return withTiming(0);
    }

    return withTiming(INITIAL_HEIGHT);
  }, [isOpen]);

  const openBottomSheet = () => {
    setIsOpen(true);
  };

  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  return (
    <BottomSheetContainer
      height={height}
      style={{transform: [{translateY: bottomSheetTranslateY}]}}>
      <Header
        movieId={movieId}
        isOpen={isOpen}
        openBottomSheet={openBottomSheet}
        closeBottomSheet={closeBottomSheet}
      />
      <Content isOpen={isOpen} imdbid={imdbid} />
    </BottomSheetContainer>
  );
};
