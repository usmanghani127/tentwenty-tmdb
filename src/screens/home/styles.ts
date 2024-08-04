import {StyleSheet} from 'react-native';
import {Colors} from '../../common/theme/colors.ts';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 50,
  },
});
