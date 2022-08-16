import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../components/features/userSlice"

export const store = configureStore({
    reducer: {
        user: userSlice,
    }
})