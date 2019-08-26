<h1 align="center">Twenty Timer</h1>
<p align="center">
  A minimilast 20-20-20 eye care mobile application.
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

[View the app on Expo Snack.](https://snack.expo.io/@bdbaraban/twenty-timer)

## Description :speech_balloon:

Twenty Timer is a mobile app for timing 20-minute/20-second intervals. During
prolonged screen use, optometrists recommend what is termed the 20-20-20 rule -
for every 20 minutes spent looking at a screen, look at something 20 feet
away for 20 seconds. Run this app to run automatic 20 minute intervals and
protect your eyes!

### Features :calling:

* Minimalist design.
* 6 color themes.
* Option to turn 20 minute phone alerts on or off.

### Dependencies :couple:

| Library                      | Version |
| ---------------------------- | ------- |
| Expo                         | ^32.0.0 |
| React                        | 16.5.0  |
| Mobx                         | 5.9.0   |
| Mobx React                   | 5.4.3   |
| React Native Animatable      | 1.3.2   |
| React Native Elements        | 1.1.0   |
| React Native Paper           | 2.2.8   |
| React Native Size-Matters    | 0.1.6   |
| React Native Timer Countdown | 2.1.0   |
| React Navigation             | 3.3.2   |

View the complete list of dependencies in [package.json](./package.json).

## Development :computer:

Twenty Timer was built using React Native and Expo. The app has a current
working state on Expo Snack, but has not yet been published to the Apple
App or Google Play stores.

I would love to finish and publish this application; my primary restraint right now is a computer limitation.
Implementation of background alerts will require ejection of the app from Expo, yet, continued development on iOS
as a pure React Native project cannot happen without a Mac (I currently work on Windows).

In short - when I next own an Apple computer, I want to finish this application!

In-development:
* Full Android functionality (current `TouchableOpacity` styling bug glitching acvitation of timer).
* Background alerts (unsupported by Expo, requires export to pure React Native).

## Author :black_nib:

* __Brennan D Baraban__ <[bdbaraban](https://github.com/bdbaraban)>

## License :lock:

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
