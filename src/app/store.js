import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../components/features/userSlice"
import products from "../components/features/productsSlice"
import cart from "../components/features/cartSlice"
import profileSlice from "../components/features/profile.Slice";
import favorite from "../components/features/favoriteSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: products,
    cart: cart,
    profile: profileSlice,
    favorite: favorite
  },
});