import { createSlice } from '@reduxjs/toolkit';

import { IApiCourse } from './types';
import { IExchange } from './types';
import { ICourseState } from './types';

const INITIAL_STATE: ICourseState = {
  course: null,
};

export const exchange18Slice = createSlice({
  name: 'course18',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic18(state, data) {},
    getCourseStatisticSuccess(
      state,
      {
        payload: courseStatistic18,
      }: {
        payload: IExchange;
      },
    ) {
      state.course = courseStatistic18;
    },
    getCourseStatisticError(state, action) {},
  },
});
