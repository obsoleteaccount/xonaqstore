import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';///allows browser to cache our store depending on certain config options
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);//create persisted version of our store using persistor object

export default {store, persistor};

