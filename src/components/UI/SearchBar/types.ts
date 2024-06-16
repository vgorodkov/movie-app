export interface SearchBarProps {
  value: string;
  onValueChange: (value: string) => void;
  onFiltersPress: () => void;
}
