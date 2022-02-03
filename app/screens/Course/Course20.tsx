import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchange20Slice } from '../../redux/slices';
import { HomeScreen } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './Course.styles';

export const Course20 = () => {
  const dispatch = useAppDispatch();
  const data20 = useAppSelector(state => state.course20);

  useEffect(() => {
    dispatch(exchange20Slice.actions.getCourseStatistic20());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>Курс национального банка на 01.01.2020</Text>
      <Text style={styles.textCourse}>
        USD: {data20.course?.exchangeRate[23].saleRateNB}
      </Text>
      <Text style={styles.textCourse}>
        EUR: {data20.course?.exchangeRate[8].saleRateNB}
      </Text>
    </View>
  );
};
