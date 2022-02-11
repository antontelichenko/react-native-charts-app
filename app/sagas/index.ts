import { all } from 'redux-saga/effects';
import { userSaga } from './user';
import { courseSaga } from './exchange';

export default function* rootSaga() {
  yield all([courseSaga()]);
}
