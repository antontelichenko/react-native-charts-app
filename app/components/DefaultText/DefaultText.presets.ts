import { TextStyle, StyleSheet } from 'react-native';

import { COLORS } from '../../themes/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface IDefaultTextStyles {
  default: TextStyle;
  title: TextStyle;
  secondary: TextStyle;
}

export type DefaultTextPresets = keyof IDefaultTextStyles;

export default StyleSheet.create<IDefaultTextStyles>({
  default: BASE,

  title: {
    ...BASE,
    fontSize: 24,
    fontWeight: 'bold',
  },

  secondary: {
    ...BASE,
    fontSize: 11,
  },
});
