import {generateCinemaSeats} from '.';

describe('generateCinemaSeats', () => {
  it('should generate the correct number of seats with no reservations', () => {
    const total = 10;
    const reserved: number[] = [];
    const seats = generateCinemaSeats(total, reserved);

    expect(seats.length).toBe(total);
    seats.forEach((seat, index) => {
      expect(seat).toEqual({id: index, isReserved: false});
    });
  });

  it('should mark reserved seats correctly', () => {
    const total = 10;
    const reserved = [1, 3, 5];
    const seats = generateCinemaSeats(total, reserved);

    expect(seats.length).toBe(total);
    seats.forEach((seat, index) => {
      expect(seat).toEqual({id: index, isReserved: reserved.includes(index)});
    });
  });

  it('should handle all seats being reserved', () => {
    const total = 5;
    const reserved = [0, 1, 2, 3, 4];
    const seats = generateCinemaSeats(total, reserved);

    expect(seats.length).toBe(total);
    seats.forEach((seat, index) => {
      expect(seat).toEqual({id: index, isReserved: true});
    });
  });

  it('should ignore invalid reserved seat numbers', () => {
    const total = 5;
    const reserved = [1, 3, 5, 7];
    const seats = generateCinemaSeats(total, reserved);

    expect(seats.length).toBe(total);
    seats.forEach((seat, index) => {
      expect(seat).toEqual({id: index, isReserved: [1, 3].includes(index)});
    });
  });
});
