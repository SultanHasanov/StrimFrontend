import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    cart: [],
    error: null,
}

const user = localStorage.getItem('user')

export const getCart = createAsyncThunk("get/cart", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:4000/cart/${user}`)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const addProductInBasket = createAsyncThunk("add/cart", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:4000/cart/add/${user}`, { product: productId})
        console.log(response)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


export const deleteProductInBasket = createAsyncThunk("delete/cart", async ({productId}, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:4000/cart/delete/${user}`, {data: {product: productId}})
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue(error.message)
    }
})


// export const decAmount = createAsyncThunk("dec/cart", async())


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        .addCase(getCart.rejected, (state, action) => {
            state.error = action.payload
        })
        builder
        .addCase(addProductInBasket.fulfilled, (state, action) => {
            state.cart.push(action.payload)
        })
        .addCase(deleteProductInBasket.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        .addCase(deleteProductInBasket.rejected, (state, action) => {
        })
    }
})


export default cartSlice.reducer