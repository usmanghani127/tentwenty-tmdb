import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {VectorIconProps} from './types';

export const VectorIcon = (props: VectorIconProps) => {
  const {name, type = 'Custom', color, size = 20, ...restProps} = props;

  const vectorIconProps = {
    name,
    size,
    color,
    ...restProps,
  };

  switch (type) {
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...vectorIconProps} />;
    default:
      // this will be used for custom icons added through icomoon
      return <></>;
  }
};
