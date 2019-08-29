import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render, wait } from 'test-utils';
import SettingsScreen from 'screens/SettingsScreen';

const mockOpenURL = jest.fn();
jest.mock('Linking', () => ({
  openURL: mockOpenURL
}));

test('opens link to bdov.dev', async (): Promise<void> => {
  const { getByLabelText } = render(<SettingsScreen />);

  fireEvent.press(getByLabelText("Brennan D Baraban's portfolio website"));
  await wait(() => {
    expect(mockOpenURL).toHaveBeenCalled();
    expect(mockOpenURL).toHaveBeenCalledTimes(1);
    expect(mockOpenURL).toHaveBeenCalledWith('https://bdov.dev');
  });
});
