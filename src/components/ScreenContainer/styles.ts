import styled from 'styled-components';
import {View} from 'react-native';

export const Container = styled(View)(({theme}) => ({
  flex: 1,
  backgroundColor: theme.colors.transparent,
}));
