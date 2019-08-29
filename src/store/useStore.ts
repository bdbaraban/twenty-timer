import { useContext } from 'react';
import StoreContext from './StoreContext';
import { AppStore } from './types';

/**
 * Select the MobX store context
 */
const useStore = (): AppStore => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Er, did you use StoreProvider?');
  }
  return store;
};

export default useStore;
