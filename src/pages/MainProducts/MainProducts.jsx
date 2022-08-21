import { useDispatch, useSelector } from "react-redux";
import styles from "./MainProducts.module.css";
import Products from "./Products";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import { useEffect } from "react";
import { getProducts } from "../../components/features/productsSlice";
import { getCart } from "../../components/features/cartSlice";
import { getFavorite } from './../../components/features/favoriteSlice';

const MainProducts = () => {
  const product = useSelector((state) => state.products.products);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart.products)
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  const liveSearch = product.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  if(cart) {

      return (
        <div className={styles.main}>
          <div className={styles.categories}>
            <div className={styles.title}>
              <span>РАЗДЕЛЫ</span>
            </div>
            <div className={styles.search}>
              <input type="text" required value={search} onChange={handleChange} />
              <span>
                <AiOutlineSearch fontSize={"26"} />
              </span>
            </div>
            <Categories />
          </div>
          <div className={styles.products}>
            {liveSearch.map((item) => {
              return <Products images={item.images} product={item} cartInfo={cart}/>;
            })}
          </div>
        </div>
      );
  }
};

export default MainProducts;
