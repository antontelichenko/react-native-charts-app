import { createSlice } from '@reduxjs/toolkit';

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
        [courseStatistic.date.slice(-4)]: courseStatistic,
        ...state.course,
      };
    },
    getCourseStatisticError(state, action) {},
  },
});
