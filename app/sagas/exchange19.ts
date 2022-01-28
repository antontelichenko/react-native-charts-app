import { put, call, takeLatest } from 'redux-saga/effects'
import { exchangeSlice19 } from '../redux/slices'
import { apiInstance } from '../services/api'
import { IApiCourse } from '../models/ICourse'
import { IExchange } from '../services/api/api-response.types'

function* watchGetCourse() {
  const response: IExchange = yield call(apiInstance.getCourse19)
  if (response.ok && response.data) {
    yield put(exchangeSlice19.actions.getCourseStatisticSuccess(response.data))
  } else {
    yield put(exchangeSlice19.actions.getCourseStatisticError('statisticError'))
  }
}
export function* courseSaga19() {
  yield takeLatest(exchangeSlice19.actions.getCourseStatistic19, watchGetCourse)
}
