import theme from '../theme';
import { AppStore } from './types';

/**
 * Initialize the MobX store
 */
const createStore = (): AppStore => ({
  theme: { ...theme.palette.brown },
  alert: true
});

export default createStore;
