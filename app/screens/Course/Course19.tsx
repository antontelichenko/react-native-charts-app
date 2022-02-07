import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchange19Slice } from '../../redux/slices';
import { HomeScreen } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './Course.styles';
import { text } from './text';

export const Course19 = () => {
  const date = '01.01.2019';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(exchange19Slice.actions.getCourseStatistic19());
  }, [dispatch]);

  const data19usd = useAppSelector(
    state => state.course19.course?.exchangeRate[16].saleRateNB,
  );
  const data19eur = useAppSelector(
    state => state.course19.course?.exchangeRate[22].saleRateNB,
  );

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>
        {text} {date}
      </Text>
      <Text style={styles.textCourse}>USD: {data19usd}</Text>
      <Text style={styles.textCourse}>EUR: {data19eur}</Text>
    </View>
  );
};
