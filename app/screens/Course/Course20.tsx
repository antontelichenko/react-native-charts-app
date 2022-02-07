import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchange20Slice } from '../../redux/slices';
import { HomeScreen } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './Course.styles';
import { text } from './text';

export const Course20 = () => {
  const date = '01.01.2020';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(exchange20Slice.actions.getCourseStatistic20());
  }, [dispatch]);

  const data20usd = useAppSelector(
    state => state.course20.course?.exchangeRate[23].saleRateNB,
  );
  const data20eur = useAppSelector(
    state => state.course20.course?.exchangeRate[8].saleRateNB,
  );

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>
        {text} {date}
      </Text>
      <Text style={styles.textCourse}>USD: {data20usd}</Text>
      <Text style={styles.textCourse}>EUR: {data20eur}</Text>
    </View>
  );
};
