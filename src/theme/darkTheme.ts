const colors = {
  background: '#1E1F27',
  primary: '#D98639',
  primaryText: '#FFFFFF',
  disabledText: '#FFFFFF80',
  onPrimary: '#FFFFFF',
  error: '#CC0000',
  success: '#017E34',
  warning: '#FF8801',
  info: '#0099CC',
  modalBackground: '#2E2E2E',
  card: '#16171F',
  text: '#FFFFFF',
  border: '#646464',
  notification: '#646464',
};

const calendar = {
  textDisabledColor: colors.disabledText,
  calendarBackground: colors.modalBackground,
  dayTextColor: colors.onPrimary,
  monthTextColor: colors.primaryText,
  todayTextColor: 'black',
  todayBackgroundColor: colors.primaryText,
  selectedDayTextColor: colors.onPrimary,
  selectedDayBackgroundColor: colors.primary,
};

export const darkTheme = {
  dark: true,
  colors,
  calendar,
};
