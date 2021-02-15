export interface Product {
    id: string;
    description: string;
    note: string;
    amount: number;
    createdat: Date;
  }
  
  export class ProductState {
    readonly i: { pL: boolean, d: [], err: string } = { pL: false, d: [], err: "" };
  }
  export enum ListProductActionTypes {
    LIST_REQUEST = "@@PRODUCT/LIST_REQUEST",
    LIST_SUCCESS = "@@PRODUCT/LIST_SUCCESS",
    LIST_ERROR = "@@PRODUCT/LIST_ERROR"
  }
  export enum GetProductActionTypes {
    FETCH_REQUEST = "@@PRODUCT/FETCH_REQUEST",
    FETCH_SUCCESS = "@@PRODUCT/FETCH_SUCCESS",
    FETCH_ERROR = "@@PRODUCT/FETCH_ERROR"
  }
  
  export enum AddProductActionTypes {
    ADD_REQUEST = "@@PRODUCT/ADD_REQUEST",
    ADD_SUCCESS = "@@PRODUCT/ADD_SUCCESS",
    ADD_ERROR = "@@PRODUCT/ADD_ERROR"
  }
  
  export enum UpdateProductActionTypes {
    UPDATE_REQUEST = "@@PRODUCT/UPDATE_REQUEST",
    UPDATE_SUCCESS = "@@PRODUCT/UPDATE_SUCCESS",
    UPDATE_ERROR = "@@PRODUCT/UPDATE_ERROR"
  }
  export enum DeleteProductActionTypes {
    DELETE_REQUEST = "@@PRODUCT/DELETE_REQUEST",
    DELETE_SUCCESS = "@@PRODUCT/DELETE_SUCCESS",
    DELETE_ERROR = "@@PRODUCT/DELETE_ERROR"
  }