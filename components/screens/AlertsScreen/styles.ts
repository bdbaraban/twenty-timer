import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

/**
 * AlertsScreen styles
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '50%',
    justifyContent: 'center',
    width: '100%'
  },

  option: {
    alignItems: 'center',
    height: '50%',
    justifyContent: 'center',
    width: '100%'
  },

  optionTitle: {
    color: '#fffbf7',
    fontFamily: 'Inter',
    fontSize: scale(36),
    paddingBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },

  optionSubtitle: {
    color: '#fffbf7',
    fontFamily: 'Inter',
    fontSize: scale(18),
    textAlign: 'center'
  }
});

export default styles;
