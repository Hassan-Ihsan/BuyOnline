import { configureStore } from "@reduxjs/toolkit";
import {trendProdSlice} from "./TrendingProductsSlice";
import  newArrivalProdSlice from "./NewArrivalProductSlice";
import { cartApi } from "./CartSlice";
import { searchSlice } from "./SearchSlice";




export const store = configureStore({
    reducer :{
        trendProduct :trendProdSlice.reducer,
        newArrivalPro: newArrivalProdSlice,
        [cartApi.reducerPath]:cartApi.reducer,
        search:searchSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware),
})
   

