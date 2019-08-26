import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationScreenProp } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import { useStore } from '../../../store';
import { scale } from 'react-native-size-matters';
import AppStyle from '../../AppStyle';
import styles from './styles';

/**
 * ColorsScreen component prop types
 */
interface ColorsScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

/**
 * Options screen for setting color theme
 */
const ColorsScreen = ({
  navigation
}: ColorsScreenProps): React.ReactElement => {
  const store = useStore();

  const getActiveStyle = (color: string) => {
    if (color == '#4b250c' && store.theme == color) {
      return [styles.option, { backgroundColor: 'rgba(75, 37, 12, .5)' }];
    } else if (color == '#4b450c' && store.theme == color) {
      return [styles.option, { backgroundColor: 'rgba(75, 69, 12, .5)' }];
    } else if (color == '#0c124b' && store.theme == color) {
      return [styles.option, { backgroundColor: 'rgba(12, 18, 75, .5)' }];
    } else if (color == '#0c4b25' && store.theme == color) {
      return [styles.option, { backgroundColor: 'rgba(12, 75, 37, .5)' }];
    } else if (color == '#778899' && store.theme == color) {
      return [styles.option, { backgroundColor: 'rgba(119, 136, 153, .5)' }];
    } else if (color == '#cd8500' && store.theme == color) {
      return [styles.option, { backgroundColor: 'rgba(205, 133, 0, .5)' }];
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
          onPress={() => (store.theme = '#4b250c')}
          style={getActiveStyle('#4b250c')}
          underlayColor={'#4b250c'}
        >
          <Text style={styles.optionTitle}>Brown</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => (store.theme = '#4b450c')}
          style={getActiveStyle('#4b450c')}
          underlayColor={'#4b450c'}
        >
          <Text style={styles.optionTitle}>Hazel</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => store.setBlueTheme()}
          style={getActiveStyle('#0c124b')}
          underlayColor={'#0c124b'}
        >
          <Text style={styles.optionTitle}>Blue</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => (store.theme = '#0c4b25')}
          style={getActiveStyle('#0c4b25')}
          underlayColor={'#0c4b25'}
        >
          <Text style={styles.optionTitle}>Green</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => (store.theme = '#778899')}
          style={getActiveStyle('#778899')}
          underlayColor={'#778899'}
        >
          <Text style={styles.optionTitle}>Grey</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => (store.theme = '#cd8500')}
          style={getActiveStyle('#cd8500')}
          underlayColor={'#cd8500'}
        >
          <Text style={styles.optionTitle}>Amber</Text>
        </TouchableHighlight>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={AppStyle.navigator}
      >
        <View>
          <Entypo name="chevron-left" size={scale(50)} style={AppStyle.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default observer(ColorsScreen);
