import React, { useState } from 'react';
import styles from './SignUp.module.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { postUser } from '../../components/features/userSlice';
import { useDispatch } from 'react-redux';


const SignUp = () => {
    const dispatch = useDispatch()
    
    const [state, setState] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [phone, setPhone] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleToggle = () => {
        setState(!state)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSurName = (e) => {
        setSurName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleLogin = (e) => {
        setLogin(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = () => {
        dispatch(postUser({name, surname, phone, login, password}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className={styles.signUp}>
                <h1 className={styles.reg}>Регистрация</h1>
            <form className={styles.form} onChange={handleSubmit}>
                <input type="text" placeholder='Имя' value={name} onChange={handleName} required/>
                <input type="text" placeholder='Фамилия' value={surname} onChange={handleSurName} required/>
                <input type="number" placeholder='Номер телефона' value={phone} onChange={handlePhone} required/>
                <input type="text" placeholder='Логин' value={login} onChange={handleLogin} required/>
                <div className={styles.password}>
                <input type={state ? 'text' : 'password'} placeholder='Пароль' value={password} onChange={handlePassword} required/>
                {state ? <AiOutlineEyeInvisible onClick={handleToggle} className={styles.glaz}/> : <AiOutlineEye onClick={handleToggle} className={styles.glaz}/>}
                </div>
                <button className={styles.btn} onClick={handleSignUp}>Зарегистрироваться</button>
                <div className={styles.text}>Если вы уже зарегистрированы <Link className={styles.regist} to="/auth">Войдите</Link></div>
            </form>
        </div>
    );
};

export default SignUp;