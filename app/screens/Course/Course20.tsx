import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { styles } from './course.styles';
import { data20 } from './Course20.data';

export const Course20 = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        payload: '2020',
        type: 'getCourseStatistic',
      }),
    );
  }, [dispatch]);

  const currency20 = useAppSelector(state => state.course.course['2020']);

  const data20usd = currency20.exchangeRate[23].saleRateNB;
  const data20eur = currency20.exchangeRate[8].saleRateNB;

  return (
    <View style={styles.container}>
      <Course data20={data20} data20usd={data20usd} data20eur={data20eur} />
    </View>
  );
};
