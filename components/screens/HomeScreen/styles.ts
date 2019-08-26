import { Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import theme from '../../theme';

const styles = StyleSheet.create({
  eye: {
    alignItems: 'center',
    backgroundColor: theme.white,
    borderBottomLeftRadius: scale(150),
    borderBottomRightRadius: scale(15),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(150),
    borderWidth: scale(10),
    height: scale(225),
    justifyContent: 'center',
    transform: [
      { rotate: Platform.OS === 'ios' ? '-45deg' : `${-(3.14159 / 4)}rad` }
    ],
    width: scale(225)
  },
  pupil: {
    borderRadius: scale(100),
    height: '60%',
    width: '60%'
  },
  retina: {
    alignItems: 'center',
    borderRadius: scale(100),
    borderWidth: scale(10),
    height: '70%',
    justifyContent: 'center',
    width: '70%'
  },
  timer: {
    fontFamily: 'Inter',
    fontSize: scale(36),
    transform: [
      { rotate: Platform.OS === 'ios' ? '45deg' : `${3.14159 / 4}rad` }
    ]
  }
});

export default styles;
