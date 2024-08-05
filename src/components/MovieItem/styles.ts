import {ImageBackgroundProps, View, ViewStyle} from 'react-native';
import styled from 'styled-components';
import {AppText} from '../AppText';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

export const Poster = styled(FastImage)<ImageBackgroundProps>(({theme}) => ({
  width: theme.dimensions.isLandScape ? '45%' : '95%',
  height: theme.dimensions.largerDimension * 0.25,
  margin: 10,
  borderRadius: 20,
  justifyContent: 'flex-end',
}));

export const EmptyPoster = styled(View)<ViewStyle>(({theme}) => ({
  width: theme.dimensions.width * 0.9,
  height: theme.dimensions.height * 0.25,
  borderRadius: 20,
  marginVertical: 10,
  backgroundColor: theme.colors.black,
}));

export const PosterGradient = styled(LinearGradient).attrs({
  locations: [0, 1],
})({
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  height: '75%',
  justifyContent: 'flex-end',
});

export const Title = styled(AppText)(({theme}) => ({
  fontSize: theme.fonts.size.heading,
  color: theme.colors.white,
  fontFamily: theme.fonts.family.medium,
  margin: '7.5%',
}));
