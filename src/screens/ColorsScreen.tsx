import React, { ReactElement } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { observer } from 'mobx-react';
import BackgroundGradient from '../components/BackgroundGradient';
import EntypoNavigator from '../components/EntypoNavigator';
import useStore from '../store/useStore';
import AppStyles from '../styles/AppStyles';
import ColorsScreenStyles from '../styles/ColorsScreenStyles';
import theme from '../theme';

/**
 * Options screen for setting color theme
 * @param navigation - react-navigation prop
 */
const ColorsScreen = ({ navigation }: NavigationScreenProps): ReactElement => {
  const store = useStore();

  return (
    <View
      accessibilityLabel="colors screen"
      style={[AppStyles.screen, { backgroundColor: store.theme.solid }]}
    >
      <BackgroundGradient />

      <View style={ColorsScreenStyles.container}>
        <TouchableHighlight
          onPress={(): void => {
            store.theme = { ...theme.palette.brown };
          }}
          style={
            store.theme.solid === theme.palette.brown.solid
              ? [
                  ColorsScreenStyles.option,
                  { backgroundColor: store.theme.transparent }
                ]
              : ColorsScreenStyles.option
          }
          underlayColor={theme.palette.brown.solid}
        >
          <Text style={ColorsScreenStyles.optionTitle}>Brown</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={(): void => {
            store.theme = { ...theme.palette.green };
          }}
          style={
            store.theme.solid === theme.palette.green.solid
              ? [
                  ColorsScreenStyles.option,
                  { backgroundColor: store.theme.transparent }
                ]
              : ColorsScreenStyles.option
          }
          underlayColor={theme.palette.green.solid}
        >
          <Text style={ColorsScreenStyles.optionTitle}>Green</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={(): void => {
            store.theme = { ...theme.palette.blue };
          }}
          style={
            store.theme.solid === theme.palette.blue.solid
              ? [
                  ColorsScreenStyles.option,
                  { backgroundColor: store.theme.transparent }
                ]
              : ColorsScreenStyles.option
          }
          underlayColor={theme.palette.blue.solid}
        >
          <Text style={ColorsScreenStyles.optionTitle}>Blue</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={(): void => {
            store.theme = { ...theme.palette.grey };
          }}
          style={
            store.theme.solid === theme.palette.grey.solid
              ? [
                  ColorsScreenStyles.option,
                  { backgroundColor: store.theme.transparent }
                ]
              : ColorsScreenStyles.option
          }
          underlayColor={theme.palette.grey.solid}
        >
          <Text style={ColorsScreenStyles.optionTitle}>Grey</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={(): void => {
            store.theme = { ...theme.palette.purple };
          }}
          style={
            store.theme.solid === theme.palette.purple.solid
              ? [
                  ColorsScreenStyles.option,
                  { backgroundColor: store.theme.transparent }
                ]
              : ColorsScreenStyles.option
          }
          underlayColor={theme.palette.purple.solid}
        >
          <Text style={ColorsScreenStyles.optionTitle}>Purple</Text>
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

export default observer(ColorsScreen);
