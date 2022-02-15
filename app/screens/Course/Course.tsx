import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './course.styles';
import { INFOCURRENCYDATES } from './infoCurrencyDates';

export const Course = ({
  DATA_18,
  DATA_19,
  DATA_20,
  currency18,
  currency19,
  currency20,
}) => {
  const usd = [currency18, currency19].map(currency => (
    <Text style={styles.textCourse}>
      {currency?.exchangeRate[16].saleRateNB}
    </Text>
  ));
  const usd20 = currency20?.exchangeRate[23].saleRateNB;

  const eur = [currency18, currency19].map(currency => (
    <Text style={styles.textCourse}>
      {currency?.exchangeRate[22].saleRateNB}
    </Text>
  ));
  const eur20 = currency20?.exchangeRate[8].saleRateNB;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {INFOCURRENCYDATES} {DATA_18} {DATA_19} {DATA_20}
      </Text>
      <Text style={styles.textCourse}> USD: {usd}</Text>
      <Text style={styles.textCourse}> {usd20} </Text>
      <Text style={styles.textCourse}>EUR: {eur}</Text>
      <Text style={styles.textCourse}> {eur20} </Text>
    </View>
  );
};
