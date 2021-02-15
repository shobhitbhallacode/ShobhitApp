import { ListExpenseActionTypes, ExpenseState, GetExpenseActionTypes, AddExpenseActionTypes, UpdateExpenseActionTypes, DeleteExpenseActionTypes } from '../types/Expense';
import { Reducer } from "redux";
import { ParseToJSON } from '../services/HelperService';
 
export const initialState = new ExpenseState();
const reducer: Reducer<ExpenseState> = (state = initialState, action): ExpenseState => {
  switch (action.type) {
    case ListExpenseActionTypes.LIST_REQUEST: {
      return { ...state, i: { pL: true, d: [], err: "" } };
    }
    case ListExpenseActionTypes.LIST_SUCCESS: {
      return { ...state, i: { pL: false, d: ParseToJSON(action.guid, action.payload), err: "" } };
    }
    case ListExpenseActionTypes.LIST_ERROR: {
      return { ...state, i: { pL: false, err: action.payload, d: ParseToJSON(action.guid, action.payload) } };
    }
    case GetExpenseActionTypes.FETCH_REQUEST: {
      return { ...state, i: { pL: true, d: [], err: "" } };
    }
    case GetExpenseActionTypes.FETCH_SUCCESS: {
      return { ...state, i: { pL: false, d: ParseToJSON(action.guid, action.payload), err: "" } };
    }
    case GetExpenseActionTypes.FETCH_ERROR: {
      return { ...state, i: { pL: false, err: action.payload, d: ParseToJSON(action.guid, action.payload) } };
    }
    case AddExpenseActionTypes.ADD_REQUEST: {
      return { ...state, i: { pL: true, d: [], err: "" } };
    }
    case AddExpenseActionTypes.ADD_SUCCESS: {
      return { ...state, i: { pL: false, d: ParseToJSON(action.guid, action.payload), err: "" } };
    }
    case AddExpenseActionTypes.ADD_ERROR: {
      return { ...state, i: { pL: false, err: action.payload, d: ParseToJSON(action.guid, action.payload) } };
    }
    case UpdateExpenseActionTypes.UPDATE_REQUEST: {
      return { ...state, i: { pL: true, d: [], err: "" } };
    }
    case UpdateExpenseActionTypes.UPDATE_SUCCESS: {
      return { ...state, i: { pL: false, d: ParseToJSON(action.guid, action.payload), err: "" } };
    }
    case UpdateExpenseActionTypes.UPDATE_ERROR: {
      return { ...state, i: { pL: false, err: action.payload, d: ParseToJSON(action.guid, action.payload) } };
    }
    case DeleteExpenseActionTypes.DELETE_REQUEST: {
      return { ...state, i: { pL: true, d: [], err: "" } };
    }
    case DeleteExpenseActionTypes.DELETE_SUCCESS: { 
      return { ...state, i: { pL: false, d: ParseToJSON(action.guid, action.payload), err: "" } };
    }
    case DeleteExpenseActionTypes.DELETE_ERROR: {
      return { ...state, i: { pL: false, err: action.payload, d: ParseToJSON(action.guid, action.payload) } };
    }
    //----------------------------------------------------------------------------------
    default: {
      return state;
    }
  }
};

export { reducer as expenseReducer };