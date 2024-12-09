import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { slice } from "./selector";


export type AppStore = typeof store;


const reducers = combineReducers({
    getApi: slice.reducer
    
})

export const store = configureStore({
    reducer: reducers
})

export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>
export type TypeArhivRedusers = ReturnType<typeof reducers>