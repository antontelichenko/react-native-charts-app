import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { HomeStackNavigator } from './stacks';
import { InitialScreen } from '../screens';
import { Course18 } from '../screens/Course/Course18';
import { Course19 } from '../screens/Course/Course19';
import { Course20 } from '../screens/Course/Course20';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';


export type RootParams = {
  Initial: undefined;
  HomeStack: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
    <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
    <Stack.Screen name="course18" component={Course18} />
    <Stack.Screen name="course19" component={Course19} />
    <Stack.Screen name="course20" component={Course20} />
  
 
    
  </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
