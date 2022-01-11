import { TextProps as RNTextProps } from 'react-native';
import { DefaultTextPresets } from './DefaultText.presets';

export interface IDefaultTextProps extends RNTextProps {
  preset?: DefaultTextPresets;
}
