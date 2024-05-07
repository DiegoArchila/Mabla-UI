import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/products/productsSlices";

export const Store=configureStore({
    reducer:{
        products: counterSlice.reducer
    }
})