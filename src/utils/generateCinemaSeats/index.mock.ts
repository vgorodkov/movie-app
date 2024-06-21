export const generateCinemaSeats = (total: number) => {
  const seats = Array.from({length: total}, (_, index) => ({
    id: index,
    isReserved: index % 2 === 0,
  }));

  return seats;
};
