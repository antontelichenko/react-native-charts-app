import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Course18 } from '../../screens/Course/Course18';
import { Course19 } from '../../screens/Course/Course19';
import { Course20 } from '../../screens/Course/Course20';
import { Charts } from '../../screens/Charts/Charts';

const Tab = createBottomTabNavigator();

export const CourseTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Главная страница" component={Charts} />
      <Tab.Screen name="Курс 2018" component={Course18} />
      <Tab.Screen name="Курс 2019" component={Course19} />
      <Tab.Screen name="Курс 2020" component={Course20} />
    </Tab.Navigator>
  );
};
