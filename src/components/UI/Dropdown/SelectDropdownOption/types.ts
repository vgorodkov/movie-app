import {DropdownOption} from '../types';

export interface SelectDropdownOptionProps {
  onSelect: (option: DropdownOption) => void;
  option: DropdownOption;
  isActive: boolean;
}
