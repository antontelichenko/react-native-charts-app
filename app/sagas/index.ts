import { all } from 'redux-saga/effects'
import { userSaga } from './user'
import { courseSaga18 } from './exchange18'
import { courseSaga19 } from './exchange19'
import { courseSaga20 } from './exchange20'

export default function* rootSaga() {
  yield all([courseSaga18(), courseSaga19(), courseSaga20()])
}
