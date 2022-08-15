import React from "react";
import styles from "./MainWelcome.module.css";
import kv from "./kv.png";

const MainWelcome = () => {
  return (
    <div className={styles.main_welcome}>
      <div className={styles.center_block}>
        <img src={kv} alt="" />
        <div className={styles.center_title}>
          <h1> M I S T E R </h1>
          <div className={styles.liniya}></div>
          <h2>ГРОЗНЫЙ</h2>
        </div>
      </div>
      <div className={styles.end_title}>
          <span>Брутальный стиль только кажется простым. Это продуманный и гармоничный комплекс из прически, предметов гардероба и аксессуаров. Именно они создают нарочито небрежный тон в стиле альфа-самца, который неизбежно привлекает внимание противоположного пола.</span>
      </div>
    </div>
  );
};

export default MainWelcome;
