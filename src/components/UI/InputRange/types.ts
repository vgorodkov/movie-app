import {Range} from '@/types/common';

export interface InputRangeProps {
  min: number;
  max: number;
  title: string;
  onValueChange?: ({min, max}: Range<string>) => void;
  initialMin?: number;
  initialMax?: number;
}
