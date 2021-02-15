import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { baseURL } from "../../../../../config/baseURLConfig";
import { ApplicationState } from "../../reducers";
import { AddProductActionTypes, DeleteProductActionTypes, Product, GetProductActionTypes, ListProductActionTypes, UpdateProductActionTypes } from "../../types/Product";
import { fetch } from "../../services/BaseService";
import { authToken } from "../../services/HelperService";

export const getProductList: ActionCreator<ThunkAction<void, ApplicationState, null, Action<string>
>> = (component_guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ListProductActionTypes.LIST_REQUEST,
      loading: true,
    })
    fetch("GET", baseURL + "/Product/", authToken)?.then((response: []) => {
      dispatch({
        type: ListProductActionTypes.LIST_SUCCESS,
        loading: false,
        payload: response,
        guid: component_guid
      })
    }).catch((error: any) => {
      dispatch({
        type: ListProductActionTypes.LIST_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  }
}
export const getProductDetails: ActionCreator<ThunkAction<void, ApplicationState, Product, Action<string>
>> = (component_guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GetProductActionTypes.FETCH_REQUEST,
      loading: true
    })
    fetch("GET", baseURL + "/Product/", authToken)?.then((response: []) => {
      dispatch({
        type: GetProductActionTypes.FETCH_SUCCESS,
        loading: false,
        payload: response,
        guid: component_guid
      })
    }).catch((error: any) => {
      dispatch({
        type: GetProductActionTypes.FETCH_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  };
};
export const addProduct: ActionCreator<ThunkAction<void, ApplicationState, Product, Action<string>
>> = item => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AddProductActionTypes.ADD_REQUEST,
      loading: true
    })
    fetch("POST", baseURL + "/Product/", authToken, JSON.stringify(item))?.then((response: []) => {
      dispatch({
        type: AddProductActionTypes.ADD_SUCCESS,
        loading: false,
        payload: response,
        guid: item.guid
      })
    }).catch((error: any) => {
      dispatch({
        type: AddProductActionTypes.ADD_ERROR,
        loading: false,
        error: error.message
      })
    });
  };
};
export const updateProduct: ActionCreator<ThunkAction<void, ApplicationState, Product, Action<string>
>> = (guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: UpdateProductActionTypes.UPDATE_REQUEST,
      loading: true
    })
    fetch("GET", baseURL + "/Product/", authToken, JSON.stringify({ "guid": guid }))?.then((response: []) => {
      dispatch({
        type: UpdateProductActionTypes.UPDATE_SUCCESS,
        loading: false,
        payload: response,
        guid: guid
      })
    }).catch((error: any) => {
      dispatch({
        type: UpdateProductActionTypes.UPDATE_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  };
};
export const deleteProduct: ActionCreator<ThunkAction<void, ApplicationState, Product, Action<string>
>> = (guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: DeleteProductActionTypes.DELETE_REQUEST,
      loading: true
    })
    fetch("POST", baseURL + "/Product/", authToken, JSON.stringify({ "guid": guid }))?.then((response: []) => {
      dispatch({
        type: DeleteProductActionTypes.DELETE_SUCCESS,
        loading: false,
        payload: response,
        guid: guid
      })
    }).catch((error: any) => {
      dispatch({
        type: DeleteProductActionTypes.DELETE_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  }
};