import {BookingTicket} from '@/types/booking';

import {filterBookedTickets} from '.';

const mockDateNow = (mockDate: string) => {
  global.Date.now = jest.fn(() => new Date(mockDate).getTime());
};

describe('filterBookedTickets', () => {
  const tickets: BookingTicket[] = [
    {
      ticketId: '1',
      movieId: '1',
      seatsAmount: 1,
      price: 1,
      date: '2024-06-20T10:00:00Z',
    },
    {
      ticketId: '2',
      movieId: '2',
      seatsAmount: 1,
      price: 1,
      date: '2024-06-15T10:00:00Z',
    },
    {
      ticketId: '3',
      movieId: '3',
      seatsAmount: 1,
      price: 1,
      date: '2024-06-16T10:00:00Z',
    },
  ];

  beforeAll(() => {
    mockDateNow('2024-06-17T10:00:00Z');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should filter upcoming tickets', () => {
    const filteredTickets = filterBookedTickets(tickets, 'upcoming');
    expect(filteredTickets).toEqual([tickets[0]]);
  });

  it('should filter past tickets', () => {
    const filteredTickets = filterBookedTickets(tickets, 'past');
    expect(filteredTickets).toEqual([tickets[1], tickets[2]]);
  });

  it('should filter missed tickets', () => {
    const filteredTickets = filterBookedTickets(tickets, 'missed');
    expect(filteredTickets).toEqual([tickets[1], tickets[2]]);
  });
});
