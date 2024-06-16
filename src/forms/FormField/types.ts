import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export interface FormFieldProps {
  name: string;
  placeholder: string;
  IconComponent: FC<SvgProps>;
  hideInputValue?: boolean;
  showInputDifficulty?: boolean;
}
