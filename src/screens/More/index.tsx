import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const MoreScreen = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.More}: background`}
      style={styles.background}>
      <Text style={styles.text}>More</Text>
    </SafeAreaView>
  );
};
