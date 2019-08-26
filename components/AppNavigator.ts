import { createAppContainer, createStackNavigator } from 'react-navigation';
import {
  AlertsScreen,
  ColorsScreen,
  HomeScreen,
  SettingsScreen
} from '../screens';

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
    headerMode: 'none'
  }
);

// Maps link between home and settings screen
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Settings: SettingsNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    mode: 'modal'
  }
);

export default createAppContainer(AppNavigator);
