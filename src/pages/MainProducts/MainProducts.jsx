import React from "react";
import { useSelector } from "react-redux";
import styles from "./MainProducts.module.css";
import Products from "./Products";
import {AiOutlineSearch} from "react-icons/ai"
import { useState } from "react";

const MainProducts = () => {
    const product = useSelector((state) => state.products.products)
    console.log(product)
    const [search, setSearch] = useState('')

    const liveSearch = product.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

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
          <div className={styles.search}>
              <input type="text" required value={search} onChange={handleChange}/>
              <span><AiOutlineSearch fontSize={"26"}/></span>
          </div>
              <ul className={styles.tovars}>
                  {catgories.map((categories, index) => {
                      return (
                          <li>{categories.title}</li>
                      )
                  })}
              </ul>
      </div>
      <Products liveSearch={liveSearch}/>
    </div>
  );
};

export default MainProducts;
