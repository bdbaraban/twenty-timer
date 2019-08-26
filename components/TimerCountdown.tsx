import React, { ReactElement, useEffect, useRef, useState } from 'react';
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

  // Format remaining seconds like `minutes`:`seconds`
  const getFormattedTime = (secs: number): string => {
    const minutes = Math.floor((secs % (60 * 60)) / 60);
    const seconds = Math.ceil((secs % (60 * 60)) % 60);

    const min = minutes < 10 ? `0${minutes}` : minutes;
    const sec = seconds < 10 ? `0${seconds}` : seconds;

    return `${min}:${sec}`;
  };

  useEffect((): VoidFunction => {
    if (secondsRef.current === undefined) {
      setSeconds((secondsRef.current = initialSeconds));
    }

    const id = setInterval(tick, 1000);
    intervalRef.current = id;

    return (): void => {
      clearInterval(intervalRef.current);
    };
  }, [initialSeconds, onTimeElapsed]);

  return <Text {...rest}>{getFormattedTime(seconds)}</Text>;
};

export default TimerCountdown;
