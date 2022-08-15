import React from "react";
import styles from "./Footer.module.css";
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import {FaWhatsappSquare, FaYoutubeSquare, FaInstagramSquare} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.magazine}>
          <span>КОМПАНИЯ</span>
          <Link to="#">О нас</Link>
          <Link to="#">Новости</Link>
          <Link to="#">Работники</Link>
          <Link to="#">Партнерство</Link>
          <Link to="#">Договор</Link>
          <Link to="#">Конфеденциальность информации</Link>
        </div>
        <div className={styles.categories}>
          <span>СЕРВИС</span>
          <Link to="#">Доставка и оплата</Link>
          <Link to="#">Возврат</Link>
          <Link to="#">Гид по стилю</Link>
          <Link to="#">Коллекции</Link>
          <Link to="#">Услуги</Link>
          <Link to="#">Подобрать размер</Link>
        </div>
        <div className={styles.links}>
          <span>КОНТАКТЫ</span>
          <Link to="#">Обратная связь</Link>
          <Link to="#">О нас</Link>
        </div>
        <div className={styles.contact_us}>
            <h1>8938-901-39-66</h1>
            <h1>8964-068-11-93</h1>
            <p>Заказать обратный звонок</p>
            <div className={styles.navigate}>
                <span><FaWhatsappSquare /></span>
                <span><FaYoutubeSquare /></span>
                <span><AiFillFacebook /></span>
                <span><FaInstagramSquare /></span>
            </div>
        </div>
    </div>
  );
};

export default Footer;
