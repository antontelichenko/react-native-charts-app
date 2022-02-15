import { all } from 'redux-saga/effects';
import { courseSaga } from './exchange';

export default function* rootSaga() {
  yield all([courseSaga()]);
}
