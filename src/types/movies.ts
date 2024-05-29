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
