import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
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

  const currency20 = useAppSelector(state => state.course.course['2020']);

  return (
    <View style={styles.container}>
      <Course DATA_20={DATA_20} currency20={currency20} />
    </View>
  );
};
