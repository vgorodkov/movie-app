export const getSeatColor = (isReserved: boolean, isSelected: boolean) => {
  if (isReserved) {
    return '#C4C4C4';
  }
  if (isSelected) {
    return '#D98639';
  }
  return 'transparent';
};
