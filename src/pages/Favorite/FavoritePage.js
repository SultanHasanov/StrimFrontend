import React, { useEffect } from "react";
import styles from "./FavoritePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./../../components/features/cartSlice";
import { VscLocation } from "react-icons/vsc";
import { GiBusStop } from "react-icons/gi";
import { deleteProductInBasket } from "./../../components/features/cartSlice";
import { getFavorite } from './../../components/features/favoriteSlice';

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  const handleDelete = (productId) => {
      dispatch(deleteProductInBasket({productId}))
  }
  const favorite = useSelector((state) => state.products);

      console.log(favorite)
      console.log("123")


  }

export default FavoritePage;
