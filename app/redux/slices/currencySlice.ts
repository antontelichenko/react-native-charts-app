import { createSlice } from '@reduxjs/toolkit';
import { actionChannel } from 'redux-saga/effects';

import { IcurrencyState } from './types';

const INITIAL_STATE: IcurrencyState = {
  currency: {
    year18: { usd: null, eur: null },
    year19: { usd: null, eur: null },
    year20: { usd: null, eur: null },
  },
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState: INITIAL_STATE,
  reducers: {
    currencySuccess(
      state,
      { payload: currencyStatistic }: { payload: IcurrencyState },
    ) {
      state.currency = { currencyStatistic, ...state.currency };

      console.tron.log('currencyStatistic', currencyStatistic);
    },
  },
});
