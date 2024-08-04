import {StyleSheet} from 'react-native';
import {Colors} from '../../common/theme/Colors.ts';
import {Fonts} from '../../common/theme/Fonts.ts';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 50,
    fontFamily: Fonts.family.thin,
  },
});
