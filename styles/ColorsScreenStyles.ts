import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import theme from '../theme';

// ColorsScreen styles
const ColorsScreenStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '70%',
    justifyContent: 'center',
    width: '100%'
  },
  option: {
    alignItems: 'center',
    height: '16.67%',
    justifyContent: 'center',
    width: '100%'
  },
  optionTitle: {
    color: theme.palette.textPrimary,
    fontFamily: theme.typography.fontFamily,
    fontSize: scale(36),
    textAlign: 'center'
  }
});

export default ColorsScreenStyles;
