import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

interface IHomeScreenStyles {
  root: ViewStyle;
  body: ViewStyle;
  titleContainer: ViewStyle;
  logo: ImageStyle;
  description: TextStyle;
  dispatchTestButtonContainer: ViewStyle;
  dispatchTestButtonText: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
})
