import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart, reduceItemFromCart } from "./cartUtils";

const initialState = {
    hidden: false,
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setHidden: (state, action) => {
            state.hidden = !state.hidden
        },
        addItems: (state, action) => {
            state.cartItems = (addItemToCart(state.cartItems, action.payload))
        },
        clearItems: (state, action) => {
            state.cartItems = (removeItemFromCart(state.cartItems, action.payload))
        },
        reduceItems: (state, action) => {
            state.cartItems =(reduceItemFromCart(state.cartItems, action.payload))
        }
    }
})

export const selectCartState = (state) => state.cart.hidden

export const selectAllItems = (state) => state.cart.cartItems

export const { setHidden, addItems, clearItems, reduceItems } = cartSlice.actions

export default cartSlice.reducer