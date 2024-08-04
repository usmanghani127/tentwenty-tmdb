import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteKeys} from './routes.ts';
import {StackNavigatorProps} from './types.ts';
import {Colors} from '../common/theme/Colors.ts';
import {BottomTabNavigator} from './BottomTabNavigator.tsx';

const Stack = createNativeStackNavigator<StackNavigatorProps>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteKeys.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RouteKeys.Home}
        component={BottomTabNavigator}
        options={{
          statusBarColor: Colors.white,
          statusBarStyle: 'dark',
          navigationBarColor: Colors.primary,
        }}
      />
    </Stack.Navigator>
  );
};
