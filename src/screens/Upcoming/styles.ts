import styled, {DefaultTheme} from 'styled-components';
import {FlatList, FlatListProps, View} from 'react-native';
import {MovieItemType} from '../../components/MovieItem/types.ts';

export const Container = styled(View)(({theme}: {theme: DefaultTheme}) => ({
  backgroundColor: theme.colors.background,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
}));

export const UpcomingMoviesList = styled(FlatList)<
  FlatListProps<MovieItemType>
>({
  width: '100%',
});
