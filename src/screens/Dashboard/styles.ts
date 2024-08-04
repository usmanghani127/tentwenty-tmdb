import {StyleSheet} from 'react-native';
import {Colors} from '../../common/theme/Colors.ts';
import {Fonts} from '../../common/theme/Fonts.ts';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: 50,
    fontFamily: Fonts.family.thin,
  },
});
