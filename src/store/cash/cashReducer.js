import { ADD_CASH, GET_CASH } from "./cashVars";


const defaultState = {
	cash: 5
}


export default function cashReducer(state = defaultState , action) {
	switch (action.type) {
		case ADD_CASH:
			return {...state, cash: state.cash + action.payload}
		case GET_CASH:
			return {...state, cash: state.cash - action.payload}
		default:
			return state;
	}
}