import { put, call, takeLatest } from 'redux-saga/effects';
import { exchangeSlice } from '../redux/slices';
import { apiInstance } from '../services/api';
import { ICourseState } from '../redux/slices/types';

function* watchGetCourse(data) {
  const response: ICourseState = yield call(
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
