import React from "react";
import { useSelector } from "react-redux";
import styles from "./MainProducts.module.css";
import Products from "./Products";

const MainProducts = () => {
    const product = useSelector((state) => state.products.products)
    console.log(product)

    const catgories = [
        {
            id: 1,
            title: "Все товары"
        },

        {
            id: 2,
            title: "Костюмы"
        },

        {
            id: 3,
            title: "Брюки"
        },

        {
            id: 4,
            title: "Очки"
        },

        {
            id: 5,
            title: "Рубашки"
        },

        {
            id: 6,
            title: "Часы"
        },

        {
            id: 7,
            title: "Обувь"
        }
    ]

  return (
    <div className={styles.main}>
      <div className={styles.categories}>
          <div className={styles.title}>
              <span>РАЗДЕЛЫ</span>
          </div>
              <ul className={styles.tovars}>
                  {catgories.map((categories, index) => {
                      return (
                          <li>{categories.title}</li>
                      )
                  })}
              </ul>
      </div>
      <Products />
    </div>
  );
};

export default MainProducts;
