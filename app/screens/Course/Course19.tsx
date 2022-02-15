import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { styles } from './course.styles';
import { data19 } from './Course19.data';

export const Course19 = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      exchangeSlice.actions.getCourseStatistic({
        type: 'getCourseStatistic',
        payload: '2019',
      }),
    );
  }, [dispatch]);

  const currency19 = useAppSelector(state => state.course.course['2019']);

  const data19usd = currency19.exchangeRate[16].saleRateNB;
  const data19eur = currency19.exchangeRate[22].saleRateNB;

  return (
    <View style={styles.container}>
      <Course data19={data19} data19usd={data19usd} data19eur={data19eur} />
    </View>
  );
};
