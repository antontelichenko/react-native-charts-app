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

  const indicator18 = useAppSelector(state => state.course.course);

  return (
    <View style={styles.container}>
      <Course data18={DATA_18} indicator18={indicator18} />
    </View>
  );
};
