import { createSlice } from '@reduxjs/toolkit';
import { IApiCourse } from '../../models/ICourse';
import { IExchange } from '../../services/api/api-response.types';

interface ICourseState {
  course: {
    exchangeRate: IApiCourse[];
    date: string;
    bank: string;
    baseCurrency: number;
    baseCurrencyLit: string;
  } | null;
}

const INITIAL_STATE: ICourseState = {
  course: null,
};

export const exchange20Slice = createSlice({
  name: 'course20',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic20(state) {},
    getCourseStatisticSuccess(
      state,
      {
        payload: courseStatistic20,
      }: {
        payload: IExchange;
      },
    ) {
      state.course = courseStatistic20;
    },
    getCourseStatisticError(state, action) {},
  },
});
