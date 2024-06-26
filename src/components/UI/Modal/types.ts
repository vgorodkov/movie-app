import {ViewProps} from 'react-native';

export interface ModalProps extends ViewProps {
  onBackdropPress: () => void;
  title?: string;
  gap?: number;
}
