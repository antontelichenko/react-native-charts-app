import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Course19 } from '../../screens/Course/Course19';

export type Course19StackParams = {
  Course19Stack: undefined;
};

const Stack = createNativeStackNavigator<Course19StackParams>();

export const Course19StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Course19Stack" component={Course19} />
  </Stack.Navigator>
);
