import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { styles } from './course.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { data18 } from './Course18.data';

export const Course18 = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        type: 'getCourseStatistic',
        payload: '2018',
      }),
    );
  }, [dispatch]);

  const currency19 = useAppSelector(state => state.course.course['2018']);

  const data18usd = currency19.exchangeRate[16].saleRateNB;
  const data18eur = currency19.exchangeRate[22].saleRateNB;

  return (
    <View style={styles.container}>
      <Course data18={data18} data18usd={data18usd} data18eur={data18eur} />
    </View>
  );
};
