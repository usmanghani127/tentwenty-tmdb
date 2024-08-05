import {RouteKeys} from './routes.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MovieItemType} from '../components/MovieItem/types.ts';

export type StackNavigatorProps = {
  [RouteKeys.Home]: undefined;
  [RouteKeys.Upcoming]: undefined;
  [RouteKeys.Search]: undefined;
  [RouteKeys.MovieDetails]: {id: MovieItemType['id']};
};

export type TabNavigatorProps = {
  [RouteKeys.Dashboard]: undefined;
  [RouteKeys.Watch]: undefined;
  [RouteKeys.MediaLibrary]: undefined;
  [RouteKeys.More]: undefined;
};

export type StackScreenProps<RouteKey extends keyof StackNavigatorProps> =
  NativeStackScreenProps<StackNavigatorProps, RouteKey>;

export type BottomTabBarIconType = {
  isActive: boolean;
};
