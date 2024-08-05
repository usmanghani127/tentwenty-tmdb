import React, {useEffect, useRef, useState} from 'react';
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
  VideoPlayer,
} from './styles.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigatorProps} from '../../navigation/types.ts';
import {RouteKeys} from '../../navigation/routes.ts';
import {
  useGetConfigurationQuery,
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
} from '../../services/api/movies.ts';
import {When} from 'react-if';
import {Colors} from '../../common/theme';
import {Alert} from 'react-native';
import {VideoRef} from 'react-native-video';
import {MovieVideosType} from '../../services/api/types.ts';

export const MovieDetail = (
  props: NativeStackScreenProps<StackNavigatorProps, RouteKeys.MovieDetails>,
) => {
  const videoRef = useRef<VideoRef>(null);
  const [movieTrailer, setMovieTrailer] = useState<MovieVideosType | null>(
    null,
  );
  const {data: {images: {posterSizes = [], secureBaseUrl = ''} = {}} = {}} =
    useGetConfigurationQuery();

  const {id} = props.route.params || {};

  const {
    isError,
    data: {posterPath = '', releaseDate = '', overview = '', genres = []} = {},
  } = useGetMovieDetailsQuery({movieId: id});

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'An error occurred while fetching movie details');
    }
  }, [isError]);

  const {isError: movieVideosAPIError, data: {results: movieVideos = []} = {}} =
    useGetMovieVideosQuery({movieId: id});

  useEffect(() => {
    let video: MovieVideosType | null =
      movieVideos.find(({type}) => type === 'Trailer') ||
      movieVideos.find(({type}) => type === 'Teaser') ||
      movieVideos.find(({type}) => type === 'Featurette') ||
      null;
    if (video) {
      video = {
        ...video,
        url:
          video?.site === 'YouTube'
            ? `https://www.youtube.com/watch?v=${video.key}`
            : '',
      };
    }
    setMovieTrailer(video);
  }, [movieVideos]);

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

  const resetVideo = () => {
    videoRef?.current?.seek(0);
    videoRef?.current?.pause();
    videoRef?.current?.setFullScreen(false);
  };

  console.log({url: movieTrailer?.url});
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
                <When condition={!movieVideosAPIError}>
                  <Button
                    kind={'outlined'}
                    label={'Watch Trailer'}
                    onPress={() => videoRef.current?.presentFullscreenPlayer()}
                    Right={PlayIcon}
                  />
                </When>
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
      <When condition={movieTrailer?.url}>
        <VideoPlayer
          ref={videoRef}
          source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
          fullscreenAutorotate
          onEnd={resetVideo}
          onFullscreenPlayerDidDismiss={resetVideo}
          onFullscreenPlayerDidPresent={videoRef?.current?.resume}
          onVideoError={() =>
            Alert.alert('Error', 'An error occurred while playing the trailer.')
          }
        />
      </When>
    </ScreenContainer>
  );
};
