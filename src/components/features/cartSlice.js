import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    cart: [],
    error: null,
}

const user = localStorage.getItem('user')

export const getCart = createAsyncThunk("get/cart", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:4000/cart/${user}`, )
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const addProductInBasket = createAsyncThunk("add/cart", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:4000/cart/add/${user}`, { product: productId})
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload
            console.log(state.cart)
        })
        .addCase(getCart.rejected, (state, action) => {
            state.error = action.payload
            console.log(action.payload)
        })
        builder
        .addCase(addProductInBasket.fulfilled, (state, action) => {
            state.cart.push(action.payload)
        })
    }
})


export default cartSlice.reducer