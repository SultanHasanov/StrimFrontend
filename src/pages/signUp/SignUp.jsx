import React, { useState } from 'react';
import styles from './SignUp.module.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'


const SignUp = () => {
    
    const [state, setState] = useState(false)

    const handleToggle = () => {
        setState(!state)
    }


    return (
        <div className={styles.signUp}>
                <h1 className={styles.reg}>Зарегистрироваться</h1>
            <form className={styles.form}>
                <input type="text" placeholder='Имя' required/>
                <input type="text" placeholder='Фамилия' required/>
                <input type="number" placeholder='Номер телефона' required/>
                <input type="text" placeholder='Логин' required/>
                <div className={styles.password}>
                <input type={state ? 'text' : 'password'} placeholder='Пароль' required/>
                {state ? <AiOutlineEyeInvisible onClick={handleToggle} className={styles.glaz}/> : <AiOutlineEye onClick={handleToggle} className={styles.glaz}/>}
                </div>
                <button className={styles.btn}>Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default SignUp;