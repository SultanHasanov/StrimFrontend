import React from "react";
import styles from "./HeaderMain.module.css";
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import {AiOutlineShopping} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import PersistentDrawerLeft from '../MainContent/Slider/PersistentDrawerLeft';



const HeaderMain = () => {
  return (
    <div className={styles.header_main}>
        <PersistentDrawerLeft />
      <div className={styles.container}>
        <div className={styles.name_logo}>
          <Link to="/"><h1>MISTER</h1></Link>
        </div>
        <div className={styles.buy_settings}>
          <div className={styles.info_buy}>
              <Link to="/favorite">ПОНРАВИЛОСЬ</Link>
              <Link to="/favorite">ЛИЧНЫЙ КАБИНЕТ</Link>
              <Link to="/favorite">НАСТРОЙКИ</Link>
              <Link to="/card"><AiOutlineShopping fontSize={"1.5rem"}/></Link>
              <Link to="/search"><BsSearch fontSize={"1.1rem"}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
