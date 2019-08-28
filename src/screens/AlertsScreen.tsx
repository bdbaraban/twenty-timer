import React, { ReactElement } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { observer } from 'mobx-react';
import BackgroundGradient from '../components/BackgroundGradient';
import EntypoNavigator from '../components/EntypoNavigator';
import useStore from '../store/useStore';
import AppStyles from '../styles/AppStyles';
import AlertsScreenStyles from '../styles/AlertsScreenStyles';

/**
 * Options screen for selecting alerts setting
 * @param navigation - react-navigation prop
 */
const AlertsScreen = ({ navigation }: NavigationScreenProps): ReactElement => {
  const store = useStore();

  return (
    <View
      accessibilityLabel="alerts screen"
      style={[AppStyles.screen, { backgroundColor: store.theme.solid }]}
    >
      <BackgroundGradient />

      <View style={AlertsScreenStyles.container}>
        <TouchableHighlight
          onPress={(): void => {
            store.alert = true;
          }}
          style={
            store.alert
              ? [
                  AlertsScreenStyles.option,
                  { backgroundColor: store.theme.transparent }
                ]
              : AlertsScreenStyles.option
          }
          underlayColor={store.theme.solid}
        >
          <View style={AlertsScreenStyles.optionView}>
            <Text style={AlertsScreenStyles.optionTitle}>On</Text>
            <Text style={AlertsScreenStyles.optionSubtitle}>
              After twenty minutes, alert{'\n'}
              before breaking twenty seconds.
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={(): void => {
            store.alert = false;
          }}
          style={
            !store.alert
              ? [
                  AlertsScreenStyles.option,
                  { backgroundColor: store.theme.transparent }
                ]
              : AlertsScreenStyles.option
          }
          underlayColor={store.theme.solid}
        >
          <View style={AlertsScreenStyles.optionView}>
            <Text style={AlertsScreenStyles.optionTitle}>Off</Text>
            <Text style={AlertsScreenStyles.optionSubtitle}>
              After twenty minutes, automatically{'\n'}
              break twenty seconds.
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      <EntypoNavigator
        accessibilityLabel="back to settings screen"
        onPress={(): boolean => navigation.goBack()}
        name="chevron-left"
      />
    </View>
  );
};

export default observer(AlertsScreen);
