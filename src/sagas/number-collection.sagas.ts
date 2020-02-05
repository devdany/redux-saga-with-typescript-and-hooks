import { BaseAction, actionIds } from '../common';
import { call, put, takeLatest } from 'redux-saga/effects';

import { generateNewNumber } from '../api';
import { numberRequestCompletedAction } from '../actions';

export function* watchNewGeneratedNumberRequestStart() {
  yield takeLatest(
    actionIds.GET_NUMBER_REQUEST_START,
    requestNewGeneratedNumber,
  )
}

function* requestNewGeneratedNumber(action: BaseAction) {
  const { number } = action.payload
  const generatedNumber = yield call(generateNewNumber, number)
  yield put(numberRequestCompletedAction(generatedNumber))
}
