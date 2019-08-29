<h1 align="center">Twenty Timer</h1>
<p align="center">
  A minimilast 20-minute/20-second eye care timer for mobile.
</p>

<p align="center">
  <img
    src="https://github.com/bdbaraban/twenty-timer/blob/master/src/assets/demo.gif"
    alt="Gif demonstrating app"
  />
</p>

[Twenty Timer is published on Expo - download it now!](https://expo.io/@bdbaraban/twenty-timer)

## Description :speech_balloon:

Twenty Timer is a mobile app for timing 20-minute/20-second intervals. During
prolonged screen use, optometrists recommend what is termed the 20-20-20 rule -
for every 20 minutes spent looking at a screen, look at something 20 feet
away for 20 seconds. Run this app to run automatic 20-minute/20-second intervals and
protect your eyes!

## Features :calling:

- Minimalist design.
- 6 color themes.
- Option to disable phone alerts and run timers automatically.

## Development :computer:

Twenty Timer is built in React Native and Expo, using TypeScript. Code highlights include:

- A custom, functional, entirely hook-based timer countdown component.
  - Works using a combination of `useEffect`, `useRef` and `useState`.
  - [TimerCountdown.tsx](./components/TimerCountdown.tsx)

```typescript
/**
 * Timer countdown component
 * @param initialSeconds - Initial countdown timer start time
 * @param onTimeElapsed - Function to call upon countdown completion
 */
const TimerCountdown = ({
  initialSeconds,
  onTimeElapsed,
  ...rest
}: TimerCountdownProps): ReactElement => {
  // Current seconds on timer
  const secondsRef = useRef<number>();
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  // Interval id
  const intervalRef = useRef<number>();

  // Tick one second
  const tick = (): void => {
    if (secondsRef.current === 0) {
      onTimeElapsed();
      clearInterval(intervalRef.current);
      secondsRef.current = undefined;
    } else if (secondsRef.current !== undefined) {
      setSeconds(--secondsRef.current);
    }
  };

  // Clear interval
  const clear = (): void => {
    clearInterval(intervalRef.current);
  };

  useEffect((): VoidFunction => {
    if (secondsRef.current === undefined) {
      setSeconds((secondsRef.current = initialSeconds));
    }

    const id = setInterval(tick, 1000);
    intervalRef.current = id;

    return clear;
  }, [initialSeconds, onTimeElapsed]);

  return <Text {...rest}>{getFormattedTime(seconds)}</Text>;
};
```

- Global state management with [Mobx](https://mobx.js.org/).
  - [store/](./store)

```typescript
/**
 * Initialize the MobX store
 */
const createStore = (): AppStore => ({
  theme: { ...theme.palette.brown },
  alert: true
});
```

```typescript
/**
 * MobX store context HOC
 */
const StoreProvider = ({ children }: StoreProviderProps): ReactElement => {
  const store = useLocalStore(createStore);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
```

```typescript
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
```

- Three-screen navigation handled using [React Navigation](https://reactnavigation.org/).
  - [AppNavigator.tsx](./AppNavigator.tsx)

```typescript
// Maps links to colors and alerts settings screens
const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Colors: {
      screen: ColorsScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Alerts: {
      screen: AlertsScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

// Maps link between home and settings screen
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: SettingsNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    mode: 'modal'
  }
);
```

## Dependencies :couple:

### Primary dependencies:

| Library                                                  | Version                                                                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [Expo](https://expo.io/)                                 | ^34.0.4                                                                                                                  |
| [React](https://reactjs.org/)                            | ^16.9.0                                                                                                                  |
| [React Native](https://facebook.github.io/react-native/) | [github.com/expo/react-native/archive/sdk-34.0.0.tar.gz](https://github.com/expo/react-native/archive/sdk-34.0.0.tar.gz) |
| [Mobx](https://mobx.js.org/)                             | ^5.13.0                                                                                                                  |
| [React Navigation](https://reactnavigation.org/)         | ^3.12.1                                                                                                                  |

View the complete list of dependencies in [package.json](./package.json).

## Limitations :confused:

In practice, Twenty Timer would be most practical as a background app, a timer that can run even while foregrounded. Unfortunately... React Native does not currently offer great support for background processes, even less so for React Native Expo.

Maybe possibly one day, I'll eject this application to introduce native background code, it will be wonderful, and I'll get the app officially published. But, at the moment, this is a bit beyond my scope :sweat_smile:.

## Author :black_nib:

- **Brennan D Baraban**
  - Check out my other [GitHub](https://github.com/bdbaraban) projects.
  - Connect with me on [LinkedIn](https://linkedin.com/in/bdbaraban).
  - Follow me on [Twitter](https://twitter.com/bdov_).
  - Be amazed by my [portfolio website](https://bdov.dev), also built in React!

## License :lock:

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
