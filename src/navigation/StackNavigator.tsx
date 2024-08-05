import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteKeys} from './routes.ts';
import {StackNavigatorProps} from './types.ts';
import {Colors} from '../common/theme';
import {BottomTabNavigator} from './BottomTabNavigator.tsx';
import {MovieDetail} from '../screens';

const Stack = createNativeStackNavigator<StackNavigatorProps>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteKeys.Home}
      screenOptions={{
        headerShown: false,
        navigationBarColor: Colors.primary,
        statusBarColor: Colors.white,
        statusBarStyle: 'dark',
      }}>
      <Stack.Screen name={RouteKeys.Home} component={BottomTabNavigator} />
      <Stack.Screen
        name={RouteKeys.MovieDetails}
        component={MovieDetail}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
