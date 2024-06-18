export const getRandomNumbersInRange = (
  start: number,
  end: number,
  count: number,
): number[] => {
  const range = end - start + 1;
  if (count > range) {
    throw new Error('Count cannot be greater than the range of numbers.');
  }

  const numbers: number[] = Array.from({length: range}, (_, i) => start + i);
  const result: number[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }

  return result;
};
