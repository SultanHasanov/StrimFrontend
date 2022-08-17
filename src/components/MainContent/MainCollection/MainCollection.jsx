import React from "react";
import styles from "./MainCollection.module.css";
import { Link } from "react-router-dom";

const MainCollection = () => {
  return (
    <div className={styles.main_collection}>
      <div className={styles.hours_block}>
        <h3>ИТАЛЬЯНСКАЯ ОБУВЬ</h3>
        <div className={styles.liniya}></div>
        <button>
          <Link to="/catalog">КАТАЛОГ</Link>
        </button>
      </div>
      <div className={styles.catalog_block}>
        <h3>БРЕНДОВЫЕ ЧАСЫ</h3>
        <div className={styles.liniya}></div>
        <button>
          <Link to="/catalog">КАТАЛОГ</Link>
        </button>
      </div>
    </div>
  );
};

export default MainCollection;
