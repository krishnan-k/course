import { createSlice } from "@reduxjs/toolkit";


const storeItems = localStorage.getItem("cartItems");
const initialState = { cartItems: storeItems ? JSON.parse(storeItems) : [] };

const cartSlice = createSlice({
    name: "onlinecourse",
    initialState,
    reducers: {
        addToCourse: (state, action) => {
            const newCourse = action.payload;
            const existingCourse = state.cartItems.find((items) => 
                items._id === newCourse._id
            );
            if (existingCourse) {
                existingCourse.quantity += newCourse.quantity
            } else {
                state.cartItems.push({
                    _id: newCourse._id,
                    formTitle: newCourse.formTitle,
                    category: newCourse.category,
                    level: newCourse.level,
                    formDesc:newCourse.formDesc,
                    quantity: 1
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        deleteCourse: (state, action) => {
            state.cartItems = state.cartItems.filter((items) => 
                items._id !== action.payload._id
            );
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    }
});

export default cartSlice.reducer;
export const { addToCourse, deleteCourse } = cartSlice.actions;