import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { baseURL } from "../../../../../config/baseURLConfig";
import { ApplicationState } from "../../reducers";
import { AddExpenseActionTypes, DeleteExpenseActionTypes, Expense, GetExpenseActionTypes, ListExpenseActionTypes, UpdateExpenseActionTypes } from "../../types/Expense";
import { fetch } from "../../services/BaseService";
import { authToken } from "../../services/HelperService";

export const getExpenseList: ActionCreator<ThunkAction<void, ApplicationState, null, Action<string>
>> = (component_guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ListExpenseActionTypes.LIST_REQUEST,
      loading: true,
    })
    fetch("GET", baseURL + "/expense/", authToken)?.then((response: []) => {
      dispatch({
        type: ListExpenseActionTypes.LIST_SUCCESS,
        loading: false,
        payload: response,
        guid: component_guid
      })
    }).catch((error: any) => {
      dispatch({
        type: ListExpenseActionTypes.LIST_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  }
}
export const getExpenseDetails: ActionCreator<ThunkAction<void, ApplicationState, Expense, Action<string>
>> = (component_guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GetExpenseActionTypes.FETCH_REQUEST,
      loading: true
    })
    fetch("GET", baseURL + "/expense/", authToken)?.then((response: []) => {
      dispatch({
        type: GetExpenseActionTypes.FETCH_SUCCESS,
        loading: false,
        payload: response,
        guid: component_guid
      })
    }).catch((error: any) => {
      dispatch({
        type: GetExpenseActionTypes.FETCH_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  };
};
export const addExpense: ActionCreator<ThunkAction<void, ApplicationState, Expense, Action<string>
>> = item => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AddExpenseActionTypes.ADD_REQUEST,
      loading: true
    })
    fetch("POST", baseURL + "/expense/", authToken, JSON.stringify(item))?.then((response: []) => {
      dispatch({
        type: AddExpenseActionTypes.ADD_SUCCESS,
        loading: false,
        payload: response,
        guid: item.guid
      })
    }).catch((error: any) => {
      dispatch({
        type: AddExpenseActionTypes.ADD_ERROR,
        loading: false,
        error: error.message
      })
    });
  };
};
export const updateExpense: ActionCreator<ThunkAction<void, ApplicationState, Expense, Action<string>
>> = (guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: UpdateExpenseActionTypes.UPDATE_REQUEST,
      loading: true
    })
    fetch("GET", baseURL + "/expense/", authToken, JSON.stringify({ "guid": guid }))?.then((response: []) => {
      dispatch({
        type: UpdateExpenseActionTypes.UPDATE_SUCCESS,
        loading: false,
        payload: response,
        guid: guid
      })
    }).catch((error: any) => {
      dispatch({
        type: UpdateExpenseActionTypes.UPDATE_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  };
};
export const deleteExpense: ActionCreator<ThunkAction<void, ApplicationState, Expense, Action<string>
>> = (guid) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: DeleteExpenseActionTypes.DELETE_REQUEST,
      loading: true
    })
    fetch("POST", baseURL + "/expense/", authToken, JSON.stringify({ "guid": guid }))?.then((response: []) => {
      dispatch({
        type: DeleteExpenseActionTypes.DELETE_SUCCESS,
        loading: false,
        payload: response,
        guid: guid
      })
    }).catch((error: any) => {
      dispatch({
        type: DeleteExpenseActionTypes.DELETE_ERROR,
        loading: false,
        error: error.message
      })
      console.log(error.message);
    });
  }
};