export interface ToggleButtonSide {
  label: string;
  onPress: () => void;
}

export interface ToggleButtonProps {
  left: ToggleButtonSide;
  right: ToggleButtonSide;
  initialSide?: 'right' | 'left';
}
