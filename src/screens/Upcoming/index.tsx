import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const UpcomingScreen = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.Upcoming}: background`}
      style={styles.background}>
      <Text style={styles.text}>Upcoming</Text>
    </SafeAreaView>
  );
};
