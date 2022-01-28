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

export const exchangeSlice19 = createSlice({
  name: 'course19',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic19(state, action: IExchange) {},
    getCourseStatisticSuccess(
      state,
      {
        payload: courseStatistic19,
      }: {
        payload: IExchange,
      }
    ) {
      state.course = courseStatistic19
    },
    getCourseStatisticError(state, action) {},
  },
})
