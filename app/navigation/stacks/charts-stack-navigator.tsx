import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Charts } from '../../screens/Charts/Charts';

export type ChartsStackParams = {
  ChartsStack: undefined;
};

const Stack = createNativeStackNavigator<ChartsStackParams>();

export const ChartsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ChartsStack" component={Charts} />
  </Stack.Navigator>
);
