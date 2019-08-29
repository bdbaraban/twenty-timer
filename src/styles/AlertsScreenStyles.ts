import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import theme from '../theme';

// AlertsScreen styles
const AlertsScreenStyles = StyleSheet.create({
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
  optionSubtitle: {
    color: theme.palette.textPrimary,
    fontFamily: theme.typography.fontFamily,
    fontSize: scale(18),
    textAlign: 'center'
  },
  optionTitle: {
    color: theme.palette.textPrimary,
    fontFamily: theme.typography.fontFamily,
    fontSize: scale(36),
    paddingBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  optionView: {
    width: '90%'
  }
});

export default AlertsScreenStyles;
