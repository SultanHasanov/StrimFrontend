import React, { useEffect, useState } from 'react';
import styles from './SignIn.module.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../../components/features/userSlice';

const SignIn = () => {
    const token = useSelector((state) => state.user.token)
    const dispatch = useDispatch();
 const [state, setState] = useState(false)
 const [login, setLogin] = useState('')
 const [password, setPassword] = useState('')

    const handleToggle = () => {
        setState(!state)
    }

    const handleLogin = (e) => {
        setLogin(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSignIn = () => {
        dispatch(postLogin({login, password}))
        console.log('Отправка логина и парол')
    }


    return (
        <div className={styles.signUp}>
                <h1 className={styles.reg}>Войти</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder='Логин' value={login} onChange={handleLogin} required/>
                <div className={styles.password}>
                <input type={state ? 'text' : 'password'} placeholder='Пароль' value={password} onChange={handlePassword} required/>
                {state ? <AiOutlineEyeInvisible onClick={handleToggle} className={styles.glaz}/> : <AiOutlineEye onClick={handleToggle} className={styles.glaz}/>}
                </div>
                <button className={styles.btn}  onClick={handleSignIn}>Войти</button>
                <div className={styles.text}>Нет аккаунта? <Link className={styles.regist} to="/register">Зарегистрируйтесь</Link></div>
                <div style={{color: 'red'}}>{token}</div>
            </form>
        </div>
    );
};

export default SignIn;