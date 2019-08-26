import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

/**
 * ColorsScreen styles
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '70%',
    justifyContent: 'center',
    width: '100%'
  },

  option: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '16.67%',
    width: '100%'
  },

  optionTitle: {
    color: '#fffbf7',
    fontFamily: 'Inter',
    fontSize: scale(36),
    textAlign: 'center'
  }
});

export default styles;
