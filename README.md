<h1 align="center">Twenty Timer</h1>
<p align="center">
  A minimilast 20-minute/20-second eye care timer for mobile.
</p>

<p align="center">
  <img
    src="https://github.com/bdbaraban/twenty-timer/blob/master/src/assets/demo.gif"
    alt="Gif demonstrating app"
    width="275"
  />
</p>

[Twenty Timer is published on Expo - download it now!](https://expo.io/@bdbaraban/twenty-timer)

## Description :speech_balloon:

Twenty Timer is a mobile app for timing 20-minute/20-second intervals. During
prolonged screen use, optometrists recommend what is termed the 20-20-20 rule -
for every 20 minutes spent looking at a screen, look at something 20 feet
away for 20 seconds. Run this app to run automatic 20-minute/20-second intervals and
protect your eyes!

### Features

- Minimalist design.
- 6 color themes.
- Option to disable phone alerts and run timers automatically.

## Code :high_brightness:

Twenty Timer is built in React Native and Expo, using TypeScript. Code highlights include:

- A custom, functional, entirely hook-based timer countdown component.

  - Works using a combination of `useEffect`, `useRef` and `useState`.
  - [TimerCountdown.tsx](./components/TimerCountdown.tsx)

- Global state management with [Mobx](https://mobx.js.org/).

  - [store/](./store)

- Three-screen navigation handled using [React Navigation](https://reactnavigation.org/).

  - [AppNavigator.tsx](./AppNavigator.tsx)

- A complete test suite of unittests and integration tests.

  - Written with [React Native Testing Library](https://www.native-testing-library.com/), run with [Jest](https://jestjs.io/)
  - [\_\_tests\_\_/](./__tests__)

## Dependencies :couple:

Primary:

| Library                                                                 | Version                                                                                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [Expo](https://expo.io/)                                                | ^34.0.4                                                                                                                  |
| [React](https://reactjs.org/)                                           | ^16.9.0                                                                                                                  |
| [React Native](https://facebook.github.io/react-native/)                | [github.com/expo/react-native/archive/sdk-34.0.0.tar.gz](https://github.com/expo/react-native/archive/sdk-34.0.0.tar.gz) |
| [Mobx](https://mobx.js.org/)                                            | ^5.13.0                                                                                                                  |
| [React Navigation](https://reactnavigation.org/)                        | ^3.12.1                                                                                                                  |
| [React Native Testing Library](https://www.native-testing-library.com/) | ^4.0.8                                                                                                                   |

View the complete list of dependencies in [package.json](./package.json).

## Development :computer:

To run Twenty Timer locally, you must have the following installed:

- [Node.js](https://nodejs.org/en/)
  - I develop Twenty Timer on Node v10.16.3.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/)
  - I develop Twenty Timer using yarn.

Then, install dependencies:

```
yarn install
# or
npm install
```

Finally, start the Expo development server

```
yarn start
# or
npm run start
```

## Tests :ruler:

Twenty Timer includes an entire test suite! Run it with the following:

```
yarn test
# or
npm test
```

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
