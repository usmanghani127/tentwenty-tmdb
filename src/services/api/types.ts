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

export type BelongsToCollection = {
  id: number;
  name: string;
  posterPath: string;
  backdropPath: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
};

export type ProductionCountry = {
  iso31661: string;
  name: string;
};

export type SpokenLanguage = {
  englishName: string;
  iso6391: string;
  name: string;
};

export type GetMovieDetailsResponseType = {
  adult: boolean;
  backdropPath: string;
  belongsToCollection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdbId: string;
  originCountry: string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type GetMovieDetailsArgTypes = {
  movieId: MovieItemType['id'];
};
