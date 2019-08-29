import React, { memo, ReactElement } from 'react';
import { TouchableOpacity, View, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import AppStyles from '../styles/AppStyles';

// EntypoNavigator component prop types
interface EntypoNavigatorProps extends TouchableOpacityProps {
  name: string;
}

/**
 * Navigation icon
 * @param name - The name of the icon to render.
 */
const EntypoNavigator = ({
  name,
  ...rest
}: EntypoNavigatorProps): ReactElement => {
  return (
    <TouchableOpacity
      testID="entypo-navigator"
      style={AppStyles.navigator}
      {...rest}
    >
      <View>
        <Entypo name={name} size={scale(50)} style={AppStyles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(EntypoNavigator);
