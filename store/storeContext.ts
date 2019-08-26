import { createContext } from 'react';
import { AppStore } from './types';

// MobX store context
const storeContext = createContext<AppStore | null>(null);

export default storeContext;
