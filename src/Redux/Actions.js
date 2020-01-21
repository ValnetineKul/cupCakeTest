import * as TYPES from './Type'

export const setItems = (data) => ({type: TYPES.SET_ITEMS, data});
export const addToCart = (id, quantity) => ({type: TYPES.ADD_TO_CART, id, quantity});
export const removeItem = (id) => ({type: TYPES.REMOVE_ITEM, id});
export const subtractQuantity = (id) => ({type: TYPES.SUB_QUANTITY, id});
export const addQuantity = (id) => ({type: TYPES.ADD_QUANTITY, id});
export const startPollingAction = () => ({type: TYPES.START_POLLING});