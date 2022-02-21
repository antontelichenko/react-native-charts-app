import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { currencySlice } from '../../redux/slices';
import { styles } from './course.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { DATA_18 } from './Course18.data';

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

  const currencys18 = useAppSelector(state => state.course.course?.[2018]);
  console.tron.log('currency18', currencys18);

  useEffect(() => {
    dispatch(
      currencySlice.actions.currencySuccess({
        currency: {
          year18: {
            usd: currencys18.exchangeRate[16].saleRateNB,
            eur: currencys18.exchangeRate[22].saleRateNB,
          },
        },
      }),
    );
  }, [dispatch]);

  const indicator18 = useAppSelector(state => state.rate.currency.year18);
  console.tron.log('course18: indicator18', indicator18);

  return (
    <View style={styles.container}>
      <Course DATA_18={DATA_18} indicator18={indicator18} />
    </View>
  );
};
