import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

/**
 * SettingsScreen styles
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    width: '100%'
  },

  option: {
    alignItems: 'center',
    height: '40%',
    justifyContent: 'center',
    width: '100%'
  },

  line: {
    borderBottomColor: '#fffbf7',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomWidth: 5,
    width: '70%'
  },

  optionText: {
    color: '#fffbf7',
    fontFamily: 'Inter',
    fontSize: scale(36),
    textAlign: 'center'
  },

  info: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '20%',
    width: '100%'
  },

  infoText: {
    alignItems: 'center',
    color: '#d3d3d3',
    fontFamily: 'Inter',
    fontSize: scale(18),
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default styles;
