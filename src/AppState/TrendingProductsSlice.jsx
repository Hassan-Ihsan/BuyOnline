import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
     // newProduct:[],
    trendingProduct:[],
    error:null,
    isLoading:false,
   

}
// _,{rejectWithValue}
export const getTrendingData = createAsyncThunk("gettingTrendingData" , async( _,thunkAPI)=>{
    // console.log("thunkapi",thunkAPI)
    try{
    const response = await axios.get("http://localhost:8000/trendingProduct")
    // console.log("datata",response.data)
    return response;
    
}
 catch (error) {
    // console.log(error ,"erraaa" ,error.message)
    
    return thunkAPI.rejectWithValue(error.message);
  }

});

export const trendProdSlice= createSlice({
    name:"trendingPro",
    initialState,
    reducers:{
        // setTrendingProduct:(state,action)=>{
        //     // state.trendingProduct=action.payload;
        // }
    },
    extraReducers :(builder)=>{
        builder
        .addCase(getTrendingData.fulfilled,(state ,action)=>{
            
            state.trendingProduct = action.payload.data
             state.error=null;
            state.isLoading=false;
            
        })
        .addCase(getTrendingData.rejected, (state, action) => {
            state.error = action.payload; 
            state.isLoading=false;
          })
          .addCase(getTrendingData.pending, (state) => {
            state.isLoading=true;
            state.error=null;
          })

    }
})
// export const { setTrendingProduct} = trendProdSlice.actions;
export default trendProdSlice.reducer;


