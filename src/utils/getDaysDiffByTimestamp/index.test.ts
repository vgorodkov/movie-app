import {
  DAYS_PER_WEEK,
  DAYS_PER_YEAR,
  HOURS_PER_DAY,
  MILLISECONDS_PER_SECOND,
  MINUTES_PER_HOUR,
  SECONDS_PER_MINUTE,
} from '@/constants/date';

import {getDaysDiffByTimestamp} from '.';

describe('getDaysDiffByTimestamp', () => {
  const mockDateNow = (mockDate: string) => {
    global.Date.now = jest.fn(() => new Date(mockDate).getTime());
  };

  beforeAll(() => {
    mockDateNow('2024-06-18T10:00:00Z');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return "Just now" for a timestamp less than a minute ago', () => {
    const timestamp = Date.now() - 30 * MILLISECONDS_PER_SECOND;
    expect(getDaysDiffByTimestamp(timestamp)).toBe('Just now');
  });

  it('should return the correct minutes ago', () => {
    const timestamp =
      Date.now() - 30 * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
    expect(getDaysDiffByTimestamp(timestamp)).toBe('30m ago');
  });

  it('should return the correct hours ago', () => {
    const timestamp =
      Date.now() -
      5 * MINUTES_PER_HOUR * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
    expect(getDaysDiffByTimestamp(timestamp)).toBe('5h ago');
  });

  it('should return the correct days ago', () => {
    const timestamp =
      Date.now() -
      2 *
        HOURS_PER_DAY *
        MINUTES_PER_HOUR *
        SECONDS_PER_MINUTE *
        MILLISECONDS_PER_SECOND;
    expect(getDaysDiffByTimestamp(timestamp)).toBe('2d ago');
  });

  it('should return the correct weeks ago', () => {
    const timestamp =
      Date.now() -
      3 *
        DAYS_PER_WEEK *
        HOURS_PER_DAY *
        MINUTES_PER_HOUR *
        SECONDS_PER_MINUTE *
        MILLISECONDS_PER_SECOND;
    expect(getDaysDiffByTimestamp(timestamp)).toBe('3w ago');
  });

  it('should return the correct years ago', () => {
    const timestamp =
      Date.now() -
      2 *
        DAYS_PER_YEAR *
        HOURS_PER_DAY *
        MINUTES_PER_HOUR *
        SECONDS_PER_MINUTE *
        MILLISECONDS_PER_SECOND;
    expect(getDaysDiffByTimestamp(timestamp)).toBe('2y ago');
  });
});
