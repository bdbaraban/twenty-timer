import React, { ReactElement } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { observer } from 'mobx-react';
import { useStore } from '../store';
import { BackgroundGradient, EntypoNavigator } from '../components';
import { AppStyles, ColorsScreenStyles } from '../styles';
import theme from '../theme';

/**
 * Options screen for setting color theme
 * @param navigation - react-navigation prop
 */
const ColorsScreen = ({ navigation }: NavigationScreenProps): ReactElement => {
  const store = useStore();

  return (
    <View style={[AppStyles.screen, { backgroundColor: store.theme.solid }]}>
      <BackgroundGradient />

      <View style={ColorsScreenStyles.container}>
        <TouchableHighlight
          onPress={(): void => {
            store.theme = { name: 'brown', ...theme.palette.brown };
          }}
          style={
            store.theme.name === 'brown'
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
            store.theme = { name: 'green', ...theme.palette.green };
          }}
          style={
            store.theme.name === 'green'
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
            store.theme = { name: 'blue', ...theme.palette.blue };
          }}
          style={
            store.theme.name === 'blue'
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
            store.theme = { name: 'grey', ...theme.palette.grey };
          }}
          style={
            store.theme.name === 'grey'
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
            store.theme = { name: 'purple', ...theme.palette.purple };
          }}
          style={
            store.theme.name === 'purple'
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
        onPress={(): boolean => navigation.goBack()}
        name="chevron-left"
      />
    </View>
  );
};

export default observer(ColorsScreen);
