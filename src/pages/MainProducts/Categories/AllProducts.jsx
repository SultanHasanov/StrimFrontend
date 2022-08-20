import React, { useEffect } from 'react'
import styles from '../MainProducts.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductInBasket, getCart } from '../../../components/features/cartSlice';
import { getProducts } from '../../../components/features/productsSlice';

const AllProducts = (props) => {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.products);
    const cart = useSelector((state) => state.cart.cart.products);
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    useEffect(() => {
      dispatch(getCart());
    }, [dispatch]);
    console.log(props.product)
  
    const handleAddInBasket = (productId) => {
      dispatch(addProductInBasket({ productId }));
    };
    if (cart) {
        if(allProducts.category === "Часы") {
            return (
                <div className={styles.product}>
                  <div className={styles.image}>
                    <div>
                        {props.images.map((item) => {
                            return (
                                <img src={item.image} />
                            )
                        })}
                    </div>
                    <div className={styles.product_info}>
                      <span>{props.product.name}</span>
                      <span>{props.product.price}₽</span>
                    </div>
                    <div className={styles.btn}>
                      <button onClick={() => handleAddInBasket(props.product._id)}>
                        Купить
                      </button>
                    </div>
                  </div>
                </div>
            );
        }
      }
}

export default AllProducts