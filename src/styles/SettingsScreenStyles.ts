import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import theme from '../theme';

/**
 * SettingsScreen styles
 */
const SettingsScreenStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '60%',
    justifyContent: 'center',
    width: '100%'
  },
  info: {
    alignItems: 'center',
    height: '20%',
    justifyContent: 'flex-end',
    width: '100%'
  },
  infoText: {
    alignItems: 'center',
    color: theme.palette.textSecondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: scale(18),
    justifyContent: 'center',
    textAlign: 'center'
  },
  line: {
    borderBottomColor: theme.palette.white.solid,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomWidth: 5,
    width: '70%'
  },
  link: {
    color: theme.palette.textSecondary,
    textDecorationLine: 'underline'
  },
  option: {
    alignItems: 'center',
    height: '40%',
    justifyContent: 'center',
    width: '100%'
  },
  optionText: {
    color: theme.palette.textPrimary,
    fontFamily: theme.typography.fontFamily,
    fontSize: scale(36),
    textAlign: 'center'
  }
});

export default SettingsScreenStyles;
