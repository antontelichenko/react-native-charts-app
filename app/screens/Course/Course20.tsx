import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { currencySlice } from '../../redux/slices/currencySlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { styles } from './course.styles';
import { DATA_20 } from './Course20.data';

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

  const currencys20 = useAppSelector(state => state.course.course?.[2020]);

  useEffect(() => {
    dispatch(
      currencySlice.actions.currencySuccess({
        currency: {
          year20: {
            usd: currencys20.exchangeRate[23].saleRateNB,
            eur: currencys20.exchangeRate[8].saleRateNB,
          },
        },
      }),
    );
  }, [dispatch]);

  const indicator20 = useAppSelector(state => state.rate.currency.year20);

  return (
    <View style={styles.container}>
      <Course DATA_20={DATA_20} indicator20={indicator20} />
    </View>
  );
};
