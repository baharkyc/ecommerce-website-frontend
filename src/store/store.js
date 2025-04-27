import { createStore, applyMiddleware, combineReducers } from 'redux';

import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';

export const reducers = combineReducers({
    client: clientReducer,
    product: productReducer
})

export const store = createStore(reducers,
    applyMiddleware(thunk)
);



