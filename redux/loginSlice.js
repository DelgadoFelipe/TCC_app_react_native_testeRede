import { createSlice } from "@reduxjs/toolkit";
import { defaultThemesByVersion } from "react-native-paper/lib/typescript/core/theming";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: '',
        pwd: '',
        logindId: 0,
    }, 

    reducers: {
        setUser: (state, action) => {
            console.log('teste')
            state.user = action.payload;
        },

        setPwd: (state, action) => {
            state.pwd = action.payload;
        },

        setLoginId: (state, action) => {
            state.logindId = action.payload
        },
    },
})

export const {
    setUser,
    setPwd,
    setLoginId
} = loginSlice.actions;

export default loginSlice.reducer;