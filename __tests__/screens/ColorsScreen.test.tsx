import React from 'react';
import { fireEvent, wait } from '@testing-library/react-native';
import { render } from 'test-utils';
import ColorsScreen from 'screens/ColorsScreen';
import theme from 'theme';

test('toggles all color theme options', async (): Promise<void> => {
  const { getByLabelText, getByTestId } = render(<ColorsScreen />);

  // Theme is initially brown
  expect(getByTestId('colors-screen').props.style.backgroundColor).toEqual(
    theme.palette.brown.solid
  );
  expect(getByLabelText('set brown theme').props.style.backgroundColor).toEqual(
    theme.palette.brown.transparent
  );

  // Set green theme
  fireEvent.press(getByLabelText('set green theme'));
  await wait(() => {
    expect(getByTestId('colors-screen').props.style.backgroundColor).toEqual(
      theme.palette.green.solid
    );
    expect(
      getByLabelText('set green theme').props.style.backgroundColor
    ).toEqual(theme.palette.green.transparent);
  });

  // Set blue theme
  fireEvent.press(getByLabelText('set blue theme'));
  await wait(() => {
    expect(getByTestId('colors-screen').props.style.backgroundColor).toEqual(
      theme.palette.blue.solid
    );
    expect(
      getByLabelText('set blue theme').props.style.backgroundColor
    ).toEqual(theme.palette.blue.transparent);
  });

  // Set grey theme
  fireEvent.press(getByLabelText('set grey theme'));
  await wait(() => {
    expect(getByTestId('colors-screen').props.style.backgroundColor).toEqual(
      theme.palette.grey.solid
    );
    expect(
      getByLabelText('set grey theme').props.style.backgroundColor
    ).toEqual(theme.palette.grey.transparent);
  });

  // Set purple theme
  fireEvent.press(getByLabelText('set purple theme'));
  await wait(() => {
    expect(getByTestId('colors-screen').props.style.backgroundColor).toEqual(
      theme.palette.purple.solid
    );
    expect(
      getByLabelText('set purple theme').props.style.backgroundColor
    ).toEqual(theme.palette.purple.transparent);
  });

  // Return to brown theme
  fireEvent.press(getByLabelText('set brown theme'));
  await wait(() => {
    expect(getByTestId('colors-screen').props.style.backgroundColor).toEqual(
      theme.palette.brown.solid
    );
    expect(
      getByLabelText('set brown theme').props.style.backgroundColor
    ).toEqual(theme.palette.brown.transparent);
  });
});
