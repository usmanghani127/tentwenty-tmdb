import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {BottomTabBarIconType} from '../../navigation/types.ts';
import {Colors} from '../../common/theme/Colors.ts';

export const MediaLibraryTabIcon = (props: BottomTabBarIconType) => {
  const {isActive} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill={isActive ? Colors.white : Colors.grey}>
      <Rect y={3.47369} width={18} height={14.5263} rx={0.947368} />
      <Path d="M16.105 1.579c.505 0 .632.526.632.79H.947c0-.632.421-.79.632-.79h14.526zM15.246 0c.435 0 .543.421.543.632H2.21c0-.506.363-.632.544-.632h12.492z" />
    </Svg>
  );
};
