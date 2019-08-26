<h1 align="center">Twenty Timer</h1>
<p align="center">
  A minimilast 20-20-20 eye timer mobile application.
</p>

<p align="center">
  <img src="https://github.com/bdbaraban/twenty_timer/blob/master/screenshots/collage.png"
   alt="Screenshot collage"
  />
</p>
<p align="center">
  <img src="https://github.com/bdbaraban/twenty_timer/blob/master/screenshots/collage2.png"
   alt="Screenshot collage"
  />
</p>

[See Twenty Timer in action on Expo Snack!](https://snack.expo.io/@bdbaraban/twenty-timer)

## Description :speech_balloon:

Twenty Timer is a mobile app for timing 20-minute/20-second intervals. During
prolonged screen use, optometrists recommend what is termed the 20-20-20 rule -
for every 20 minutes spent looking at a screen, look at something 20 feet
away for 20 seconds. Run this app to run automatic 20-minute/20-second intervals and
protect your eyes!

## Features :calling:

- :blossom: Minimalist design.
- :rainbow: 6 color themes.
- :mobile_phone_off: Option to disable phone alerts and run timers automatically.

## Development :computer:

Twenty Timer is built in React Native and Expo, using TypeScript. Code highlights include:

- A custom, functional, entirely hook-based timer countdown component.
  - Works using a combination of `useEffect`, `useRef` and `useState`.
  - [TimerCountdown.tsx](./components/TimerCountdown.tsx)
- Global state management with [Mobx](https://mobx.js.org/).
  - [store/](./store)
- Three-screen navigation handled using [React Navigation](https://reactnavigation.org/).
  - [AppNavigator.tsx](./AppNavigator.tsx)

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

In practice, this app would be most practical as a background app, a timer that can run even while foregrounded. Unfortunately... React Native does not currently offer great support for background processes, even less so for React Native Expo.

Maybe possibly one day, I'll eject this application to introduce native background code, it will be wonderful, and I'll get the app officially published. But, at the moment, this is a bit beyond my scope :sweat_smile:.

## Author :black_nib:

- **Brennan D Baraban**
  - [GitHub](https://github.com/bdbaraban)
  - [LinkedIn](https://linkedin.com/in/bdbaraban)
  - [Portfolio](https://bdov.dev)

### License :lock:

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
