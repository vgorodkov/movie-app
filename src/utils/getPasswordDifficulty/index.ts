const MEDIUM_LENGTH_BOUND = 8;
const HIGH_LENGTH_BOUND = 12;

const HAS_CAPITAL_LETTER_REGEXP = /[A-Z]/;
const HAS_SPECIAL_CHAR_REGEXP = /[.,!?/]/;

export const getPasswordDifficulty = (password: string) => {
  if (!password) {
    return '';
  }

  const length = password.length;
  const hasUpperCase = HAS_CAPITAL_LETTER_REGEXP.test(password);
  const hasSpecialChar = HAS_SPECIAL_CHAR_REGEXP.test(password);

  if (length <= MEDIUM_LENGTH_BOUND) {
    return 'Low';
  }

  if (length > MEDIUM_LENGTH_BOUND && length <= HIGH_LENGTH_BOUND) {
    if (hasUpperCase || hasSpecialChar) {
      return 'Medium';
    }
    return 'Low';
  }

  if (length > HIGH_LENGTH_BOUND) {
    if (hasUpperCase && hasSpecialChar) {
      return 'High';
    }
    return 'Medium';
  }

  return 'Low';
};
