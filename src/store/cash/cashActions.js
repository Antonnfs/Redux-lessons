import { ADD_CASH, GET_CASH, ASYNC_ADD_CASH, ASYNC_GET_CASH } from './cashVars';


export const addCashAction = () => ({
	type: ADD_CASH,
}) 
export const getCashAction = () => ({
	type: GET_CASH,
}) 
export const asyncAddCashAction = () => ({
	type: ASYNC_ADD_CASH,
})
export const asyncGetCashAction = () => ({
	type: ASYNC_GET_CASH,
})