import React from 'react'
import styles from './Header.module.css'
import {BsTelephone} from 'react-icons/bs'
import {VscSignIn} from "react-icons/vsc"
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signOut } from '../features/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const handleOut = () => {
    dispatch(signOut())
  }

  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.working_time}>
                <BsTelephone />
                <span>|</span>
                <span>Работаем 7 дней в неделю</span>
                <span>|</span>
                9:00 - 18:00
            </div>
            <div className={styles.auth}>
                <VscSignIn style={{cursor: 'pointer'}} onClick={handleOut}/>
                <Link to="/auth">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header
