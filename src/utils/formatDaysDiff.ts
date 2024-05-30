export const formatDaysDiff = (daysDiff: number) => {
  if (daysDiff <= 0) {
    return 'Today';
  }
  if (daysDiff <= 7) {
    return `${daysDiff}d`;
  }
};
