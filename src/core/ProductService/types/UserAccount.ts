export interface UserAccount {
  id: string;
  description: string;
  note: string;
  amount: number;
  createdat: number;
}

export interface UserAccountState {
  readonly loading: boolean;
  readonly data: UserAccount[];
  readonly errors?: string;
}
export enum ListUserAccountActionTypes {
  LIST_REQUEST = "@@USERACCOUNT/LIST_REQUEST",
  LIST_SUCCESS = "@@USERACCOUNT/LIST_SUCCESS",
  LIST_ERROR = "@@USERACCOUNT/LIST_ERROR"
}
export enum GetUserAccountActionTypes {
  FETCH_REQUEST = "@@USERACCOUNT/FETCH_REQUEST",
  FETCH_SUCCESS = "@@USERACCOUNT/FETCH_SUCCESS",
  FETCH_ERROR = "@@USERACCOUNT/FETCH_ERROR"
}

export enum AddUserAccountActionTypes {
  ADD_REQUEST = "@@USERACCOUNT/ADD_REQUEST",
  ADD_SUCCESS = "@@USERACCOUNT/ADD_SUCCESS",
  ADD_ERROR = "@@USERACCOUNT/ADD_ERROR"
}

export enum UpdateUserAccountActionTypes {
  UPDATE_REQUEST = "@@USERACCOUNT/UPDATE_REQUEST",
  UPDATE_SUCCESS = "@@USERACCOUNT/UPDATE_SUCCESS",
  UPDATE_ERROR = "@@USERACCOUNT/UPDATE_ERROR"
}
export enum DeleteUserAccountActionTypes {
  DELETE_REQUEST = "@@USERACCOUNT/DELETE_REQUEST",
  DELETE_SUCCESS = "@@USERACCOUNT/DELETE_SUCCESS",
  DELETE_ERROR = "@@USERACCOUNT/DELETE_ERROR"
}