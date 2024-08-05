import React, {useEffect} from 'react';
import {Button, ScreenContainer} from '../../components';
import {
  ButtonsContainer,
  DetailsContainer,
  DetailsSection,
  Genre,
  GenreChip,
  GenreContainer,
  Heading,
  OrientationController,
  Overview,
  PlayIcon,
  Poster,
  PosterContent,
  ReleaseDate,
} from './styles.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigatorProps} from '../../navigation/types.ts';
import {RouteKeys} from '../../navigation/routes.ts';
import {
  useGetConfigurationQuery,
  useGetMovieDetailsQuery,
} from '../../services/api/movies.ts';
import {When} from 'react-if';
import {Colors} from '../../common/theme';
import {Alert} from 'react-native';

export const MovieDetail = (
  props: NativeStackScreenProps<StackNavigatorProps, RouteKeys.MovieDetails>,
) => {
  const {data: {images: {posterSizes = [], secureBaseUrl = ''} = {}} = {}} =
    useGetConfigurationQuery();

  const {id} = props.route.params || {};
  console.log({id});
  const {
    isError,
    data: {posterPath = '', releaseDate = '', overview = '', genres = []} = {},
  } = useGetMovieDetailsQuery({movieId: id});

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'An error occurred while fetching movie details');
    }
  }, [isError]);

  const imageUrl = `${secureBaseUrl}${
    posterSizes.length > 1
      ? posterSizes[posterSizes.length - 2]
      : posterSizes.length === 1
      ? posterSizes[0]
      : ''
  }${posterPath}`;

  const formatedDate = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ScreenContainer>
      <OrientationController>
        <Poster source={{uri: imageUrl}} resizeMode={'stretch'}>
          <PosterContent colors={[Colors.transparent, Colors.black]}>
            <When condition={releaseDate}>
              <ReleaseDate>In Theaters {formatedDate}</ReleaseDate>
              <ButtonsContainer>
                <Button
                  kind={'filled'}
                  label={'Get Tickets'}
                  onPress={() =>
                    Alert.alert('Info', 'Navigate to Tickets Screen')
                  }
                />
                <Button
                  kind={'outlined'}
                  label={'Watch Trailer'}
                  onPress={() => Alert.alert('Info', 'Watch Trailer')}
                  Right={PlayIcon}
                />
              </ButtonsContainer>
            </When>
          </PosterContent>
        </Poster>
        <DetailsContainer>
          <DetailsSection>
            <Heading>Genres</Heading>
            <GenreContainer>
              {genres.map(({name}) => (
                <GenreChip key={name}>
                  <Genre>{name}</Genre>
                </GenreChip>
              ))}
            </GenreContainer>
            <Heading>Overview</Heading>
            <Overview>{overview}</Overview>
          </DetailsSection>
        </DetailsContainer>
      </OrientationController>
    </ScreenContainer>
  );
};
