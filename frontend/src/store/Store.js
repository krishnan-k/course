import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice";
export const store = configureStore({
    reducer: {
        onlinecourse: cartSlice
    },
    devTools: true
});