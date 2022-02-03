import React from 'react';
import { View, Text } from 'react-native';
// import { exchange19Slice } from '../../redux/slices';
import { HomeScreen } from '..';
// import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './Course.styles';

import { data19usd, data19eur } from './course';

export const Course19 = () => {
  // const dispatch = useAppDispatch();
  // const data19 = useAppSelector(state => state.course19);

  // useEffect(() => {
  // dispatch(exchange19Slice.actions.getCourseStatistic19());
  // }, [dispatch]);

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text style={styles.text}>Курс национального банка на 01.01.2019</Text>
      <Text style={styles.textCourse}>USD: {data19usd}</Text>
      <Text style={styles.textCourse}>EUR: {data19eur}</Text>
    </View>
  );
};
