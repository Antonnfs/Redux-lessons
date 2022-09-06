import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import cashReducer from './cash/cashReducer';
import customerReducer from './customers/customerReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import  ThunkAction from 'redux-thunk';


const rootReducer = combineReducers({
	cash: cashReducer,
	customer: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkAction)))

