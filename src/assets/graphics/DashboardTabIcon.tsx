import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {BottomTabBarIconType} from '../../navigation/types';
import {Colors} from '../../common/theme/Colors';

export const DashboardTabIcon = (props: BottomTabBarIconType) => {
  const {isActive} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill={isActive ? Colors.white : Colors.grey}>
      <Circle cx={5} cy={5} r={3} />
      <Circle cx={15} cy={5} r={3} />
      <Circle cx={15} cy={15} r={3} />
      <Circle cx={5} cy={15} r={3} />
    </Svg>
  );
};
