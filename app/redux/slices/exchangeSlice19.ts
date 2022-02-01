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

export const exchange19Slice = createSlice({
  name: 'course19',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic19(state) {},
    getCourseStatisticSuccess(
      state,
      {
        payload: courseStatistic19,
      }: {
        payload: IExchange;
      },
    ) {
      state.course = courseStatistic19;
    },
    getCourseStatisticError(state, action) {},
  },
});
