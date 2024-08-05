import {ImageStyle, ViewStyle} from 'react-native';

export type MovieItemType = {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type MovieItemProps = MovieItemType & {
  kind: 'poster' | 'tile';
  styles?: ViewStyle;
  onPress?: () => void;
};

export type MoviePosterType = {
  url: string;
  styles?: ImageStyle;
  title?: string;
};
