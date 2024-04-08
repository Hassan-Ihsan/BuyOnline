import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const initialState = {
    newArrivalProduct:[],
    error:null,
    isLoading:false,
}

export const getNewArrivalData = createAsyncThunk("gettingNewArrivalData", async(_,thunkAPI)=>{
    try {
        const result = await axios.get("http://localhost:8000/newArrivalProduct")
        return result
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }

})
export const newArrivalProdSlice= createSlice({
    name:'newArrivalPro',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getNewArrivalData.fulfilled,(state,action)=>{
            state.newArrivalProduct = action.payload.data;
            state.error =null;
            state.isLoading =false;

        })
        .addCase(getNewArrivalData.rejected,(state,action)=>{
            state.error =action.payload;
            state.isLoading =false;

        })
        .addCase(getNewArrivalData.pending,(state)=>{
            state.error =null;
            state.isLoading =true;

        })
    }

})
// export const {} = newArrivalProdSlice.actions
export default newArrivalProdSlice.reducer