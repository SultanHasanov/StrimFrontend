import { useSelector } from "react-redux";
import styles from "./MainProducts.module.css";
import Products from "./Products";
import {AiOutlineSearch} from "react-icons/ai"
import { useState } from "react";
import { Link } from 'react-router-dom';
import Categories from "./Categories";

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
          <Categories />
      </div>
      {}
      <Products liveSearch={liveSearch}/>
    </div>
  );
};

export default MainProducts;
