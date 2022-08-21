import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    products: [],
    costums: []
}


export const getProducts = createAsyncThunk("get/products", async (categoryId, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product", {category: 'Костюмы'})
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getBruks = createAsyncThunk("get/costums", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/bruks")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getObuv = createAsyncThunk("get/costums", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/obuv")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getOchki = createAsyncThunk("get/costums", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/ochki")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getRubashki = createAsyncThunk("get/costums", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/rubashki")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getChasi = createAsyncThunk("get/costums", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/chasi")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const getCostums = createAsyncThunk("get/costums", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/product/costums")
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
        .addCase(getCostums.fulfilled, (state, action) => {
            state.costums = action.payload
        })
    }
})


export default productsSlice.reducer