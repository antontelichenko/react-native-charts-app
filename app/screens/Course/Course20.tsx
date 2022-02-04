import React from 'react';
import { View, Text } from 'react-native';
import { HomeScreen } from '..';
import { styles } from './Course.styles';
import { course } from './course';

export const Course20 = () => {
  const cours = course();
  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>Курс национального банка на 01.01.2020</Text>
      <Text style={styles.textCourse}>USD: {cours[4]}</Text>
      <Text style={styles.textCourse}>EUR: {cours[5]}</Text>
    </View>
  );
};
