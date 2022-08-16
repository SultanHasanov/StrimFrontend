import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    error: null,
    signingIn: false,
    signingUp: false,
    token: localStorage.getItem('token'),
};

export const postUser = createAsyncThunk("user/create", async ({ name, surname, phone, login, password }, thunkAPI) => {
    try {
        const res = await axios.post(`http://localhost:4000/user`, {name, surname, phone, login, password})
        const json = await res.json()
        if(json.error){
            return thunkAPI.rejectWithValue(json.error)
        }
        return json
    
    }
    catch(e) {
        thunkAPI.rejectWithValue(e.message)
    }
})

export const postLogin = createAsyncThunk("auth/SignUp", async ({login, password}, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:4000/login", {login, password});
        const data = await response.data
        if(data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }
        localStorage.setItem("token", data)
        console.log(data)
        return data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signOut: (state, action) => {
            localStorage.removeItem('token')
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postLogin.fulfilled, (state, action) => {
            state.signingIn = false;
            state.error = action.payload
        })
        .addCase(postLogin.rejected, (state, action) => {
            state.signingIn = false;
            state.error = action.payload
        })
    }
});

export const { signOut } = userSlice.actions;

export default userSlice.reducer;