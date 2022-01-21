import { createSlice } from '@reduxjs/toolkit'

import { IApiCourse } from '../../models/ICourse'

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

export const exchangeSlice_18 = createSlice({
  name: 'course',
  initialState: INITIAL_STATE,
  reducers: {
    getCourseStatistic18() {},
    getCourseStatisticSuccess(
      state,
      {
        payload: courseStatistic,
      }: {
        payload: {
          //вынести в файл
          exchangeRate: IApiCourse[],
          date: string,
          bank: string,
          baseCurrency: number,
          baseCurrencyLit: string,
        },
      }
    ) {
      state.course = courseStatistic
    },
    getCourseStatisticError(state, action) {},
  },
})
