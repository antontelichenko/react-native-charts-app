import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './course.styles';
import { INFOCURRENCYDATES } from './infoCurrencyDates';

export const Course = ({
  data18,
  data19,
  data20,
  indicator18,
  indicator19,
  indicator20,
}) => {
  const unitUsd = [
    indicator18?.USD18,
    indicator19?.USD19,
    indicator20?.USD20,
  ].map(el => el?.saleRateNB);

  const unitEur = [
    indicator18?.EUR18,
    indicator19?.EUR19,
    indicator20?.EUR20,
  ].map(el => el?.saleRateNB);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {INFOCURRENCYDATES} {data18} {data19} {data20}
      </Text>
      <Text style={styles.textCourse}>USD: {unitUsd}</Text>
      <Text style={styles.textCourse}>EUR: {unitEur}</Text>
    </View>
  );
};
