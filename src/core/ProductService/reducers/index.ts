import { expenseReducer } from "./ExpenseReducer";
import { combineReducers } from "redux";
import { ExpenseState } from "../types/Expense";

export interface ApplicationState{
    expense: ExpenseState;
    //inventory: InventoryState;    
}
export const rootReducer = combineReducers({
    expense: expenseReducer
});
export type AppState = ReturnType<typeof rootReducer>