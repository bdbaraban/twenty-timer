import React, { memo, ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import AppStyle from '../styles/AppStyles';

// EntypoNavigator component prop types
interface EntypoNavigatorProps {
  name: string;
  onPress: () => boolean;
}

/**
 * Navigation icon
 * @param name - The name of the icon to render.
 */
const EntypoNavigator = ({
  name,
  onPress
}: EntypoNavigatorProps): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} style={AppStyle.navigator}>
      <View>
        <Entypo name={name} size={scale(50)} style={AppStyle.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(EntypoNavigator);
