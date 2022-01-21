import { all } from 'redux-saga/effects';
import { userSaga } from './user';
import {courseSaga_18} from "./fetchExchange_18";
import {courseSaga_19} from "./fetchExchange_19";
import {courseSaga_20} from "./fetchExchange_20"

export default function* rootSaga() {
  yield all([ courseSaga_18(), courseSaga_19(), courseSaga_20()]);
}
