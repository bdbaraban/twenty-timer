import React, { ReactElement, ReactNode } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import createStore from './createStore';
import StoreContext from './StoreContext';

// StoreProvider component types
interface StoreProviderProps {
  children?: ReactNode;
}

/**
 * MobX store context HOC
 */
const StoreProvider = ({ children }: StoreProviderProps): ReactElement => {
  const store = useLocalStore(createStore);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
