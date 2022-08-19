import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainProducts.module.css";
import { useEffect } from "react";
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'
import { getProducts } from "../../components/features/productsSlice";
import { addProductInBasket } from "../../components/features/cartSlice";

const Products = (props) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddInBasket = (productId) => {
    console.log(productId)
    dispatch(addProductInBasket({productId}))
  }

  const products = props.liveSearch.map((item, index) => {
    if (item.size === "XL") {
      return (
        <div className={styles.product} key={item._id}>
          <div className={styles.image}>
                <div>
                {item.images.map((product) => {
                    if (product.color === "black") {
                    return (
                        <>
                        <img src={product.image} alt="logo"></img>
                        </>
                    );
                    }
                })}
            </div>
            <div className={styles.product_info}>
                <span>{item.name}</span>
                <span>{item.price}₽</span>
            </div>
            <div className={styles.btn}>
                <button onClick={() => handleAddInBasket(item._id)}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      );
    }
  });

  return <div className={styles.products}>{products}</div>;
};

export default Products;



{/* <div className={styles.colors}>
<RiCheckboxBlankCircleFill style={{color: "black", fontSize: '1rem'}}/>
<RiCheckboxBlankCircleFill style={{color: "gray", fontSize: '1rem'}}/>
<RiCheckboxBlankCircleFill style={{color: "rgb(64, 105, 255)", fontSize: '1rem'}}/>
</div> */}