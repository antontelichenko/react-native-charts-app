import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './course.styles';
import { INFOCURRENCYDATES } from './infoCurrencyDates';

export const Course = ({
  data18,
  data19,
  data20,
  data18usd,
  data19usd,
  data20usd,
  data18eur,
  data19eur,
  data20eur,
}) => {
  const years = [data18, data19, data20].map(el => el);
  const usd = [data18usd, data19usd, data20usd].map(el => el);
  const eur = [data18eur, data19eur, data20eur].map(el => el);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {INFOCURRENCYDATES} {years}
      </Text>
      <Text style={styles.textCourse}>USD:{usd}</Text>
      <Text style={styles.textCourse}>EUR: {eur}</Text>
    </View>
  );
};
