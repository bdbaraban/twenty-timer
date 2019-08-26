import React, { ReactElement, useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import { NavigationScreenProps } from 'react-navigation';
import { observer } from 'mobx-react';
import { useStore } from '../store';
import {
  BackgroundGradient,
  EntypoNavigator,
  TimerCountdown
} from '../components';
import { AppStyles, HomeScreenStyles } from '../styles';

const TWENTY_MINUTES = 1200; // Twenty minutes in seconds
const TWENTY_SECONDS = 20; // Twenty seconds

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

  // Play alert sound
  const alertSound = async (timer: TIMER_ENUM): Promise<void> => {
    if (timer === TIMER_ENUM.MIN) {
      await Audio.Sound.createAsync(
        require('../assets/sounds/to-the-point.mp3'),
        { shouldPlay: true }
      );
    } else {
      await Audio.Sound.createAsync(require('../assets/sounds/cheerful.mp3'), {
        shouldPlay: true
      });
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
    <View style={[AppStyles.screen, { backgroundColor: theme.solid }]}>
      <BackgroundGradient />

      <Animatable.View animation="fadeIn" duration={3000}>
        <TouchableOpacity
          onPress={(): void => {
            setRunning(!running);
            setTimer(TIMER_ENUM.MIN);
          }}
          style={[HomeScreenStyles.eye, { borderColor: theme.solid }]}
        >
          <View style={[HomeScreenStyles.retina, { borderColor: theme.solid }]}>
            {!running ? (
              <View
                style={[
                  HomeScreenStyles.pupil,
                  { backgroundColor: theme.solid }
                ]}
              />
            ) : (
              <TimerCountdown
                initialSeconds={
                  timer === TIMER_ENUM.MIN ? TWENTY_MINUTES : TWENTY_SECONDS
                }
                onTimeElapsed={
                  timer === TIMER_ENUM.MIN ? onTwentyMinutes : onTwentySeconds
                }
                style={[HomeScreenStyles.timer, { color: theme.solid }]}
              />
            )}
          </View>
        </TouchableOpacity>
      </Animatable.View>

      <EntypoNavigator
        onPress={(): boolean => navigation.navigate('Settings')}
        name="chevron-up"
      />
    </View>
  );
};

export default observer(HomeScreen);
