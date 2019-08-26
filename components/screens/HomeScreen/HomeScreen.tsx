import React, { ReactElement, useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { NavigationScreenProps } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import { observer } from 'mobx-react';
import { useStore } from '../../../store';
import TimerCountdown from '../../TimerCountdown';
import AppStyle from '../../AppStyle';
import styles from './styles';

const TWENTY_MINUTES = 1200; // Twenty minutes in seconds
const TWENTY_SECONDS = 20; // Twenty seconds in seconds

// Timer state type enumeration
enum TIMER_ENUM {
  MIN = 0,
  SEC = 1
}

/**
 * Primary eye timer screen
 * @param navigation - react-navigation prop
 */
const HomeScreen = ({ navigation }: NavigationScreenProps): ReactElement => {
  const { alert, theme } = useStore();
  const [running, setRunning] = useState<boolean>(false);
  const [timer, setTimer] = useState<TIMER_ENUM>(TIMER_ENUM.MIN);

  const alertSound = async (timer: TIMER_ENUM): Promise<void> => {
    if (timer === TIMER_ENUM.MIN) {
      await Audio.Sound.createAsync(
        require('../../../assets/sounds/to-the-point.mp3'),
        { shouldPlay: true }
      );
    } else {
      await Audio.Sound.createAsync(
        require('../../../assets/sounds/cheerful.mp3'),
        { shouldPlay: true }
      );
    }
  };

  // Function called upon completion of 20 minute timer
  const onTwentyMinutes = (): void => {
    alertSound(TIMER_ENUM.MIN);
    if (alert) {
      Alert.alert(
        'Twenty Minutes!',
        'Look at something 20 feet away for 20 seconds.',
        [
          {
            text: 'OK',
            onPress: (): void => setTimer(TIMER_ENUM.SEC)
          }
        ],
        { cancelable: false }
      );
    } else {
      setTimer(TIMER_ENUM.SEC);
    }
  };

  // Function called upon completion of 20 second timer
  const onTwentySeconds = (): void => {
    alertSound(TIMER_ENUM.SEC);
    if (alert) {
      Alert.alert(
        'Twenty Minutes!',
        'Look at something 20 feet away for 20 seconds.',
        [
          {
            text: 'OK',
            onPress: (): void => setTimer(TIMER_ENUM.MIN)
          }
        ],
        { cancelable: false }
      );
    } else {
      setTimer(TIMER_ENUM.MIN);
    }
  };

  return (
    <View style={[AppStyle.screen, { backgroundColor: theme }]}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.65)']}
        style={AppStyle.gradient}
      />

      <Animatable.View animation="fadeIn" duration={3000}>
        <TouchableOpacity
          onPress={(): void => {
            setRunning(!running);
            setTimer(TIMER_ENUM.MIN);
          }}
          style={[styles.eye, { borderColor: theme }]}
        >
          <View style={[styles.retina, { borderColor: theme }]}>
            {!running ? (
              <View style={[styles.pupil, { backgroundColor: theme }]} />
            ) : timer === TIMER_ENUM.MIN ? (
              <TimerCountdown
                initialSeconds={TWENTY_MINUTES}
                onTimeElapsed={onTwentyMinutes}
                style={[styles.timer, { color: theme }]}
              />
            ) : (
              <TimerCountdown
                initialSeconds={TWENTY_SECONDS}
                onTimeElapsed={onTwentySeconds}
                style={[styles.timer, { color: theme }]}
              />
            )}
          </View>
        </TouchableOpacity>
      </Animatable.View>

      <TouchableOpacity
        onPress={(): boolean => navigation.navigate('Settings')}
        style={AppStyle.navigator}
      >
        <View>
          <Entypo name="chevron-up" size={scale(50)} style={AppStyle.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default observer(HomeScreen);
