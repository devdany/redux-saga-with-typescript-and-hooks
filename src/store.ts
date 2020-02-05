import { applyMiddleware, compose, createStore } from 'redux';

import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  level: 'info',
  collapsed: true,
})

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
  compose;

export const store = createStore(
  rootReducers,
  {},
  composeEnhancer(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);
