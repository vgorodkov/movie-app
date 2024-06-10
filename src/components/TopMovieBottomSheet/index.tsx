import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

import {INITIAL_HEIGHT} from './constants';
import {Content} from './Content';
import {Header} from './Header';
import {BottomSheetContainer} from './styles';

export const TopMovieBottomSheet = ({imdbid}: {imdbid: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {height} = useWindowDimensions();
  const bottomSheetTranslateY = useSharedValue(INITIAL_HEIGHT);

  const bottomSheetAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: bottomSheetTranslateY.value}],
    };
  });

  const openBottomSheet = () => {
    setIsOpen(true);
  };

  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  return (
    <BottomSheetContainer height={height} style={bottomSheetAnimatedStyle}>
      <Header
        imdbid={imdbid}
        bottomSheetTranslateY={bottomSheetTranslateY}
        isOpen={isOpen}
        openBottomSheet={openBottomSheet}
        closeBottomSheet={closeBottomSheet}
      />
      <Content isOpen={isOpen} imdbid={imdbid} />
    </BottomSheetContainer>
  );
};
