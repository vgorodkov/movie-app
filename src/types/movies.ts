export interface MovieApiResponse {
  page: number;
  results: Movie[];
}

export interface Movie {
  genre: string[];
  imageurl: string[];
  imdbid: string;
  imdbrating: number;
  released: number;
  synopsis: string;
  title: string;
  type: string;
}

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
