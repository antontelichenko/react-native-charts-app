import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Course18 } from '../../screens/Course/Course18';

export type Course18StackParams = {
  Course18Stack: undefined;
};

const Stack = createNativeStackNavigator<Course18StackParams>();

export const Course18StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Course18Stack" component={Course18} />
  </Stack.Navigator>
);
