import { createAsyncThunk, createSlice , PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type TypeJson = {
    id: number,
    images: string ,
    name: string,
    information: string,
    sale: number
}

type TypeInitState = {
    data: TypeJson[];
    loading: boolean ,
    errors: boolean
}

const initialState = { data: [] , loading: false , errors: true } satisfies TypeInitState as TypeInitState;

export const getApi = createAsyncThunk("Api" , async(_, thunk) => {
    try {
        const json = await axios.get("https://miskaolega.github.io/json-api-server/cardsOfCars.json");
    return json.data.sale
    } catch (error) {
        thunk.fulfillWithValue(error)
    }

})

export const slice = createSlice({
    name: "getApi" ,
    initialState , 
    reducers: {
        clearReduser: (state , {payload: bool}:PayloadAction<boolean>) => {
            if(bool) {
                state.data = []
                return state
            }
        }
    }, 
    extraReducers: apiInfa => {
        apiInfa.addCase(getApi.pending , state => {state.loading = true})
        .addCase(getApi.fulfilled , (state , action:PayloadAction<TypeJson[]>) => {
            state.loading = false;
            state.data = action.payload
        })
    }
});