import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"serch",
    initialState:[],
    reducers:{
        addToCache:(state,action)=>{state.push(action.payload)},
        
        clearCache:(state)=>state.length = 0
    }
});

export const {addToCache, clearCache} = searchSlice.actions;
export default searchSlice.reducer;