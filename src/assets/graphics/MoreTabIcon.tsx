import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BottomTabBarIconType} from '../../navigation/types.ts';
import {Colors} from '../../common/theme/Colors.ts';

export const MoreTabIcon = (props: BottomTabBarIconType) => {
  const {isActive} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill={isActive ? Colors.white : Colors.grey}>
      <Path
        d="M.466 7.133a1 1 0 001 1h1.062a1 1 0 001-1v-.17a1 1 0 00-1-1H1.466a1 1 0 00-1 1v.17zm0 4.997a1 1 0 001 1h1.062a1 1 0 001-1v-.28a1 1 0 00-1-1H1.466a1 1 0 00-1 1v.28zm0-10.06a1 1 0 001 1h1.062a1 1 0 001-1v-.082a1 1 0 00-1-1H1.466a1 1 0 00-1 1v.082zm4.593 5.063a1 1 0 001 1h11a1 1 0 001-1v-.17a1 1 0 00-1-1h-11a1 1 0 00-1 1v.17zm0 4.997a1 1 0 001 1h11a1 1 0 001-1v-.28a1 1 0 00-1-1h-11a1 1 0 00-1 1v.28zm1-11.142a1 1 0 00-1 1v.082a1 1 0 001 1h11a1 1 0 001-1v-.082a1 1 0 00-1-1h-11z"
        fill="#fff"
      />
    </Svg>
  );
};
