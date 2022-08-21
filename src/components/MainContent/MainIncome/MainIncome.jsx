import React from "react";
import styles from "./MainIncome.module.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const MainIncome = () => {
  const icomeProducts = [
    {
      image:
        "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/8713434_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp",
      name: "Men's Ready Flex",
      price: 25000,
    },

    {
      image:
        "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8712701_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp",
      name: "Men's Solid Black",
      price: 23200,
    },
    

    {
      image:
        "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/21649775_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp",
      name: "Men's Slim-Fit Suit",
      price: 32300,
    },

    {
      image:
        "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/21146101_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp",
      name: "Andrew Marc Men's",
      price: 17500,
    },

    
  ];

  const getProducts = icomeProducts.map((item, index) => {
    return (
      <div className={styles.product}>
        <div>
          <img src={item.image} alt="logo" />
        </div>
        <div className={styles.info_product}>
          <span>{item.name}</span>
          <span>{item.price} ₽</span>
        </div>
      </div>
    );
  });
  
  return (
    <div className={styles.main_income}>
      <div className={styles.title}>
        <h1>НОВЫЕ ПОСТУПЛЕНИЯ</h1>
        <div className={styles.new_income_block}>
      <Carousel>
          {getProducts}
      </Carousel>
          </div>

        <div className={styles.catalog_block}>
          <button>
            <Link to="/products">ПРОСМОТРЕТЬ ТОВАРЫ</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainIncome;
