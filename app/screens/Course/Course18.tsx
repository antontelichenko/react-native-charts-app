import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeScreen } from '..';
import { styles } from './Course.styles';
import { course } from './course';

export const Course18 = () => {
  const cours = course();

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>Курс национального банка на 01.01.2018</Text>
      <Text style={styles.textCourse}>USD: {cours[0]}</Text>
      <Text style={styles.textCourse}>EUR: {cours[1]}</Text>
    </View>
  );
};
