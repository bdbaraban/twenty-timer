// MobX store type
export interface AppStore {
  theme: {
    name: string; // Theme color name
    solid: string; // Theme solid rgba
    transparent: string; // Theme transparent rgba
  };
  alert: boolean; // Alerts on/off boolean
}
