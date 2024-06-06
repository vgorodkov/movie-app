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

export interface Top100Movie {
  big_image: string;
  description: string;
  genre: string[];
  id: string;
  image: string;
  imdb_link: string;
  imdbid: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  year: number;
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
