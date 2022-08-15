import React from "react";
import styles from "./MainCollection.module.css";
import { Link } from "react-router-dom";

const MainCollection = () => {
  return (
    <div className={styles.main_collection}>
      <div className={styles.hours_block}>
        <h3>КОЛЛЕКЦИЯ 2022</h3>
        <div className={styles.liniya}></div>
        <div className={styles.collection}>
            <h4>Коллекции бренда подразделяются на несколько направлений:</h4>
            <span>- строгий и деловой BLACK LABEL;</span>
            <span>- элегантный и утонченный LIMITED EDITION;</span>
            <span>- повседневный и практичный WEEKEND;</span>
            <span>- демократичный и комфортный CONCEPT;</span>
            <span>- легкий и солнечный CRUISE;</span>
            <span>- торжественный CEREMONY.</span>
        </div>
      </div>
      <div className={styles.catalog_block}>
          <h3>
              НОВАЯ КОЛЛЕКЦИЯ
          </h3>
          <div className={styles.liniya}></div>
          <button><Link to="/catalog">КАТАЛОГ</Link></button>
      </div>
      
    </div>
  );
};

export default MainCollection;
