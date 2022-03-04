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

  const indicator20 = useAppSelector(state => state.course.course);

  return (
    <View style={styles.container}>
      <Course data20={DATA_20} indicator20={indicator20} />
    </View>
  );
};
