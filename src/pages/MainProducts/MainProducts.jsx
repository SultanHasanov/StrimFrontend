import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './MainProducts.module.css'
import { useEffect } from 'react';
import { getProducts } from '../../components/features/productsSlice';

const MainProducts = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products.products)
    console.log(allProducts)

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    const products = allProducts.map((item, index) => {
        const imagesGet = item.images.map((product) => {
            return (
                <img src={product.image} alt='logo'></img>
            )
        })
        return (
            <div className={styles.product} key={item._id} >
                <div className={styles.image}>
                    <div>{imagesGet}</div>
                </div>
            </div>
        )
    })


  return (
    <div className={styles.main}>
        <div className={styles.categories}>
            1
        </div>
        <div className={styles.products}>
            {products}
        </div>
    </div>
  )
}

export default MainProducts