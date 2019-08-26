import { useContext } from 'react';
import storeContext from './storeContext';
import { AppStore } from './types';

/**
 * Select the MobX store context
 */
const useStore = (): AppStore => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('Er, did you use StoreProvider?');
  }
  return store;
};

export default useStore;
