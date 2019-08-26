// MobX store type
export interface AppStore {
  theme: string; // Theme hex color
  alert: boolean; // Alerts on/off boolean
}

/**
 * Initialize the MobX store
 */
export const createStore = (): AppStore => ({
  theme: '#4b250c',
  alert: true
});
