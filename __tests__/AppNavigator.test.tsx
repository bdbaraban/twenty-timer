import React from 'react';
import { fireEvent, waitForElement } from '@testing-library/react-native';
import { render } from 'test-utils';
import AppNavigator from 'AppNavigator';

test('can navigate entire app', async () => {
  const { getByTestId } = render(<AppNavigator />);

  // Start on home screen
  expect(getByTestId('home-screen')).toBeTruthy();

  // Navigate to settings screen
  fireEvent.press(getByTestId('home-to-settings'));
  expect(
    await waitForElement(() => getByTestId('settings-screen'))
  ).toBeTruthy();

  // Navigate to colors screen
  fireEvent.press(getByTestId('settings-to-colors'));
  expect(await waitForElement(() => getByTestId('colors-screen'))).toBeTruthy();

  // Navigate back to settings screen
  fireEvent.press(getByTestId('colors-to-settings'));
  expect(
    await waitForElement(() => getByTestId('settings-screen'))
  ).toBeTruthy();

  // Navigate to alerts screen
  fireEvent.press(getByTestId('settings-to-alerts'));
  expect(await waitForElement(() => getByTestId('alerts-screen'))).toBeTruthy();

  // Navigate back to settings screen
  fireEvent.press(getByTestId('alerts-to-settings'));
  expect(
    await waitForElement(() => getByTestId('settings-screen'))
  ).toBeTruthy();

  // Navigate back to home screen
  fireEvent.press(getByTestId('settings-to-home'));
  expect(await waitForElement(() => getByTestId('home-screen'))).toBeTruthy();
});
