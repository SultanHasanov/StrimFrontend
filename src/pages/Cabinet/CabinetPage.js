import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CabinetPage.module.css'
import photo from './photo-v-lk/photo v lk.png'

const CabinetPage = () => {
    const login = localStorage.getItem('login')
    const name = localStorage.getItem('name')
    const surname = localStorage.getItem('surname')
    const phone = localStorage.getItem('phone')
    return (
      <div className={styles.body}>
        <div className={styles.photo}>
          <img src={photo}></img>
        </div>
        <div className={styles.bodyMain}>
          <div className={styles.login}>Ваш личный кабинет: Mr.{login}</div>
          <div className={styles.infoTitle}>Персональная информация:</div>
          <div className={styles.info}>
            <span style={{ fontWeight: "bold" }}>Имя: </span>
            {name}
          </div>
          <div className={styles.info}>
            <span style={{ fontWeight: "bold" }}>Фамилия: </span> {surname}
          </div>
          <div className={styles.info}>
            <span style={{fontWeight: 'bold'}}>Номер телефона: </span> {phone}
            </div>
          <div className={styles.info}>
            Если информация не верна, то{" "}
            <Link to="/cabinetChange" className={styles.link}>
              можете изменить ее
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CabinetPage;