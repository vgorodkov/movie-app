const colors = {
  background: '#1E1F27',
  primary: '#D98639',
  primaryText: '#FFFFFF',
  disabledText: '#FFFFFF80',
  onPrimary: '#000000',
  error: '#F44336',
  modalBackground: '#2E2E2E',
};

const calendar = {
  textDisabledColor: colors.disabledText,
  calendarBackground: colors.modalBackground,
  dayTextColor: colors.primaryText,
  monthTextColor: colors.primaryText,
  todayTextColor: colors.onPrimary,
  todayBackgroundColor: colors.primaryText,
  selectedDayTextColor: colors.onPrimary,
  selectedDayBackgroundColor: colors.primary,
};

export const darkTheme = {
  colors,
  calendar,
};
