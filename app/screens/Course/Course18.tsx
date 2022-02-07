import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exchange18Slice } from '../../redux/slices';
import { HomeScreen } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './Course.styles';
import { text } from './text';

export const Course18 = () => {
  const date = '01.01.2018';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchange18Slice.actions.getCourseStatistic18({
        payload: '18',
        type: 'getCourseStatistic18',
      }),
    );
  }, [dispatch]);

  const data18usd = useAppSelector(
    state => state.course18.course?.exchangeRate[16].saleRateNB,
  );
  const data18eur = useAppSelector(
    state => state.course18.course?.exchangeRate[22].saleRateNB,
  );

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>
        {text} {date}
      </Text>
      <Text style={styles.textCourse}>USD: {data18usd}</Text>
      <Text style={styles.textCourse}>EUR: {data18eur}</Text>
    </View>
  );
};
