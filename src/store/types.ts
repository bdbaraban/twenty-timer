// MobX store type
export interface AppStore {
  theme: {
    solid: string; // Theme solid rgba
    transparent: string; // Theme transparent rgba
  };
  alert: boolean; // Alerts on/off boolean
}
