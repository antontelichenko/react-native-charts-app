import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { HomeStackNavigator } from './stacks';
import { CourseTabNavigator } from './tab/course-tab-navigator';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Course18 } from '../screens/Course/Course18';
import { Course19 } from '../screens/Course/Course19';
import { Course20 } from '../screens/Course/Course20';
import { Charts } from '../screens/Charts/Charts';

const Tab = createBottomTabNavigator();

export type RootParams = {
  CourseTab: undefined;
  HomeStack: undefined;
  Course18Stack: undefined;
  Course19Stack: undefined;
  ChartsStack: undefined;
  Course20Stack: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

export const ChartsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ChartsStack" component={Charts} />
  </Stack.Navigator>
);

export const Course18StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Course18Stack" component={Course18} />
  </Stack.Navigator>
);

export const Course19StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Course19Stack" component={Course19} />
  </Stack.Navigator>
);

export const Course20StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Course20Stack" component={Course20} />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Tab.Navigator>
      <Tab.Screen name="Главная страница" component={ChartsStackNavigator} />
      <Tab.Screen name="Курс 2018" component={Course18StackNavigator} />
      <Tab.Screen name="Курс 2019" component={Course19StackNavigator} />
      <Tab.Screen name="Курс 2020" component={Course20StackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
