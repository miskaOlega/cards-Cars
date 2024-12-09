import { createAsyncThunk, createSlice , PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface TypeJson  {
    id: number,
    images: string ,
    name: string,
    information: string,
    sale: number ,
    likesOfUsers: string[] ,
    
}

type TypeInitState = {
    data: TypeJson[];
    loading: boolean ,
    errors: boolean ,
    favoriteCards: TypeJson[]
}


const initialState = { data: [] , loading: false , errors: true , favoriteCards: [] } satisfies TypeInitState as TypeInitState;

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
        licke: (state , {payload: {ids , name}}:PayloadAction<{ids: number , name: string}>) => {
                if(!state.data[state.data.findIndex(i => i.id === ids)].likesOfUsers.some(i => i === name)) {
                state.data[state.data.findIndex(i => i.id === ids)].likesOfUsers.push(name)
                return state
                } else {
                state.data[state.data.findIndex(i => i.id === ids)].likesOfUsers.splice(state.data[state.data.findIndex(i => i.id === ids)].likesOfUsers.findIndex(i => i === name) , 1)
                    return state
                }

        } , 
        deleteCard: (state , {payload: ids}:PayloadAction<number>) => {
            if(state.data.some(g => g.id === ids)) {
                state.data.splice(state.data.findIndex(i => i.id === ids) , 1);
                state.favoriteCards.splice(state.data.findIndex(i => i.id === ids) , 1)
                return state
            }
            return state 
        } ,
        favorites: (state , {payload: ids}:PayloadAction<number>) => {
            if(state.data.some(y => y.id === ids)) {
            if(!state.favoriteCards.some(i => i.id === ids)) {
                state.favoriteCards.push(state.data[state.data.findIndex(c => c.id === ids)])
                return state
            } else {
                state.favoriteCards.splice(state.favoriteCards.findIndex(i => i.id === ids) , 1)
                return state
            }
        } else {
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