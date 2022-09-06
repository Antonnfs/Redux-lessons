import { ADD_CUSTOMER, REMOVE_CUSTOMER, ADD_MANY_CUSTOMERS } from "./customerVars";

export const addManyCustomersAction = (payload) => ({
	type: ADD_MANY_CUSTOMERS,
	payload
})
export const addCustomerAction = (payload) => ({
	type: ADD_CUSTOMER,
	payload
})
export const removeCustomerAction = (payload) => ({
	type: REMOVE_CUSTOMER,
	payload
})