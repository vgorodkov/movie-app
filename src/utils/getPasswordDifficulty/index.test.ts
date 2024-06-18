import {getPasswordDifficulty} from '.';

describe('getPasswordDifficulty', () => {
  it('should return an empty string for an empty password', () => {
    expect(getPasswordDifficulty('')).toBe('');
  });

  it('should return "Low" for passwords of length between 4 and 8 characters, without uppercase letters or special characters', () => {
    expect(getPasswordDifficulty('abcd')).toBe('Low');
    expect(getPasswordDifficulty('abcdefgh')).toBe('Low');
  });

  it('should return "Low" for passwords of length between 4 and 8 characters, with uppercase letters or special characters', () => {
    expect(getPasswordDifficulty('Abcd')).toBe('Low');
    expect(getPasswordDifficulty('abcd!')).toBe('Low');
    expect(getPasswordDifficulty('Abcd!')).toBe('Low');
  });

  it('should return "Medium" for passwords longer than 8 characters, with uppercase letters and no special characters', () => {
    expect(getPasswordDifficulty('Abcdefghi')).toBe('Medium');
    expect(getPasswordDifficulty('Abcdefghij')).toBe('Medium');
  });

  it('should return "Medium" for passwords longer than 8 characters, with special characters and no uppercase letters', () => {
    expect(getPasswordDifficulty('abcdefgh!')).toBe('Medium');
    expect(getPasswordDifficulty('abcdefghij!')).toBe('Medium');
  });

  it('should return "High" for passwords longer than 12 characters, with both uppercase letters and special characters', () => {
    expect(getPasswordDifficulty('Abcdefgshijkl!')).toBe('High');
    expect(getPasswordDifficulty('Abcdefghsij!k')).toBe('High');
  });

  it('should return "Medium" for passwords longer than 12 characters, with only uppercase letters or only special characters', () => {
    expect(getPasswordDifficulty('Abcdefghijkl')).toBe('Medium');
    expect(getPasswordDifficulty('abcdefghij!k')).toBe('Medium');
  });

  it('should return "Low" for passwords shorter than 4 characters', () => {
    expect(getPasswordDifficulty('abc')).toBe('Low');
    expect(getPasswordDifficulty('Ab!')).toBe('Low');
  });
});
