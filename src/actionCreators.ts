import { Actions, Bank } from './types'

// Action creators
export const deleteBankAction = (payload: Bank) => ({ type: Actions.DELETE_BANK, payload })
export const editBankAction = (payload: Bank) => ({ type: Actions.EDIT_BANK, payload })
export const addBankAction = (payload: Bank) => ({ type: Actions.ADD_BANK, payload })