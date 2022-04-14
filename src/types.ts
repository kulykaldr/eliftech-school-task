export interface Bank {
  ID: number,
  BankName: string,
  InterestRate: number,
  MaximumLoan: number,
  MinimumDownPayment: number,
  LoanTerm: number,
}

export interface StateType {
  banks: Bank[]
}

export enum Actions {
  DELETE_BANK = 'DELETE_BANK',
  EDIT_BANK = 'EDIT_BANK',
  ADD_BANK = 'ADD_BANK',
}

export interface DeleteAction {
  type: Actions.DELETE_BANK
  payload: Bank
}

export interface EditAction {
  type: Actions.EDIT_BANK
  payload: Bank
}

export interface AddAction {
  type: Actions.ADD_BANK
  payload: Bank
}

export type ActionType = DeleteAction | EditAction | AddAction