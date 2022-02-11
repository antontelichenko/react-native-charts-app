import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './course.styles';
import { text } from './text';

export const Course = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text} {props.data18} {props.data19} {props.data20}
      </Text>
      <Text style={styles.textCourse}>
        USD: {props.data18usd} {props.data19usd} {props.data20usd}
      </Text>
      <Text style={styles.textCourse}>
        EUR: {props.data18eur} {props.data19eur} {props.data20eur}
      </Text>
    </View>
  );
};
