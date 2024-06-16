import {DefaultTheme} from '@react-navigation/native';

const colors = {
  ...DefaultTheme.colors,
  background: '#FFFFFF',
  primary: '#FFBD80',
  primaryText: '#000000',
  disabledText: '#00000080',
  onPrimary: '#FFFFFF',
  error: '#FE4443',
  success: '#01C851',
  warning: '#FFBB33',
  info: '#33B5E7',
  modalBackground: '#F0F0F0',
};

const calendar = {
  textDisabledColor: colors.disabledText,
  calendarBackground: colors.modalBackground,
  dayTextColor: colors.primaryText,
  monthTextColor: colors.primaryText,
  todayTextColor: colors.onPrimary,
  todayBackgroundColor: '#D98639',
  selectedDayTextColor: colors.onPrimary,
  selectedDayBackgroundColor: colors.primary,
};

export const lightTheme = {
  dark: false,
  colors,
  calendar,
};
