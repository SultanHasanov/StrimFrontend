import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../components/features/userSlice"
import products from "../components/features/productsSlice"

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: products
    }
})