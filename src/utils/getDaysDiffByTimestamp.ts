export const getDaysDiffByTimestamp = (timestamp: number) => {
  const now = Date.now();
  const diffInTime = now - timestamp;
  const diffInDays = Math.floor(diffInTime / 1000 / 60 / 60 / 24);
  return diffInDays;
};
