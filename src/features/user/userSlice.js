import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser : null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
          state.currentUser = action.payload  
        },
        logUserOut: (state, action) => {
            state.currentUser = null
        }
    }
})

export const selectUser = (state) => state.user.currentUser

export const { setUser, logUserOut} = userSlice.actions

export default userSlice.reducer