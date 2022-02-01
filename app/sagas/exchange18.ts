import { put, call, takeLatest } from 'redux-saga/effects'
import { exchangeSlice18 } from '../redux/slices'
import { apiInstance } from '../services/api'
import { IApiCourse } from '../models/ICourse'
import { IExchange } from '../services/api/api-response.types'

function* watchGetCourse() {
  const response: IExchange = yield call(apiInstance.getCourse18)
  if (response.ok && response.data) {
    yield put(exchangeSlice18.actions.getCourseStatisticSuccess(response.data))
  } else {
    yield put(exchangeSlice18.actions.getCourseStatisticError('statisticError'))
  }
}
export function* courseSaga18() {
  yield takeLatest(exchangeSlice18.actions.getCourseStatistic18, watchGetCourse)
}
