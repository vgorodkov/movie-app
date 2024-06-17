const LOW_LENGTH_BOUND = 4;
const MEDIUM_LENGTH_BOUND = 8;
const HIGHT_LENGTH_BOUD = 12;

const HAS_CAPITAL_LETTER_REGEXP = /[A-Z]/;
const HAS_SPECIAL_CHAR_REGEXP = /[.,!?/]/;

export const getPasswordDifficulty = (password: string) => {
  let passwordDifficulty = 'Low';
  if (!password) {
    return '';
  }
  const length = password.length;
  const hasUpperCase = HAS_CAPITAL_LETTER_REGEXP.test(password);
  const hasSpecialChar = HAS_SPECIAL_CHAR_REGEXP.test(password);

  if (length >= LOW_LENGTH_BOUND && length <= MEDIUM_LENGTH_BOUND) {
    passwordDifficulty = 'Low';
  } else if (
    (length > MEDIUM_LENGTH_BOUND && hasUpperCase && !hasSpecialChar) ||
    (!hasUpperCase && hasSpecialChar)
  ) {
    passwordDifficulty = 'Medium';
  } else if (length > HIGHT_LENGTH_BOUD && hasUpperCase && hasSpecialChar) {
    passwordDifficulty = 'High';
  }
  return passwordDifficulty;
};
