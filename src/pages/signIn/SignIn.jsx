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
 const [loginError, setLoginError] = useState("");
 const [passwordError, setPasswordError] = useState("");

    const handleToggle = () => {
        setState(!state)
    }

    const handleLogin = (e) => {
        setLogin(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 8) {
          setLoginError("Логин должен быть длинее 2 и меньше 8");
          if (!e.target.value) {
            setLoginError("Поле не может быть пустым");
          }
        } else {
          setLoginError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
         if (e.target.value.length < 2 || e.target.value.length > 8) {
           setPasswordError("Пароль должен быть длинее 2 и меньше 8");
           if (!e.target.value) {
             setPasswordError("Поле не может быть пустым");
           }
         } else {
           setPasswordError("");
         }
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
                {loginError && <div style={{color:'red', textAlign: 'left', fontSize: '0.8rem'}}>{loginError}</div>}
                <div className={styles.password}>
                <input type={state ? 'text' : 'password'} placeholder='Пароль' value={password} onChange={handlePassword} required/>
                {state ? <AiOutlineEyeInvisible onClick={handleToggle} className={styles.glaz}/> : <AiOutlineEye onClick={handleToggle} className={styles.glaz}/>}
                </div>
                {passwordError && <div style={{color:'red', textAlign: 'left', fontSize: '0.8rem'}}>{passwordError}</div>}
                <button className={styles.btn}  onClick={handleSignIn}>Войти</button>
                <div className={styles.text}>Нет аккаунта? <Link className={styles.regist} to="/register">Зарегистрируйтесь</Link></div>
                <div style={{color: 'red'}}>{token}</div>
            </form>
        </div>
    );
};

export default SignIn;