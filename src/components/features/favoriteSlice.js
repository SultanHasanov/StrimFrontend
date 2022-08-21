import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    favorite: [],
    error: null,
}

const user = localStorage.getItem('user')

export const getFavorite = createAsyncThunk("get/favorite", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:4000/favorite/${user}`)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const addProductInFavorite = createAsyncThunk("add/favorite", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:4000/favorite/add/${user}`, { product: productId})
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const deleteProductFromFavorite = createAsyncThunk("delete/favorite", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:4000/favorite/delete/${user}`, { data: { product: productId}})
        console.log(user)
        console.log(productId)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFavorite.fulfilled, (state, action) => {
            state.favorite = action.payload
            console.log(action)
        })
    }
})


export default favoriteSlice.reducer