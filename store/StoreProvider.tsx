import React, { ReactElement, ReactNode } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import createStore from './createStore';
import storeContext from './storeContext';

// StoreProvider component types
interface StoreProviderProps {
  children: ReactNode;
}

/**
 * MobX store context HOC
 */
const StoreProvider = ({ children }: StoreProviderProps): ReactElement => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
