import React, { useState } from 'react';
import styles from './SignIn.module.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const SignIn = () => {
 const [state, setState] = useState(false)

    const handleToggle = () => {
        setState(!state)
    }


    return (
        <div className={styles.signUp}>
                <h1 className={styles.reg}>Войти</h1>
            <form className={styles.form}>
                <input type="text" placeholder='Логин' required/>
                <div className={styles.password}>
                <input type={state ? 'text' : 'password'} placeholder='Пароль' required/>
                {state ? <AiOutlineEyeInvisible onClick={handleToggle} className={styles.glaz}/> : <AiOutlineEye onClick={handleToggle} className={styles.glaz}/>}
                </div>
                <button className={styles.btn}>Зарегистрироваться</button>
                <div className={styles.text}>Нет аккаунта? <Link className={styles.regist} to="/register">Зарегистрируйтесь</Link></div>
                
            </form>
        </div>
    );
};

export default SignIn;