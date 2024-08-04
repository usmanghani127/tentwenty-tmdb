import {IconProps} from 'react-native-vector-icons/Icon';

type VectorIconType = 'MaterialCommunityIcons' | 'Custom';

export type VectorIconProps = IconProps & {
  type: VectorIconType;
};
