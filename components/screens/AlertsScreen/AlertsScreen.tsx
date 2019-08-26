import React, { ReactElement } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Entypo } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';
import { observer } from 'mobx-react';
import { scale } from 'react-native-size-matters';
import { useStore } from '../../../store';
import AppStyle from '../../AppStyle';
import styles from './styles';

/**
 * AlertsScreen component prop types
 */
interface AlertsScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

/**
 * Options screen for selecting alerts setting
 */
const AlertsScreen = ({ navigation }: AlertsScreenProps): ReactElement => {
  const store = useStore();

  const getActiveStyle = (setting: boolean) => {
    if (setting === store.alert) {
      switch (store.theme) {
        case '#4b250c':
          return [styles.option, { backgroundColor: 'rgba(75, 37, 12, .5)' }];
        case '#4b450c':
          return [styles.option, { backgroundColor: 'rgba(75, 69, 12, .5)' }];
        case '#0c124b':
          return [styles.option, { backgroundColor: 'rgba(12, 18, 75, .5)' }];
        case '#0c4b25':
          return [styles.option, { backgroundColor: 'rgba(12, 75, 37, .5)' }];
        case '#778899':
          return [
            styles.option,
            { backgroundColor: 'rgba(119, 136, 153, .5)' }
          ];
        default:
          return [styles.option, { backgroundColor: 'rgba(205, 133, 0, .5)' }];
      }
    }
    return styles.option;
  };

  return (
    <View style={[AppStyle.screen, { backgroundColor: store.theme }]}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.65)']}
        style={AppStyle.gradient}
      />

      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => (store.alert = true)}
          style={getActiveStyle(true)}
          underlayColor={store.theme}
        >
          <View style={{ width: '90%' }}>
            <Text style={styles.optionTitle}>On</Text>
            <Text style={styles.optionSubtitle}>
              After twenty minutes, alert{'\n'}
              before breaking twenty seconds.
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => (store.alert = false)}
          style={getActiveStyle(false)}
          underlayColor={store.theme}
        >
          <View style={{ width: '90%' }}>
            <Text style={styles.optionTitle}>Off</Text>
            <Text style={styles.optionSubtitle}>
              After twenty minutes, automatically{'\n'}
              break twenty seconds.
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      <TouchableOpacity
        onPress={(): boolean => navigation.goBack()}
        style={AppStyle.navigator}
      >
        <View>
          <Entypo name="chevron-left" size={scale(50)} style={AppStyle.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default observer(AlertsScreen);
