import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './course.styles';
import { INFOCURRENCYDATES } from './infoCurrencyDates';

export const Course = ({
  DATA_18,
  DATA_19,
  DATA_20,
  indicator18,
  indicator19,
  indicator20,
}) => {
  const unitUsd = [indicator18, indicator19, indicator20].map(el => [el?.usd]);
  console.tron.log('unit: usd', unitUsd);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {INFOCURRENCYDATES} {DATA_18} {DATA_19} {DATA_20}
      </Text>
      <Text style={styles.textCourse}> USD:{unitUsd} </Text>

      <Text style={styles.textCourse}>EUR: </Text>
    </View>
  );
};
