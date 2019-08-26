import { StyleSheet } from 'react-native';
import theme from './theme';

// Global application style
const AppStyle = StyleSheet.create({
  gradient: {
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  icon: {
    color: theme.white
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

export default AppStyle;
