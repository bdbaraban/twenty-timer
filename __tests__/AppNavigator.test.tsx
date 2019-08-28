import React from 'react';
import { fireEvent, waitForElement } from '@testing-library/react-native';
import { render } from 'test-utils';
import AppNavigator from '../AppNavigator';

test('can navigate entire app', async () => {
  const { getByLabelText } = render(<AppNavigator />);

  // Start on home screen
  expect(getByLabelText('home screen')).toBeTruthy();

  // Navigate to settings screen
  fireEvent.press(getByLabelText('to settings screen'));
  expect(
    await waitForElement(() => getByLabelText('settings screen'))
  ).toBeTruthy();

  // Navigate to colors screen
  fireEvent.press(getByLabelText('to colors screen'));
  expect(
    await waitForElement(() => getByLabelText('colors screen'))
  ).toBeTruthy();

  // Navigate back to settings screen
  fireEvent.press(getByLabelText('back to settings screen'));
  expect(
    await waitForElement(() => getByLabelText('settings screen'))
  ).toBeTruthy();

  // Navigate to alerts screen
  fireEvent.press(getByLabelText('to alerts screen'));
  expect(
    await waitForElement(() => getByLabelText('alerts screen'))
  ).toBeTruthy();

  // Navigate back to settings screen
  fireEvent.press(getByLabelText('back to settings screen'));
  expect(
    await waitForElement(() => getByLabelText('settings screen'))
  ).toBeTruthy();

  // Navigate back to home screen
  fireEvent.press(getByLabelText('back to home screen'));
  expect(
    await waitForElement(() => getByLabelText('home screen'))
  ).toBeTruthy();
});
