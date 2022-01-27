import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import presets from './DefaultText.presets';
import { IDefaultTextProps } from './DefaultText.props';

export const DefaultText: React.FC<IDefaultTextProps> = ({
  style,
  preset,
  ...rest
}) => {
  const styles = [presets[preset || 'default'], style];

  return <ReactNativeText {...rest} style={styles} />;
};
