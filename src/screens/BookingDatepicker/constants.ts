const today = new Date();
const nextMonth = new Date();
nextMonth.setMonth(today.getMonth() + 1);

export const MIN_DATE = today.toISOString().split('T')[0];
export const MAX_DATE = nextMonth.toISOString().split('T')[0];
