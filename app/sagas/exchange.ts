import { put, call, takeLatest } from 'redux-saga/effects';
import { exchangeSlice } from '../redux/slices';
import { apiInstance } from '../services/api';
import { IApiCourse } from '../models/ICourse';
import { IExchange } from '../services/api/api-response.types';

function* watchGetCourse(data) {
  console.tron?.log('saga', data.payload.payload);

  const response: IExchange = yield call(
    apiInstance.getCourse,
    data.payload.payload,
  );

  if (response.ok && response.data) {
    yield put(exchangeSlice.actions.getCourseStatisticSuccess(response.data));
  } else {
    yield put(exchangeSlice.actions.getCourseStatisticError('statisticError'));
  }
}
export function* courseSaga() {
  yield takeLatest(exchangeSlice.actions.getCourseStatistic, watchGetCourse);
}
