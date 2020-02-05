import {
  NumberCollectionState,
  numberCollectionReducer,
} from './number-collection.reducer';

import { combineReducers } from 'redux';

export interface State {
  numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers<State>({
  numberCollection: numberCollectionReducer,
});
