import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Top100Movie} from '@/types/movies';

const baseUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';

export const imbdApi = createApi({
  reducerPath: 'imbdApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: headers => {
      headers.set('x-rapidapi-key', process.env.RAPID_API_KEY as string);
      return headers;
    },
  }),
  endpoints: builder => ({
    getTop100Movies: builder.query<Top100Movie[], void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetTop100MoviesQuery} = imbdApi;
