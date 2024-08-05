import React from 'react';
import {MovieItemProps, MoviePosterType} from './types.ts';
import {EmptyPoster, Poster, PosterGradient, Title} from './styles.ts';
import {Else, If, Then, When} from 'react-if';
import {useGetConfigurationQuery} from '../../services/api/movies.ts';
import {Colors} from '../../common/theme';

export const MovieItem = (props: MovieItemProps) => {
  const {title, posterPath = '', kind = 'poster'} = props;

  return (
    <When condition={kind === 'poster'}>
      <MoviePoster url={posterPath} title={title} />
    </When>
  );
};

export const MoviePoster = ({
  url,
  styles = {},
  title = '',
}: MoviePosterType) => {
  const {
    data: {images: {posterSizes = [], secureBaseUrl = ''} = {}} = {},
    isError,
    isLoading,
  } = useGetConfigurationQuery();

  const imageUrl = `${secureBaseUrl}${
    posterSizes.length > 1
      ? posterSizes[posterSizes.length - 2]
      : posterSizes.length === 1
      ? posterSizes[0]
      : ''
  }${url}`;

  const hasPoster = url && secureBaseUrl && !isError && posterSizes.length > 0;

  return (
    <When condition={!isLoading}>
      <If condition={!hasPoster}>
        <Then>
          <EmptyPoster>
            <MovieTitle title={title} />
          </EmptyPoster>
        </Then>
        <Else>
          <Poster source={{uri: imageUrl}} style={styles}>
            <MovieTitle title={title} />
          </Poster>
        </Else>
      </If>
    </When>
  );
};

export const MovieTitle = ({title}: {title: string}) => (
  <When condition={title}>
    <PosterGradient colors={[Colors.transparent, Colors.black]}>
      <Title numberOfLines={2} testID={'movie-title'}>
        {title}
      </Title>
    </PosterGradient>
  </When>
);
