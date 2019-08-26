import { AppStore } from './types';
import theme from '../theme';

/**
 * Initialize the MobX store
 */
const createStore = (): AppStore => ({
  theme: { name: 'brown', ...theme.palette.brown },
  alert: true
});

export default createStore;
