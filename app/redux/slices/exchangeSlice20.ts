import { createSlice } from '@reduxjs/toolkit'
import { IApiCourse } from '../../models/ICourse'
import { IExchange } from '../types/exchange'

interface ICourseState {
  course: {
    exchangeRate: IApiCourse[],
    date: string,
    bank: string,
    baseCurrency: number,
    baseCurrencyLit: string,
  } | null;
}

const INITIAL_STATE: ICourseState = {
  course: null,
}

export const exchange20Slice = createSlice({
  name: 'course20',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic20(state, action: IExchange) {},
    getCourseStatisticSuccess(
      state,
      {
        payload: courseStatistic20,
      }: {
        payload: IExchange,
      }
    ) {
      state.course = courseStatistic20
    },
    getCourseStatisticError(state, action) {},
  },
})
