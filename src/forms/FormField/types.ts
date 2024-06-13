import {ReactNode} from 'react';

export interface FormFieldProps {
  name: string;
  placeholder: string;
  IconComponent: ReactNode;
  hideInputValue?: boolean;
  showInputDifficulty?: boolean;
}
