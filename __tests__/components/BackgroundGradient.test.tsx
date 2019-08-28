import React from 'react';
import { render, toJSON } from '@testing-library/react-native';
import { BackgroundGradient } from '../../components';

test('renders and matches snapshot', (): void => {
  const { container, getByTestId } = render(<BackgroundGradient />);

  expect(getByTestId('background-gradient')).toBeTruthy();
  expect(toJSON(container)).toMatchSnapshot();
});
