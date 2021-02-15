export interface Expense {
  id: string;
  description: string;
  note: string;
  amount: number;
  createdat: Date;
}

export class ExpenseState {
  readonly i: { pL: boolean, d: [], err: string } = { pL: false, d: [], err: "" };
}
export enum ListExpenseActionTypes {
  LIST_REQUEST = "@@EXPENSE/LIST_REQUEST",
  LIST_SUCCESS = "@@EXPENSE/LIST_SUCCESS",
  LIST_ERROR = "@@EXPENSE/LIST_ERROR"
}
export enum GetExpenseActionTypes {
  FETCH_REQUEST = "@@EXPENSE/FETCH_REQUEST",
  FETCH_SUCCESS = "@@EXPENSE/FETCH_SUCCESS",
  FETCH_ERROR = "@@EXPENSE/FETCH_ERROR"
}

export enum AddExpenseActionTypes {
  ADD_REQUEST = "@@EXPENSE/ADD_REQUEST",
  ADD_SUCCESS = "@@EXPENSE/ADD_SUCCESS",
  ADD_ERROR = "@@EXPENSE/ADD_ERROR"
}

export enum UpdateExpenseActionTypes {
  UPDATE_REQUEST = "@@EXPENSE/UPDATE_REQUEST",
  UPDATE_SUCCESS = "@@EXPENSE/UPDATE_SUCCESS",
  UPDATE_ERROR = "@@EXPENSE/UPDATE_ERROR"
}
export enum DeleteExpenseActionTypes {
  DELETE_REQUEST = "@@EXPENSE/DELETE_REQUEST",
  DELETE_SUCCESS = "@@EXPENSE/DELETE_SUCCESS",
  DELETE_ERROR = "@@EXPENSE/DELETE_ERROR"
}