import {isErrorWithCode} from '.';

describe('isErrorWithCode', () => {
  it('should return true for an object with a string "code" property', () => {
    const error = {code: '123'};
    expect(isErrorWithCode(error)).toBe(true);
  });

  it('should return false for an object with a non-string "code" property', () => {
    const error = {code: 123};
    expect(isErrorWithCode(error)).toBe(false);
  });

  it('should return false for an object without a "code" property', () => {
    const error = {message: 'An error occurred'};
    expect(isErrorWithCode(error)).toBe(false);
  });

  it('should return false for a null value', () => {
    const error = null;
    expect(isErrorWithCode(error)).toBe(false);
  });

  it('should return false for a non-object value ', () => {
    const error = 'Some error';
    expect(isErrorWithCode(error)).toBe(false);
  });
});
