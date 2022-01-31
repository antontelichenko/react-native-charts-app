import { put, call, takeLatest } from 'redux-saga/effects'
import { exchange19Slice } from '../redux/slices'
import { apiInstance } from '../services/api'
import { IApiCourse } from '../models/ICourse'
import { IExchange } from '../services/api/api-response.types'

function* watchGetCourse() {
  const response: IExchange = yield call(apiInstance.getCourse19)
  if (response.ok && response.data) {
    yield put(exchange19Slice.actions.getCourseStatisticSuccess(response.data))
  } else {
    yield put(exchange19Slice.actions.getCourseStatisticError('statisticError'))
  }
}
export function* courseSaga19() {
  yield takeLatest(exchange19Slice.actions.getCourseStatistic19, watchGetCourse)
}
