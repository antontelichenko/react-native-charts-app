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

  const currency19 = useAppSelector(state => state.course.course['2019']);

  return (
    <View style={styles.container}>
      <Course DATA_19={DATA_19} currency19={currency19} />
    </View>
  );
};
