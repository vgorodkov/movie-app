import {
  DAYS_PER_MONTH,
  DAYS_PER_WEEK,
  DAYS_PER_YEAR,
  HOUR,
  HOURS_PER_DAY,
  MILLISECONDS_PER_SECOND,
  MINUTE,
  MINUTES_PER_HOUR,
  MONTH_PER_YEAR,
  SECONDS_PER_MINUTE,
  WEEKS_PER_MONTH,
} from '@/constants/date';

export const getDaysDiffByTimestamp = (timestamp: number): string => {
  const now = Date.now();
  const diffInMs = now - timestamp;
  const diffInMinutes = Math.floor(
    diffInMs / MILLISECONDS_PER_SECOND / SECONDS_PER_MINUTE,
  );

  if (diffInMinutes < MINUTE) {
    return 'Just now';
  }
  if (diffInMinutes < HOUR) {
    return `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / MINUTES_PER_HOUR);
  if (diffInHours < HOURS_PER_DAY) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / HOURS_PER_DAY);
  if (diffInDays < DAYS_PER_WEEK) {
    return `${diffInDays}d ago`;
  }
  const diffInWeeks = Math.floor(diffInDays / DAYS_PER_WEEK);
  if (diffInWeeks < WEEKS_PER_MONTH) {
    return `${diffInWeeks}w ago`;
  }

  const diffInMonths = Math.floor(diffInDays / DAYS_PER_MONTH);
  if (diffInMonths < MONTH_PER_YEAR) {
    return `${diffInMonths}mo ago`;
  }

  const diffInYears = Math.floor(diffInDays / DAYS_PER_YEAR);
  return `${diffInYears}y ago`;
};
