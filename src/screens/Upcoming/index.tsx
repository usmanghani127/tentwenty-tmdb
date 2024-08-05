import React, {useEffect} from 'react';
import {UpcomingMoviesList} from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';
import {useLazyGetUpcomingMoviesQuery} from '../../services/api/movies.ts';
import {MovieItem, ScreenContainer} from '../../components';
import {ActivityIndicator, Alert, RefreshControl} from 'react-native';
import {Colors} from '../../common/theme';
import {useScreenDimensions} from '../../common/hooks/useScreenDimensions.ts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorProps} from '../../navigation/types.ts';

export const UpcomingScreen = () => {
  const {isLandScape} = useScreenDimensions();
  const {navigate} =
    useNavigation<
      NativeStackNavigationProp<StackNavigatorProps, RouteKeys.MovieDetails>
    >();
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

  return (
    <ScreenContainer testID={`${RouteKeys.Upcoming}: background`}>
      <UpcomingMoviesList
        key={isLandScape.toString()}
        keyExtractor={({id}, index) => index.toString() + id.toString()}
        data={results}
        extraData={{results, isLandScape}}
        renderItem={({item}) =>
          MovieItem({
            kind: 'poster',
            onPress: () => navigate(RouteKeys.MovieDetails, {id: item.id}),
            ...item,
          })
        }
        showsVerticalScrollIndicator={false}
        numColumns={isLandScape ? 2 : 1}
        refreshControl={
          <RefreshControl
            tintColor={Colors.primary}
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
    </ScreenContainer>
  );
};
