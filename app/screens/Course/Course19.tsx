import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { exchangeSlice } from '../../redux/slices';
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

  const indicator19 = useAppSelector(state => state.course.course);

  return (
    <View style={styles.container}>
      <Course data19={DATA_19} indicator19={indicator19} />
    </View>
  );
};
