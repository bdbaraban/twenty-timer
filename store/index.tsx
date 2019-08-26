import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext
} from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore, AppStore } from './createStore';

// MobX store context type
const storeContext = createContext<AppStore | null>(null);

/**
 * StoreProvider component types
 */
interface StoreProviderProps {
  children: ReactNode;
}

/**
 * MobX store context HOC
 */
export const StoreProvider = ({
  children
}: StoreProviderProps): ReactElement => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

/**
 * Select the MobX store context
 */
export const useStore = (): AppStore => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('Er, did you use StoreProvider?');
  }
  return store;
};
