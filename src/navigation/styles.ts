import {DefaultTheme} from 'styled-components';
import styled from 'styled-components/native';
import {AppText} from '../components/AppText';
import {View} from 'react-native';
import {Colors} from '../common/theme';

export const BottomTabButtonLabel = styled(AppText)(
  ({theme, isActive}: {theme: DefaultTheme; isActive: boolean}) => ({
    color: isActive ? theme.colors.white : theme.colors.grey,
  }),
);

export const TabBarStyles = {
  backgroundColor: Colors.background,
  borderTopWidth: 0,
  elevation: 0,
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
