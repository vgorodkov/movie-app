import {getRandomNumbersInRange} from '.';

describe('getRandomNumbersInRange', () => {
  it('should return an array of random numbers within the specified range', () => {
    const result = getRandomNumbersInRange(1, 10, 5);
    expect(result).toHaveLength(5);
    result.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  it('should throw an error if count is greater than the range of numbers', () => {
    expect(() => getRandomNumbersInRange(1, 5, 6)).toThrow(
      'Count cannot be greater than the range of numbers.',
    );
  });

  it('should return an empty array if count is 0', () => {
    const result = getRandomNumbersInRange(1, 10, 0);
    expect(result).toEqual([]);
  });

  it('should return an array with all numbers in the range if count equals the range size', () => {
    const result = getRandomNumbersInRange(1, 5, 5);
    expect(result).toHaveLength(5);
    expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return unique numbers in the specified range', () => {
    const result = getRandomNumbersInRange(1, 10, 5);
    const uniqueNumbers = new Set(result);
    expect(uniqueNumbers.size).toBe(result.length);
  });

  it('should handle negative ranges correctly', () => {
    const result = getRandomNumbersInRange(-10, -1, 5);
    expect(result).toHaveLength(5);
    result.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(-10);
      expect(num).toBeLessThanOrEqual(-1);
    });
  });

  it('should handle mixed positive and negative ranges correctly', () => {
    const result = getRandomNumbersInRange(-5, 5, 5);
    expect(result).toHaveLength(5);
    result.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(-5);
      expect(num).toBeLessThanOrEqual(5);
    });
  });
});
