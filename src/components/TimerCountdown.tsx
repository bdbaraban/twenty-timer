import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Text, TextProps } from 'react-native';
import getFormattedTime from '../utils/getFormattedTime';

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
  const secondsRef = useRef<number>();
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  // Interval id
  const intervalRef = useRef<number>();

  // Tick one second
  const tick = (): void => {
    if (secondsRef.current === 0) {
      onTimeElapsed();
      clearInterval(intervalRef.current);
      secondsRef.current = undefined;
    } else if (secondsRef.current !== undefined) {
      setSeconds(--secondsRef.current);
    }
  };

  // Clear interval
  const clear = (): void => {
    clearInterval(intervalRef.current);
  };

  useEffect((): VoidFunction => {
    if (secondsRef.current === undefined) {
      setSeconds((secondsRef.current = initialSeconds));
    }

    const id = setInterval(tick, 1000);
    intervalRef.current = id;

    return clear;
  }, [initialSeconds, onTimeElapsed]);

  return <Text {...rest}>{getFormattedTime(seconds)}</Text>;
};

export default TimerCountdown;
