import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "./ShopData";


const initialState = {
    collections: SHOP_DATA
}

export const shopSlice = createSlice({
    name: "shop",
    initialState
})

export const selectCollections = (state) => state.shop.collections

export default shopSlice.reducer