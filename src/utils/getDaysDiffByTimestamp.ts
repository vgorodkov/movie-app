export const getDaysDiffByTimestamp = (timestamp: number) => {
  const now = Date.now();
  const diffInTime = now - timestamp;
  const diffInMinutes = Math.floor(diffInTime / 1000 / 60);
  const diffInHours = Math.floor(diffInTime / 1000 / 60 / 60);
  const diffInDays = Math.floor(diffInTime / 1000 / 60 / 60 / 24);
  const diffInWeeks = Math.floor(diffInTime / 1000 / 60 / 60 / 24 / 7);
  const diffInMonths = Math.floor(diffInTime / 1000 / 60 / 60 / 24 / 30);
  const diffInYears = Math.floor(diffInTime / 1000 / 60 / 60 / 24 / 365);

  if (diffInMinutes < 1) {
    return 'Just now';
  }
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }
  if (diffInWeeks < 4) {
    return `${diffInWeeks}w ago`;
  }
  if (diffInMonths < 12) {
    return `${diffInMonths}mo ago`;
  }
  return `${diffInYears}y ago`;
};
