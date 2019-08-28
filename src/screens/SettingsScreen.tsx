import React, { ReactElement } from 'react';
import { Linking, Text, TouchableHighlight, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { observer } from 'mobx-react';
import BackgroundGradient from '../components/BackgroundGradient';
import EntypoNavigator from '../components/EntypoNavigator';
import useStore from '../store/useStore';
import AppStyles from '../styles/AppStyles';
import SettingsScreenStyles from '../styles/SettingsScreenStyles';

/**
 * Settings screen linking to color and alerts menus
 * @param navigation - react-navigation prop
 */
const SettingsScreen = ({
  navigation
}: NavigationScreenProps): ReactElement => {
  const { theme } = useStore();

  return (
    <View
      accessibilityLabel="settings screen"
      style={[AppStyles.screen, { backgroundColor: theme.solid }]}
    >
      <BackgroundGradient />

      <View style={SettingsScreenStyles.container}>
        <TouchableHighlight
          accessibilityLabel="to colors screen"
          onPress={(): boolean => navigation.navigate('Colors')}
          style={SettingsScreenStyles.option}
          underlayColor={theme.solid}
        >
          <Text style={SettingsScreenStyles.optionText}>Colors</Text>
        </TouchableHighlight>

        <View style={SettingsScreenStyles.line} />

        <TouchableHighlight
          accessibilityLabel="to alerts screen"
          onPress={(): boolean => navigation.navigate('Alerts')}
          style={SettingsScreenStyles.option}
          underlayColor={theme.solid}
        >
          <Text style={SettingsScreenStyles.optionText}>Alerts</Text>
        </TouchableHighlight>

        <View style={SettingsScreenStyles.info}>
          <Text style={SettingsScreenStyles.infoText}>
            Developed by{'\n'}
            <Text
              style={SettingsScreenStyles.link}
              onPress={(): Promise<any> => Linking.openURL('https://bdov.dev')}
            >
              bdov.dev
            </Text>
          </Text>
        </View>
      </View>

      <EntypoNavigator
        accessibilityLabel="back to home screen"
        onPress={(): boolean => navigation.navigate('Home')}
        name="chevron-down"
      />
    </View>
  );
};

export default observer(SettingsScreen);
