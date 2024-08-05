import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useLayoutEffect, useState} from 'react';
import {StackNavigatorProps, TabNavigatorProps} from './types';
import {RouteKeys} from './routes.ts';
import {
  DashboardScreen,
  MediaLibraryScreen,
  MoreScreen,
  MovieDetail,
  SearchScreen,
  UpcomingScreen,
} from '../screens';
import {
  BottomTabButtonLabel,
  HeaderTitleStyles,
  TabBarBackground,
  TabBarStyles,
} from './styles.ts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardTabIcon} from '../assets/graphics/DashboardTabIcon.tsx';
import {WatchTabIcon} from '../assets/graphics/WatchTabIcon.tsx';
import {MediaLibraryTabIcon} from '../assets/graphics/MediaLibraryTabIcon.tsx';
import {MoreTabIcon} from '../assets/graphics/MoreTabIcon.tsx';
import {LabelPosition} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {VectorIcon} from '../components';
import {Colors, Fonts} from '../common/theme';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const TabNavigator = createBottomTabNavigator<TabNavigatorProps>();

const WatchTabStackNavigator =
  createNativeStackNavigator<StackNavigatorProps>();

const RenderTabBarBackground = () => <TabBarBackground />;

const TabBarLabel = ({
  focused,
  children,
}: {
  focused: boolean;
  color: string;
  position: LabelPosition;
  children: string;
}) => {
  return (
    <BottomTabButtonLabel isActive={focused}>{children}</BottomTabButtonLabel>
  );
};

// @ts-ignore
const WatchTabStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const showTabBar = ![RouteKeys.MovieDetails].includes(
      routeName as RouteKeys,
    );
    navigation.setOptions({
      tabBarStyle: {display: showTabBar ? 'flex' : 'none'},
    });
  }, [navigation, route]);

  return (
    <WatchTabStackNavigator.Navigator>
      <WatchTabStackNavigator.Screen
        name={RouteKeys.Upcoming}
        component={UpcomingScreen}
        options={{
          headerTitle: 'Watch',
          headerTitleAlign: 'left',
          headerTitleStyle: HeaderTitleStyles,
          headerRight: () =>
            VectorIcon({
              name: 'magnify',
              type: 'MaterialCommunityIcons',
              size: 30,
            }),
        }}
      />
      <WatchTabStackNavigator.Screen
        name={RouteKeys.Search}
        component={SearchScreen}
      />
      <WatchTabStackNavigator.Screen
        name={RouteKeys.MovieDetails}
        component={MovieDetail}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: Colors.white,
          headerBackTitleStyle: {
            fontFamily: Fonts.family.semiBold,
          },
          headerTitle: '',
          statusBarStyle: 'light',
        }}
      />
    </WatchTabStackNavigator.Navigator>
  );
};

export const BottomTabNavigator = () => {
  const [currentRoute, setCurrentRoute] = useState(RouteKeys.Watch);
  return (
    <TabNavigator.Navigator
      initialRouteName={RouteKeys.Watch}
      // @ts-ignore
      screenListeners={({route}) => setCurrentRoute(route.name)}
      screenOptions={{
        tabBarStyle: TabBarStyles,
        tabBarBackground: RenderTabBarBackground,
        tabBarLabel: props => TabBarLabel({...props}),
        tabBarLabelPosition: 'below-icon',
      }}>
      <TabNavigator.Screen
        name={RouteKeys.Dashboard}
        component={DashboardScreen}
        options={{
          tabBarIcon: () =>
            DashboardTabIcon({isActive: currentRoute === RouteKeys.Dashboard}),
        }}
      />
      <TabNavigator.Screen
        name={RouteKeys.Watch}
        component={WatchTabStack}
        options={{
          headerShown: false,
          tabBarIcon: () =>
            WatchTabIcon({isActive: currentRoute === RouteKeys.Watch}),
        }}
      />
      <TabNavigator.Screen
        name={RouteKeys.MediaLibrary}
        component={MediaLibraryScreen}
        options={{
          tabBarIcon: () =>
            MediaLibraryTabIcon({
              isActive: currentRoute === RouteKeys.MediaLibrary,
            }),
        }}
      />
      <TabNavigator.Screen
        name={RouteKeys.More}
        component={MoreScreen}
        options={{
          tabBarIcon: () =>
            MoreTabIcon({isActive: currentRoute === RouteKeys.More}),
        }}
      />
    </TabNavigator.Navigator>
  );
};
