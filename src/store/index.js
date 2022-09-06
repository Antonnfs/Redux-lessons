import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import cashReducer from './cash/cashReducer';
import customerReducer from './customers/customerReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import  ThunkAction from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	cash: cashReducer,
	customer: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkAction, sagaMiddleware)))

sagaMiddleware.run(rootWatcher)