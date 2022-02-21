import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { HomeStackNavigator } from './stacks';
import { CourseTabNavigator } from './tab/course-tab-navigator';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Course18StackNavigator } from './stacks/course18-stack-navigator';
import { Course19StackNavigator } from './stacks/course19-stack-navigator';
import { Course20StackNavigator } from './stacks/course20-stack-navigator';
import { ChartsStackNavigator } from './stacks/charts-stack-navigator';

const Tab = createBottomTabNavigator();

export type RootParams = {
  Main: undefined;
  Course2018: undefined;
  Course2019: undefined;
  Course2020: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Tab.Navigator>
      {/* <Tab.Screen name="Main" component={ChartsStackNavigator} /> */}
      <Tab.Screen name="Course2018" component={Course18StackNavigator} />
      <Tab.Screen name="Course2019" component={Course19StackNavigator} />
      <Tab.Screen name="Course2020" component={Course20StackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
