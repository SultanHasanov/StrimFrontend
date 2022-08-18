import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    products: [],

}


export const getProducts = createAsyncThunk("get/products", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product", )
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})


export default productsSlice.reducer