import {ImageBackgroundProps, ScrollView, View} from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import {AppText, VectorIcon} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../common/theme';
// @ts-ignore
import Video, {VideoProperties} from 'react-native-video';

export const OrientationController = styled(View)(({theme}) => ({
  flexDirection: theme.dimensions.isLandScape ? 'row' : 'column',
  width: '100%',
  alignSelf: 'flex-start',
  flex: 1,
}));

export const Poster = styled(FastImage)<ImageBackgroundProps>(({theme}) => ({
  width: theme.dimensions.width * (theme.dimensions.isLandScape ? 0.5 : 1),
  height: theme.dimensions.isLandScape
    ? theme.dimensions.height
    : theme.dimensions.height * 0.5,
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const PosterContent = styled(LinearGradient).attrs({
  locations: [0, 1],
})(({theme}) => ({
  paddingVertical: theme.dimensions.width * 0.075,
  width: '100%',
  height: '100%',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const ReleaseDate = styled(AppText)(({theme}) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.size.subHeading,
  margin: 10,
}));

export const ButtonsContainer = styled(View)(({theme}) => ({
  flexDirection: theme.dimensions.isLandScape ? 'row' : 'column',
  justifyContent: 'space-between',
}));

export const PlayIcon = styled(VectorIcon).attrs({
  name: 'play',
  type: 'MaterialCommunityIcons',
  size: 20,
  color: Colors.white,
})({});

export const DetailsContainer = styled(SafeAreaView).attrs({
  edges: ['left', 'right', 'bottom'],
})({
  flex: 1,
});

export const DetailsSection = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})(({theme}) => ({
  marginHorizontal: theme.dimensions.isLandScape ? 0 : 25,
}));

export const Heading = styled(AppText)(({theme}) => ({
  color: theme.colors.subHeading,
  fontSize: theme.fonts.size.subHeading,
  fontFamily: theme.fonts.family.semiBold,
  marginVertical: 20,
}));

export const Overview = styled(AppText)(({theme}) => ({
  color: theme.colors.descriptionText,
  fontSize: theme.fonts.size.normal,
}));

export const GenreContainer = styled(View)(({theme}) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  borderBottomWidth: 1,
  paddingBottom: 20,
  borderColor: theme.colors.lightGrey,
}));

export const GenreChip = styled(View)(({theme}) => ({
  backgroundColor: theme.colors.primary,
  borderRadius: 20,
  paddingVertical: 10,
  minWidth: theme.dimensions.smallerDimension * 0.2,
  marginRight: 5,
  marginVertical: 10,
  alignItems: 'center',
}));

export const Genre = styled(AppText)(({theme}) => ({
  color: theme.colors.white,
}));

export const VideoPlayer = styled(Video)<VideoProperties>({});
