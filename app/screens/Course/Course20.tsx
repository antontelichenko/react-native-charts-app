import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { HomeScreen } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { styles } from './course.styles';
import { text } from './text';

export const Course20 = () => {
  const data20 = '01.01.2020';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        payload: '20',
        type: 'getCourseStatistic',
      }),
    );
  }, [dispatch]);

  const data20usd = useAppSelector(
    state => state.course.course['2020'].exchangeRate[23].saleRateNB,
  );

  const data20eur = useAppSelector(
    state => state.course.course['2020'].exchangeRate[8].saleRateNB,
  );

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Course data20={data20} data20usd={data20usd} data20eur={data20eur} />
    </View>
  );
};
