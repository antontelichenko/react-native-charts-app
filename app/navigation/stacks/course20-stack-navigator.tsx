import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Course20 } from '../../screens/Course/Course20';

export type Course20StackParams = {
  Course20Stack: undefined;
};

const Stack = createNativeStackNavigator<Course20StackParams>();

export const Course20StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Course20Stack" component={Course20} />
  </Stack.Navigator>
);
