import { put, call, takeLatest } from 'redux-saga/effects'
import { exchangeSlice20 } from '../redux/slices'
import { apiInstance } from '../services/api'
import { IApiCourse } from '../models/ICourse'
import { IExchange } from '../services/api/api-response.types'

function* watchGetCourse() {
  const response: IExchange = yield call(apiInstance.getCourse20)
  if (response.ok && response.data) {
    yield put(exchangeSlice20.actions.getCourseStatisticSuccess(response.data))
  } else {
    yield put(exchangeSlice20.actions.getCourseStatisticError('statisticError'))
  }
}
export function* courseSaga20() {
  yield takeLatest(exchangeSlice20.actions.getCourseStatistic20, watchGetCourse)
}
