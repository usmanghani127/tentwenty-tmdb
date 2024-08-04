import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const DashboardScreen = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.Dashboard}: background`}
      style={styles.background}>
      <Text style={styles.text}>Dashboard</Text>
    </SafeAreaView>
  );
};
