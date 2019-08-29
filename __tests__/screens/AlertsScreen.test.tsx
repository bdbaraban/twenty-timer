import React from 'react';
import { fireEvent, wait } from '@testing-library/react-native';
import { render } from 'test-utils';
import AlertsScreen from 'screens/AlertsScreen';
import theme from 'theme';

test('toggles alerts setting on and off', async (): Promise<void> => {
  const { getByLabelText } = render(<AlertsScreen />);

  // Alerts are initially on
  expect(getByLabelText('turn alerts on').props.style.backgroundColor).toEqual(
    theme.palette.brown.transparent
  );

  // Turn alerts off
  fireEvent.press(getByLabelText('turn alerts off'));
  await wait(() => {
    expect(
      getByLabelText('turn alerts off').props.style.backgroundColor
    ).toEqual(theme.palette.brown.transparent);
  });

  // Turn alerts back on
  fireEvent.press(getByLabelText('turn alerts on'));
  await wait(() => {
    expect(
      getByLabelText('turn alerts on').props.style.backgroundColor
    ).toEqual(theme.palette.brown.transparent);
  });
});
