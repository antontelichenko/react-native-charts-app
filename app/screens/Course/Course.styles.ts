import { StyleSheet } from 'react-native';





export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  body: {
    padding: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  

  description: {
    marginVertical: 16,
  },

  dispatchTestButtonContainer: {
    backgroundColor: COLORS.BLACK,
    padding: 16,
  },
  dispatchTestButtonText: {
    color: COLORS.WHITE,
  },
});
