import {BookingTicket} from '@/types/booking';

export interface BookedTicketCancelProps
  extends Pick<BookingTicket, 'seatsAmount' | 'price' | 'ticketId'> {}
