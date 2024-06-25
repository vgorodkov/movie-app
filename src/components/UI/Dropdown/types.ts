export interface DropdownOption {
  code: string;
  label: string;
}

export interface DropdownProps {
  initialOption?: DropdownOption;
  label: string;
  data: DropdownOption[];
  onSelect: (item: string) => void;
}
