import React, { useEffect } from 'react';
import styles from './CartPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from './../../components/features/cartSlice';

const CartPage = () => {

        const dispatch = useDispatch();

        const cart = useSelector((state) => state.cart.products);

        useEffect(() => {
            dispatch(getCart());
        }, [dispatch]);

        return (
        <div className={styles.back}>
            123
        </div>
    );
};

export default CartPage;