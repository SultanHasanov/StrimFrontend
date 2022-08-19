import React from "react";
import styles from "./HeaderMain.module.css";
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import {AiOutlineShopping} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import PersistentDrawerLeft from '../MainContent/Slider/PersistentDrawerLeft';
import Navbar from "./dropDown/components/Navbar";
import './Navbar.css'



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
              <Link to="/my-team">О НАС</Link>
              <Link to="/cart"><AiOutlineShopping fontSize={"1.5rem"}/></Link>
          </div>
        </div>
        <div className='nav-area'><Navbar /></div>
      </div>
    </div>
  );
};

export default HeaderMain;
