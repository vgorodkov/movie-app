import {mockTop100Movies} from '@/mocks/top100Mock';

export const useGetTop100MoviesQuery = () => {
  return {
    isLoading: false,
    isError: false,
    data: mockTop100Movies,
  };
};

export const useGetTop100MovieByIdQuery = (movieId: string) => {
  const movie = mockTop100Movies.find(movie => movie.id === movieId);
  return {
    isLoading: false,
    isError: false,
    data: movie,
  };
};
