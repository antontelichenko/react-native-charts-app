import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
import { currencySlice } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Course } from './Course';
import { styles } from './course.styles';
import { DATA_19 } from './Course19.data';

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

  const currencys19 = useAppSelector(state => state.course.course?.[2019]);

  useEffect(() => {
    dispatch(
      currencySlice.actions.currencySuccess({
        currency: {
          year19: {
            usd: currencys19.exchangeRate[16].saleRateNB,
            eur: currencys19.exchangeRate[22].saleRateNB,
          },
        },
      }),
    );
  }, [dispatch]);

  const indicator19 = useAppSelector(state => state.rate.currency.year19);
  console.tron.log('course19: indicator19', indicator19);

  return (
    <View style={styles.container}>
      <Course DATA_19={DATA_19} indicator19={indicator19} />
    </View>
  );
};
