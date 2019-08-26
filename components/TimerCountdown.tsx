import React, { ReactElement, useEffect, useState } from 'react';
import { Text, TextProps } from 'react-native';

/**
 * TimerCountdown component prop types
 */
interface TimerCountdownProps extends TextProps {
  initialSeconds: number;
  onTimeElapsed: VoidFunction;
}

/**
 * Timer countdown component
 * @param initialSeconds - Initial countdown timer start time
 * @param onTimeElapsed - Function to call upon countdown completion
 */
const TimerCountdown = ({
  initialSeconds,
  onTimeElapsed,
  ...rest
}: TimerCountdownProps): ReactElement => {
  // Current seconds on timer
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  // Tick one second
  const tick = (): void => {
    setSeconds(seconds => seconds - 1);
  };

  // Format remaining seconds like `minutes`:`seconds`
  const getFormattedTime = (secs: number): string => {
    const minutes = Math.floor((secs % (60 * 60)) / 60);
    const seconds = Math.ceil((secs % (60 * 60)) % 60);

    const min = minutes < 10 ? `0${minutes}` : minutes;
    const sec = seconds < 10 ? `0${seconds}` : seconds;

    return `${min}:${sec}`;
  };

  useEffect((): VoidFunction | undefined => {
    if (seconds <= 0) {
      onTimeElapsed();
      return;
    }

    const intervalId = setInterval(tick, 1000);

    return (): void => {
      clearInterval(intervalId);
    };
  }, [initialSeconds]);

  return <Text {...rest}>{getFormattedTime(seconds)}</Text>;
};

export default TimerCountdown;
