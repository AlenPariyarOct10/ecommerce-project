import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity : 0,
    totalPrice : 0.0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.cartItems.push(newItem);
            state.totalPrice += parseFloat(newItem.price - (newItem.price*newItem.discount)/100)*newItem.quantity;
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;