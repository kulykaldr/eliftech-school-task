import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import { Actions, ActionType, StateType } from './types'

export const initialState: StateType = {
  banks: [
    {
      ID: 12369855446,
      BankName: 'Deutsche Welle',
      InterestRate: 16,
      MaximumLoan: 100000,
      MinimumDownPayment: 10,
      LoanTerm: 12,
    },
    {
      ID: 56697723324,
      BankName: 'JPMorgan',
      InterestRate: 12,
      MaximumLoan: 240000,
      MinimumDownPayment: 15,
      LoanTerm: 24,
    },
    {
      ID: 999872223,
      BankName: 'Bank of America',
      InterestRate: 13,
      MaximumLoan: 320000,
      MinimumDownPayment: 20,
      LoanTerm: 48,
    }
  ]
}

// Reducer 
export const reducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case Actions.DELETE_BANK:
      return {
        banks: state.banks.filter(item => item.ID !== action.payload.ID),
      }

    case Actions.EDIT_BANK:
      return {
        banks: state.banks.map(item => item.ID === action.payload.ID
          ? action.payload : item)
      }

    case Actions.ADD_BANK:
      return {
        banks: [
          ...state.banks,
          action.payload
        ]
      }

    default:
      return state
  }
}

// Store 
export const rootReducer = combineReducers({
  bank: reducer,
})
export const store = createStore(rootReducer, composeWithDevTools())
export type RootState = ReturnType<typeof rootReducer>

