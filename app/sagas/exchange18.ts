import { put, call, takeLatest } from 'redux-saga/effects';
import { exchange18Slice } from '../redux/slices';
import { apiInstance } from '../services/api';
import { IApiCourse } from './types';
import { IExchangeResponse } from './types';

function* watchGetCourse() {
  const response: IExchangeResponse = yield call(apiInstance.getCourse18);
  if (response.ok && response.data) {
    yield put(exchange18Slice.actions.getCourseStatisticSuccess(response.data));
  } else {
    yield put(
      exchange18Slice.actions.getCourseStatisticError('statisticError'),
    );
  }
}
export function* courseSaga18() {
  yield takeLatest(
    exchange18Slice.actions.getCourseStatistic18,
    watchGetCourse,
  );
}
