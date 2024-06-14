export interface MovieSession {
  time: string;
  cinemaType: string;
  reservedSeats: number[];
}

export interface BookingTicket {
  ticketId: string;
  movieId: string;
  date: string;
  seatsAmount: number;
  price: number;
}
