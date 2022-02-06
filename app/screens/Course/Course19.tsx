import React from 'react';
import { View, Text } from 'react-native';
import { HomeScreen } from '..';
import { styles } from './Course.styles';
import { course } from './course';

export const Course19 = () => {
  const cours = course();

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>Курс национального банка на 01.01.2019</Text>
      <Text style={styles.textCourse}>USD: {cours[2]}</Text>
      <Text style={styles.textCourse}>EUR: {cours[3]}</Text>
    </View>
  );
};
