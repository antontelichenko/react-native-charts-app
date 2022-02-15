import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
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

  const currency18 = useAppSelector(state => state.course.course['2018']);

  return (
    <View style={styles.container}>
      <Course DATA_18={DATA_18} currency18={currency18} />
    </View>
  );
};
