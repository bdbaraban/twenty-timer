import React from 'react';
import { fireEvent, render, toJSON } from '@testing-library/react-native';
import EntypoNavigator from 'components/EntypoNavigator';

test('renders and matches snapshot', (): void => {
  const { container, getByTestId } = render(
    <EntypoNavigator name="chevron-up" />
  );

  expect(getByTestId('entypo-navigator')).toBeTruthy();
  expect(toJSON(container)).toMatchSnapshot();
});

test('spreads props', (): void => {
  const props = {
    accessibilityLabel: 'entypo-navigator',
    name: 'chevron-up',
    onPress: jest.fn((): void => {})
  };
  const { getByLabelText } = render(<EntypoNavigator {...props} />);

  // Sets accessibilityLabel
  const entypoNavigator = getByLabelText(props.accessibilityLabel);
  expect(entypoNavigator).toBeTruthy();

  // Sets onPress method
  fireEvent.press(entypoNavigator);
  expect(props.onPress).toHaveBeenCalled();
});
