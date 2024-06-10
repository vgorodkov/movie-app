export interface MovieApiResponse {
  page: number;
  results: Movie[];
}

interface StreamingAvailability {
  country: {
    US: {
      platform: string;
      url: string;
    }[];
  };
}

export interface Movie {
  genre: string[];
  imageurl: string[];
  imdbid: string;
  imdbrating: number;
  language: string[];
  released: number;
  runtime: string;
  streamingAvailability: StreamingAvailability;
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

export interface MovieAdditionalInfo {
  imdbid: string;
  numVotes: number;
  plotSummary: string;
  reviews: string[];
}
