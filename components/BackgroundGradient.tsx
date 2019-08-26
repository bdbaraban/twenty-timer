import React, { memo, ReactElement } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AppStyles from '../styles/AppStyles';

/**
 * Linear gradient background
 */
const BackgroundGradient = (): ReactElement => {
  return (
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,.65)']}
      style={AppStyles.gradient}
    />
  );
};

export default memo(BackgroundGradient);
