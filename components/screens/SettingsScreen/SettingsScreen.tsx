import React, { ReactElement } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';
import { observer } from 'mobx-react';
import { useStore } from '../../../store';
import { scale } from 'react-native-size-matters';
import AppStyle from '../../AppStyle';
import styles from './styles';

interface SettingsScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const SettingsScreen = ({ navigation }: SettingsScreenProps): ReactElement => {
  const { theme } = useStore();

  return (
    <View style={[AppStyle.screen, { backgroundColor: theme }]}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.65)']}
        style={AppStyle.gradient}
      />
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Colors')}
          style={styles.option}
          underlayColor={theme}
        >
          <Text style={styles.optionText}>Colors</Text>
        </TouchableHighlight>

        <View style={styles.line} />

        <TouchableHighlight
          onPress={() => navigation.navigate('Alerts')}
          style={styles.option}
          underlayColor={theme}
        >
          <Text style={styles.optionText}>Alerts</Text>
        </TouchableHighlight>

        <View style={styles.info}>
          <Text style={styles.infoText}>
            Developed by{'\n'}Brennan Dov Baraban
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={AppStyle.navigator}
      >
        <View>
          <Entypo name="chevron-down" size={scale(50)} style={AppStyle.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default observer(SettingsScreen);
