import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { HomeScreen } from '..';
import { styles } from './course.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';

export const Course18 = () => {
  const data18 = '01.01.2018';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        type: 'getCourseStatistic',
        payload: '18',
      }),
    );
  }, [dispatch]);

  const data18usd = useAppSelector(
    state => state.course.course['2018'].exchangeRate[16].saleRateNB,
  );

  const data18eur = useAppSelector(
    state => state.course.course['2018'].exchangeRate[22].saleRateNB,
  );

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Course data18={data18} data18usd={data18usd} data18eur={data18eur} />
    </View>
  );
};
