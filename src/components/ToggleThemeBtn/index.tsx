import React from 'react';

import {ToggleButton} from '@/components/UI';
import {useAppDispatch} from '@/store/hooks';
import {selectTheme} from '@/store/slices/themeSlice';
import {darkTheme} from '@/theme/darkTheme';
import {lightTheme} from '@/theme/lightTheme';

export const ToggleThemeBtn = () => {
  const dispatch = useAppDispatch();

  const onLeftSidePress = () => {
    dispatch(selectTheme(lightTheme));
  };

  const onRightSidePress = () => {
    dispatch(selectTheme(darkTheme));
  };

  return (
    <ToggleButton
      left={{
        label: 'white',
        onPress: onLeftSidePress,
        backgroundColor: '#DEDEDE',
        color: 'black',
      }}
      right={{
        label: 'black',
        onPress: onRightSidePress,
        backgroundColor: 'black',
        color: 'white',
      }}
    />
  );
};
