import {TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  author?: string;
  icon?: number;
  Svgr?: any;
  errorMessage?: string;
}
