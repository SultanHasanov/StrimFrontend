import React from "react";
import styles from "./MainIncome.module.css";

const MainIncome = () => {
  return (
    <div className={styles.main_income}>
      <div className={styles.title}>
          <h1>НОВЫЕ ПОСТУПЛЕНИЯ</h1>
        <div className={styles.new_income_block}>
        </div>
      </div>
    </div>
  );
};

export default MainIncome;
