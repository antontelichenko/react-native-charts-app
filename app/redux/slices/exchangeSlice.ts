import { createSlice } from '@reduxjs/toolkit';
import { State } from 'react-native-gesture-handler';

import { ICourseState } from './types';

const INITIAL_STATE: ICourseState = {
  course: null,
};

export const exchangeSlice = createSlice({
  name: 'course',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic(state, data) {},
    getCourseStatisticSuccess(
      state,
      { payload: courseStatistic }: { payload: ICourseState },
    ) {
      state.course = {
        [(courseStatistic.exchangeRate[16].currency +=
          courseStatistic.date.slice(-2))]: courseStatistic.exchangeRate[16],

        [(courseStatistic.exchangeRate[22].currency +=
          courseStatistic.date.slice(-2))]: courseStatistic.exchangeRate[22],

        [(courseStatistic.exchangeRate[23].currency +=
          courseStatistic.date.slice(-2))]: courseStatistic.exchangeRate[23],

        [(courseStatistic.exchangeRate[8].currency +=
          courseStatistic.date.slice(-2))]: courseStatistic.exchangeRate[8],

        ...state.course,
      };
    },

    getCourseStatisticError(state, action) {},
  },
});
