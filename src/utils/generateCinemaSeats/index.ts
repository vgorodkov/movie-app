export const generateCinemaSeats = (total: number, reserved: number[]) => {
  const seats = Array.from({length: total}, (_, index) => ({
    id: index,
    isReserved: reserved.includes(index),
  }));

  return seats;
};
