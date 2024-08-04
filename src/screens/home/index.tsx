import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const HomeScreen = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.HOME}: background`}
      style={styles.background}>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
};
