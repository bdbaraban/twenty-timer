import React, { ReactElement, useEffect } from 'react';
import * as Font from 'expo-font';
import { StoreProvider } from './store';
import AppNavigator from './components/AppNavigator';

/**
 * Entry point of application
 */
const App = (): ReactElement => {
  // Asynchronously load font on app mount
  useEffect((): void => {
    Font.loadAsync({
      Inter: require('./assets/fonts/Inter-Regular.otf')
    });
  }, []);

  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  );
};

export default App;
