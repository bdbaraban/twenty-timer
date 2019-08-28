import React from 'react';
import { render, wait } from '@testing-library/react-native';
import TimerCountdown from 'components/TimerCountdown';

afterEach((): void => {
  jest.clearAllTimers();
});

test('renders initial time', (): void => {
  const { getByText } = render(
    <TimerCountdown initialSeconds={1200} onTimeElapsed={(): void => {}} />
  );

  expect(getByText(/20:00/i)).toBeTruthy();
});

test('counts down to 0, calls onTimeElapsed, and resets timer upon completion', async (): Promise<
  void
> => {
  const onTimeElapsed = jest.fn((): void => {});

  const { getByText, rerender } = render(
    <TimerCountdown initialSeconds={1} onTimeElapsed={onTimeElapsed} />
  );

  await wait((): void => {
    expect(getByText(/^.*:00$/i)).toBeTruthy();
    expect(onTimeElapsed).toHaveBeenCalledTimes(1);
  });

  rerender(<TimerCountdown initialSeconds={2} onTimeElapsed={onTimeElapsed} />);

  expect(getByText(/^.*:02$/i)).toBeTruthy();
});

test('preserves time but uses new function on onTimeElapsed prop change', async (): Promise<
  void
> => {
  const originalOnTimeElapsed = jest.fn((): void => {});
  const updatedOnTimeElapsed = jest.fn((): void => {});

  const { getByText, rerender } = render(
    <TimerCountdown initialSeconds={1} onTimeElapsed={originalOnTimeElapsed} />
  );
  rerender(
    <TimerCountdown initialSeconds={2} onTimeElapsed={updatedOnTimeElapsed} />
  );

  expect(getByText(/^.*:0(?!2).$/i)).toBeTruthy();
  await wait(() => {
    expect(originalOnTimeElapsed).toHaveBeenCalledTimes(0);
    expect(updatedOnTimeElapsed).toHaveBeenCalledTimes(1);
  });
});

test('clears interval on unmount', (): void => {
  jest.useFakeTimers();

  const { unmount } = render(
    <TimerCountdown initialSeconds={1} onTimeElapsed={(): void => {}} />
  );

  unmount();

  expect(jest.getTimerCount()).toEqual(0);
});
