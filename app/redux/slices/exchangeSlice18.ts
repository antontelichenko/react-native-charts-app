import { createSlice } from '@reduxjs/toolkit';
import { IApiCourse } from '../../models/ICourse';
import { IExchangeResponse } from '../../services/api/api-response.types';

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

export const exchange18Slice = createSlice({
  name: 'course18',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic18(state) {},
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
