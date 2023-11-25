import { createReducer, on } from "@ngrx/store";

// actions 
import { increment } from "./counter.actions";

// estado inicial
export const initialState = 0

// reducers
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {return state + 1})
)