import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../components/features/userSlice"
import products from "../components/features/productsSlice"
import cart from "../components/features/cartSlice"

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: products,
        cart: cart
    }
})