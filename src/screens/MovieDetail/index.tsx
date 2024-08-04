import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const MovieDetail = () => {
  return (
    <SafeAreaView
      testID={`${RouteKeys.MovieDetails}: background`}
      style={styles.background}>
      <Text style={styles.text}>Movie Detail</Text>
    </SafeAreaView>
  );
};
