import { all } from 'redux-saga/effects';
import { watchAll } from './contactSaga';


export default function* rootSaga() {
  yield all([
      watchAll()
  ])
}