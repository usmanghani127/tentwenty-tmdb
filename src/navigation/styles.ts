import styled, {DefaultTheme} from 'styled-components';
import {AppText} from '../components';
import {View} from 'react-native';
import {Colors} from '../common/theme';

export const BottomTabButtonLabel = styled(AppText)<{
  theme: DefaultTheme;
  isActive: boolean;
}>(({theme, isActive}) => ({
  color: isActive ? theme.colors.white : theme.colors.grey,
}));

export const TabBarStyles = {
  backgroundColor: Colors.background,
  borderTopWidth: 0,
  elevation: 0,
};

export const HeaderTitleStyles = {
  color: Colors.subHeading,
};

export const TabBarBackground = styled(View)(
  ({theme}: {theme: DefaultTheme}) => ({
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    height: '100%',
  }),
);
