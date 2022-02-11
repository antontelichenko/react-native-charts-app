import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { HomeScreen } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { styles } from './course.styles';
import { text } from './text';

export const Course19 = () => {
  const data19 = '01.01.2019';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        type: 'getCourseStatistic',
        payload: '19',
      }),
    );
  }, [dispatch]);

  const data19usd = useAppSelector(
    state => state.course.course['2019'].exchangeRate[16].saleRateNB,
  );

  const data19eur = useAppSelector(
    state => state.course.course['2019'].exchangeRate[22].saleRateNB,
  );

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Course data19={data19} data19usd={data19usd} data19eur={data19eur} />
    </View>
  );
};
