import React from 'react';
import {MovieItemProps, MoviePosterType} from './types.ts';
import {
  EmptyPoster,
  MovieItemContainer,
  Poster,
  PosterGradient,
  Title,
} from './styles.ts';
import {Else, If, Then, When} from 'react-if';
import {Colors} from '../../common/theme';
import {useGetConfigurationQuery} from '../../services/api/movies.ts';

export const MovieItem = (props: MovieItemProps) => {
  const {title, posterPath = '', kind = 'poster', onPress = () => {}} = props;

  return (
    <MovieItemContainer onPress={onPress}>
      <When condition={kind === 'poster'}>
        <MoviePoster url={posterPath} title={title} />
      </When>
    </MovieItemContainer>
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
          <Poster
            source={{uri: imageUrl}}
            style={styles}
            resizeMode={'stretch'}>
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
