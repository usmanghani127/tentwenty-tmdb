// services/api.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  GetConfigurationResponseType,
  GetUpcomingMoviesArgTypes,
  GetUpcomingMoviesResponseType,
} from './types.ts';
import {TMDB_API_KEY} from '@env';
import camelcaseKeys from 'camelcase-keys';

export const moviesApi = createApi({
  reducerPath: 'movies', // The key for storing the reducer state in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    responseHandler: async response => {
      const json = await response.json();
      return camelcaseKeys(json, {deep: true});
    },
  }),
  endpoints: builder => ({
    getConfiguration: builder.query<GetConfigurationResponseType, void>({
      query: () => `/configuration?api_key=${TMDB_API_KEY}`,
    }),
    getUpcomingMovies: builder.query<
      GetUpcomingMoviesResponseType,
      GetUpcomingMoviesArgTypes
    >({
      query: ({page}) => `/movie/upcoming?api_key=${TMDB_API_KEY}&page=${page}`,
      serializeQueryArgs: ({endpointName}) => endpointName,
      merge: (currentCache, newItems, {arg}) => {
        if (arg.page === 1) {
          return newItems;
        }
        return {
          ...currentCache,
          ...newItems,
          results: [...(currentCache?.results || []), ...newItems.results],
        };
      },
      forceRefetch: ({currentArg = 0, previousArg = 0}) =>
        currentArg > previousArg,
    }),
  }),
});

export const {useLazyGetUpcomingMoviesQuery, useGetConfigurationQuery} =
  moviesApi;
export default moviesApi;
