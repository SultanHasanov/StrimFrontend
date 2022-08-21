import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPofileRequest } from '../../components/features/profile.Slice';
import styles from './CabinetPage.module.css'
import photo from './photo-v-lk/photo v lk.png'

const CabinetPage = () => {
    const {profile} = useSelector(state => state);
    // console.log({profile});
    const {token} = useSelector(state => state.user)
    // console.log({token});
    const dispatch = useDispatch();
    const id = localStorage.getItem('login')
    // const name = localStorage.getItem('name')
    // const surname = localStorage.getItem('surname')
    // const phone = localStorage.getItem('phone')
    useEffect(() => {
      dispatch(getPofileRequest(token.id));
    }, [token]); 
    return (
      <div className={styles.body}>
        <div className={styles.photo}>
          <img src={photo}></img>
        </div>
        <div className={styles.bodyMain}>
          <div className={styles.login}>
            Ваш личный кабинет: Mr.{profile.profile.login}
          </div>
          <div className={styles.infoTitle}>Персональная информация:</div>
          <div className={styles.info}>
            <span style={{ fontWeight: "bold" }}>Имя: </span>
            {profile.profile.name}
          </div>
          <div className={styles.info}>
            <span style={{ fontWeight: "bold" }}>Фамилия: </span>
            {profile.profile.surname}
          </div>
          <div className={styles.info}>
            <span style={{ fontWeight: "bold" }}>Номер телефона: </span> 
            {profile.profile.phone}
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