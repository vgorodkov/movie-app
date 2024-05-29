import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {MovieApiResponse} from '@/types/movies';

const baseUrl = 'https://ott-details.p.rapidapi.com';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        '3ba07edcd0msh50939710fa56e37p1dc684jsn276da19bd4bb',
      );
      return headers;
    },
  }),
  keepUnusedDataFor: 6000000000,
  endpoints: builder => ({
    getMovies: builder.query<MovieApiResponse, string>({
      query: genre =>
        `advancedsearch?start_year=2019&end_year=2020&min_imdb=7&genre=${genre}&type=movie`,
    }),
  }),
});

export const {useGetMoviesQuery} = movieApi;
