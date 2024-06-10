import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Movie, MovieAdditionalInfo, MovieApiResponse} from '@/types/movies';
const baseUrl = 'https://ott-details.p.rapidapi.com';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', process.env.RAPID_API_KEY as string);
      return headers;
    },
  }),
  endpoints: builder => ({
    getMovies: builder.query<MovieApiResponse, string>({
      query: genre =>
        `advancedsearch?start_year=2019&end_year=2020&min_imdb=7&genre=${genre}&type=movie`,
    }),
    getMovieInfo: builder.query<Movie, string>({
      query: imdbid => `gettitleDetails?imdbid=${imdbid}`,
    }),
    getMovieAdditionalInfo: builder.query<MovieAdditionalInfo, string>({
      query: imdbid => `getadditionalDetails?imdbid=${imdbid}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieAdditionalInfoQuery,
  useGetMovieInfoQuery,
} = movieApi;
