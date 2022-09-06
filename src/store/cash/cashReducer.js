import { ADD_CASH, GET_CASH } from "./cashVars";


const defaultState = {
	cash: 5
}


export default function cashReducer(state = defaultState , action) {
	switch (action.type) {
		case ADD_CASH:
			return {...state, cash: state.cash + 5}
		case GET_CASH:
			return {...state, cash: state.cash - 5}
		default:
			return state;
	}
}