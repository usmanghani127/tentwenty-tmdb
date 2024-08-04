import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// @ts-ignore
export const api = createApi({
  // reducerPath: 'api',
  tagTypes: ['dummy'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://www.google.com'}),
  endpoints: builder => ({
    search: builder.query({
      query: searchTerm => `search?q=${searchTerm}`,
    }),
  }),
});

export const {} = api;
