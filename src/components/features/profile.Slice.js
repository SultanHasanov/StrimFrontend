import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    profile: {},
    error: null,
}

export const getPofileRequest = createAsyncThunk("/profile", async (userId, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:4000/profile/${userId}`)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const changeProfileRequest = createAsyncThunk("/profile", async (data, thunkAPI) => {
    try {
        const response = await axios.patch(`http://localhost:4000/profile${data.userId}`, {data})
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getPofileRequest.fulfilled, (state, action) => {
            state.profile = action.payload;
          })
          .addCase(getPofileRequest.rejected, (state, action) => {
            state.error = action.payload;
          });
    }
})


export default profileSlice.reducer;