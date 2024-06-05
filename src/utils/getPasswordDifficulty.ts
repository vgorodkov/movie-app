export const getPasswordDifficulty = (password: string) => {
  let passwordDifficulty = 'Low';
  if (!password) {
    return '';
  }
  const length = password.length;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[.,!?/]/.test(password);

  if (length >= 4 && length <= 8) {
    passwordDifficulty = 'Low';
  } else if (
    (length > 8 && hasUpperCase && !hasSpecialChar) ||
    (!hasUpperCase && hasSpecialChar)
  ) {
    passwordDifficulty = 'Medium';
  } else if (length > 12 && hasUpperCase && hasSpecialChar) {
    passwordDifficulty = 'High';
  }
  return passwordDifficulty;
};
