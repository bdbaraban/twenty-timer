import { createContext } from 'react';
import { AppStore } from './types';

// MobX store context
const StoreContext = createContext<AppStore | null>(null);

export default StoreContext;
