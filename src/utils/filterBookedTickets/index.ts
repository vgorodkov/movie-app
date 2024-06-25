import {BookingTicket} from '@/types/booking';

export const filterBookedTickets = (
  bookedTickets: BookingTicket[],
  mode: 'upcoming' | 'past' | 'missed',
) => {
  return bookedTickets.filter(ticket => {
    const timestamp = new Date(ticket.date).getTime();
    const nowTimestamp = Date.now();
    if (mode === 'upcoming') {
      return timestamp > nowTimestamp;
    }
    if (mode === 'past') {
      return timestamp < nowTimestamp;
    }
    if (mode === 'missed') {
      return timestamp < nowTimestamp;
    }
  });
};
