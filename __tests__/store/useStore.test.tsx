import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { render } from '@testing-library/react-native';
import { render as customRender } from 'test-utils';
import createStore from 'store/createStore';
import useStore from 'store/useStore';

const store = createStore();

const TestView = (): ReactElement => {
  const store = useStore();

  return (
    <View testID="test-view">
      <Text>{String(store.theme)}</Text>
      <Text>{String(store.alert)}</Text>
    </View>
  );
};

test('selects MobX store', (): void => {
  const { getByText } = customRender(<TestView />);

  expect(getByText(String(store.theme))).toBeTruthy();
  expect(getByText(String(store.alert))).toBeTruthy();
});

test('raises error if not wrapped by StoreProvider', (): void => {
  expect(() => render(<TestView />)).toThrow();
});
