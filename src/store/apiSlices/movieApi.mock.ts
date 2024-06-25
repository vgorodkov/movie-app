import {mockMovieDetails} from '@/mocks/mockMovieDetails';
import {MOCK_DATA} from '@/mocks/mockMovies';

export const useGetMoviesQuery = (genre: string) => {
  return {
    data: MOCK_DATA.results.filter(movie => movie.genre.includes(genre)),
    isError: false,
    isLoading: false,
  };
};

export const useGetMovieInfoQuery = (imdbid: string) => {
  return {
    data: MOCK_DATA.results.find(data => data.imdbid === imdbid),
    isError: false,
    isLoading: false,
  };
};

export const useGetMovieAdditionalInfoQuery = () => {
  return {
    data: mockMovieDetails,
    isError: false,
    isLoading: false,
  };
};
