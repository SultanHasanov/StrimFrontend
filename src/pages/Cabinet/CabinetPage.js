import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CabinetPage.module.css'

const CabinetPage = () => {
    const login = localStorage.getItem('login')
    const name = localStorage.getItem('name')
    const surname = localStorage.getItem('surname')
    const phone = localStorage.getItem('phone')
    return (
        <div className={styles.body}>
            <div className={styles.bodyMain}>
                <div className={styles.login}>
                    Ваш личный кабинет:  Mr.{login}
                </div>
                <div className={styles.infoTitle}>
                    Персональная информация:
                </div>
                <div className={styles.info}>
                    Ваше Имя: {name}
                </div>
                <div className={styles.info}>
                    Ваша Фамилия: {surname}
                </div>
                <div className={styles.info}>
                    Ваша номер телефона: {phone}
                </div>
                <div className={styles.info}>
                    Если информация не верна, то <Link to='/cabinetChange' className={styles.link}>можете изменить ее</Link>
                </div>

            </div>
        </div>
    );
};

export default CabinetPage;