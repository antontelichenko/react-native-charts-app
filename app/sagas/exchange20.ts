import { put, call, takeLatest } from 'redux-saga/effects'
import { exchange20Slice } from '../redux/slices'
import { apiInstance } from '../services/api'
import { IApiCourse } from '../models/ICourse'
import { IExchange } from '../services/api/api-response.types'

function* watchGetCourse() {
  const response: IExchange = yield call(apiInstance.getCourse20)
  if (response.ok && response.data) {
    yield put(exchange20Slice.actions.getCourseStatisticSuccess(response.data))
  } else {
    yield put(exchange20Slice.actions.getCourseStatisticError('statisticError'))
  }
}
export function* courseSaga20() {
  yield takeLatest(exchange20Slice.actions.getCourseStatistic20, watchGetCourse)
}
