import {SharedValue} from 'react-native-reanimated';

export interface HeaderProps {
  bottomSheetTranslateY: SharedValue<number>;
  isOpen: boolean;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  imdbid: string;
}
