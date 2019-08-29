import React from 'react';
import { render } from 'test-utils';
import AlertsScreen from 'screens/AlertsScreen';
import ColorsScreen from 'screens/ColorsScreen';
import HomeScreen from 'screens/HomeScreen';
import SettingsScreen from 'screens/SettingsScreen';
import createStore from 'store/createStore';

const store = createStore();

test('AlertsScreen tracks theme and alert settings from MobX store', (): void => {
  const { getByLabelText, getByTestId } = render(<AlertsScreen />);

  expect(getByTestId('alerts-screen').props.style.backgroundColor).toEqual(
    store.theme.solid
  );

  expect(getByLabelText('turn alerts on').props.style.backgroundColor).toEqual(
    store.theme.transparent
  );
});

test('ColorsScreen tracks theme setting from MobX store', (): void => {
  const { getByTestId } = render(<ColorsScreen />);

  expect(getByTestId('colors-screen').props.style.backgroundColor).toEqual(
    store.theme.solid
  );
});

test('HomeScreen tracks theme and alert settings from MobX store', (): void => {
  const { getByLabelText, getByTestId } = render(<HomeScreen />);

  expect(getByTestId('home-screen').props.style.backgroundColor).toEqual(
    store.theme.solid
  );

  expect(getByLabelText(/^(.*?)alerts on completion$/i)).toBeTruthy();
});

test('SettingsScreen tracks theme setting from MobX store', (): void => {
  const { getByTestId } = render(<SettingsScreen />);

  expect(getByTestId('settings-screen').props.style.backgroundColor).toEqual(
    store.theme.solid
  );
});
