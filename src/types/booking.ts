export interface MovieSession {
  time: string;
  cinemaType: string;
  reservedSeats: number[];
}

export interface BookingTicket {
  ticketId: string;
  movieName: string;
  movieImgUrl: string;
  date: string;
  seatsAmount: number;
  price: number;
}
