import { StyleSheet } from 'react-native';
import theme from '../theme';

// Base application styles
const AppStyles = StyleSheet.create({
  gradient: {
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  icon: {
    color: theme.palette.white.solid
  },
  navigator: {
    bottom: '5%',
    position: 'absolute',
    right: '5%'
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default AppStyles;
