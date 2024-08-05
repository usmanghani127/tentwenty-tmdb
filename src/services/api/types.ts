import {MovieItemType} from '../../components/MovieItem/types.ts';

export type GetUpcomingMoviesResponseType = {
  page: number;
  results: MovieItemType[];
  totalPages: number;
  totalResults: number;
};

export type GetUpcomingMoviesArgTypes = {
  page: number;
};

type ImagesConfig = {
  baseUrl: string;
  secureBaseUrl: string;
  backdropSizes: string[];
  logoSizes: string[];
  posterSizes: string[];
  profileSizes: string[];
  stillSizes: string[];
};

export type GetConfigurationResponseType = {
  images: ImagesConfig;
  changeKeys: string[];
};
