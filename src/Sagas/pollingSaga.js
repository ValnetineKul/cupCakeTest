import { put, takeEvery } from 'redux-saga/effects'
import { call } from "@redux-saga/core/effects";
import {fetchItemsFromBackend} from "../api/api";
import * as TYPES from '../Redux/Type';
import * as ACTIONS from '../Redux/Actions';


function* getItemsAsync() {
  const items = yield call(fetchItemsFromBackend);
  yield put(ACTIONS.setItems(items));
}

export function* watchGetItems(){
  yield takeEvery( TYPES.START_POLLING, getItemsAsync);
}
