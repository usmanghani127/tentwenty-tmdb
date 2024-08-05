import styled from 'styled-components';
import {FlatList, FlatListProps} from 'react-native';
import {MovieItemType} from '../../components/MovieItem/types.ts';

export const UpcomingMoviesList = styled(FlatList).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})<FlatListProps<MovieItemType>>({
  flex: 1,
});
