import React from 'react';
import { fireEvent, wait } from '@testing-library/react-native';
import { render } from 'test-utils';
import HomeScreen from 'screens/HomeScreen';

test('toggles timer back and forth', async (): Promise<void> => {
  const { getByLabelText, queryByTestId } = render(<HomeScreen />);

  // Timer is initially off
  expect(queryByTestId('pupil')).toBeTruthy();

  // Toggle timer on
  fireEvent.press(getByLabelText(/^eye-shaped countdown timer(.*?)/i));
  await wait(() => {
    expect(queryByTestId('pupil')).toBeFalsy();
    expect(queryByTestId('20 minute timer')).toBeTruthy();
  });

  // Toggle timer off
  fireEvent.press(getByLabelText(/^eye-shaped countdown timer(.*?)/i));
  await wait(() => {
    expect(queryByTestId('pupil')).toBeTruthy();
    expect(queryByTestId('20 minute timer')).toBeFalsy();
  });
});
