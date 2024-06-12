export interface DropdownOption {
  code: string;
  label: string;
}

export interface SelectDropdownProps {
  initialOption?: DropdownOption;
  label: string;
  data: DropdownOption[];
  onSelect: (item: string) => void;
}
