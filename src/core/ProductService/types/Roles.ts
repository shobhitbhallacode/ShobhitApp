export interface Roles {
  id: string;
  description: string;
  note: string;
  amount: number;
  createdat: number;
}

export interface RolesState {
  readonly loading: boolean;
  readonly data: Roles[];
  readonly errors?: string;
}
export enum ListRolesActionTypes {
  LIST_REQUEST = "@@ROLES/LIST_REQUEST",
  LIST_SUCCESS = "@@ROLES/LIST_SUCCESS",
  LIST_ERROR = "@@ROLES/LIST_ERROR"
}
export enum GetRolesActionTypes {
  FETCH_REQUEST = "@@ROLES/FETCH_REQUEST",
  FETCH_SUCCESS = "@@ROLES/FETCH_SUCCESS",
  FETCH_ERROR = "@@ROLES/FETCH_ERROR"
}

export enum AddRolesActionTypes {
  ADD_REQUEST = "@@ROLES/ADD_REQUEST",
  ADD_SUCCESS = "@@ROLES/ADD_SUCCESS",
  ADD_ERROR = "@@ROLES/ADD_ERROR"
}

export enum UpdateRolesActionTypes {
  UPDATE_REQUEST = "@@ROLES/UPDATE_REQUEST",
  UPDATE_SUCCESS = "@@ROLES/UPDATE_SUCCESS",
  UPDATE_ERROR = "@@ROLES/UPDATE_ERROR"
}
export enum DeleteRolesActionTypes {
  DELETE_REQUEST = "@@ROLES/DELETE_REQUEST",
  DELETE_SUCCESS = "@@ROLES/DELETE_SUCCESS",
  DELETE_ERROR = "@@ROLES/DELETE_ERROR"
}