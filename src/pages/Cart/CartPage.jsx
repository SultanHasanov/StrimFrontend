import React, { useEffect } from 'react';
import styles from './CartPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from './../../components/features/cartSlice';

const CartPage = () => {

        const dispatch = useDispatch();

        const cart = useSelector((state) => state.cart.cart.products);
        console.log(cart)

        useEffect(() => {
            dispatch(getCart());
        }, [dispatch]);

        if(cart) {
            const random = cart.map((item) => {
                return (
                    <div>{item.productId}</div>
                )
            })
    
    
    
            return (
            <div className={styles.back}>
                {random}
            </div>
        );
        }

        
};

export default CartPage;