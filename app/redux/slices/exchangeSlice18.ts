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
//todo exchange18Slice
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
        payload: IExchange,
      }
    ) {
      state.course = courseStatistic18
    },
    getCourseStatisticError(state, action) {},
  },
})
