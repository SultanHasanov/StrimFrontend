import React from "react";
import styles from "./MainIncome.module.css";

const MainIncome = () => {
  return (
    <div className={styles.main_income}>
      <div className={styles.title}>
        <h1>НОВЫЕ ПОСТУПЛЕНИЯ</h1>
        <div className={styles.liniya}></div>
      </div>
    </div>
  );
};

export default MainIncome;
