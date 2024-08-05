import React, {useEffect} from 'react';
import {Container, UpcomingMoviesList} from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';
import {useLazyGetUpcomingMoviesQuery} from '../../services/api/movies.ts';
import {MovieItem} from '../../components';
import {ActivityIndicator, Alert, RefreshControl} from 'react-native';
import {Colors} from '../../common/theme';
import {useScreenDimensions} from '../../common/hooks/useScreenDimensions.ts';

export const UpcomingScreen = () => {
  const {isLandScape} = useScreenDimensions();
  const [trigger, {data, isLoading, isError}] = useLazyGetUpcomingMoviesQuery();
  const {results = [], page = 0, totalPages = 1} = data ?? {};

  useEffect(
    () => {
      trigger({page: 1});
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'An error occurred while fetching upcoming movies');
    }
  }, [isError]);

  console.log({isLandScape});
  return (
    <Container testID={`${RouteKeys.Upcoming}: background`}>
      <UpcomingMoviesList
        key={isLandScape.toString()}
        keyExtractor={({id}) => id.toString()}
        data={results}
        extraData={results}
        renderItem={({item}) => MovieItem({kind: 'poster', ...item})}
        showsVerticalScrollIndicator={false}
        numColumns={isLandScape ? 2 : 1}
        refreshControl={
          <RefreshControl
            tintColor={Colors.turquoise}
            refreshing={isLoading}
            onRefresh={() => trigger({page: 1})}
          />
        }
        ListFooterComponent={
          <ActivityIndicator
            size={'small'}
            color={Colors.primary}
            animating={isLoading && page > 0}
          />
        }
        onEndReached={() => {
          if (page < totalPages) {
            trigger({page: page + 1});
          }
        }}
      />
    </Container>
  );
};
