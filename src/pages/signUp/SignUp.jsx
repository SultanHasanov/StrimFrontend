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
    const [passwordError, setPasswordError] = useState('')
    const [nameError, setNameError] = useState('')
    const [surNameError, setSurNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [loginError, setLoginError] = useState('')

    const handleToggle = () => {
        setState(!state)
    }

    const handleName = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 8) {
          setNameError("Имя должно быть длинее 2 и меньше 8");
          if (!e.target.value) {
            setNameError("Поле не может быть пустым");
          }
        } else {
          setNameError("");
        }
    }

    const handleSurName = (e) => {
        setSurName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 8) {
          setSurNameError("Фамилия должна быть длинее 2 символов");
          if (!e.target.value) {
            setSurNameError("Поле не может быть пустым");
          }
        } else {
          setSurNameError("");
        }

    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 8) {
          setPhoneError("Номер должен быть длинее 2 и меньше 12");
          if (!e.target.value) {
            setPhoneError("Поле не может быть пустым");
          }
        } else {
          setPhoneError("");
        }
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
        if(e.target.value.length < 2 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть длинее 2 и меньше 8')
            if(!e.target.value) {
                setPasswordError('Поле не может быть пустым');
            }
        } else {
            setPasswordError('')
        }
        
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
                {nameError && <div style={{color:'red', textAlign: 'left', fontSize: '0.8rem'}}>{nameError}</div>}
                <input type="text" placeholder='Фамилия' value={surname} onChange={handleSurName} required/>
                {surNameError && <div style={{color:'red', textAlign: 'left', fontSize: '0.8rem'}}>{surNameError}</div>}
                <input type="number" placeholder='Номер телефона' value={phone} onChange={handlePhone} required/>
                {phoneError && <div style={{color:'red', textAlign: 'left', fontSize: '0.8rem'}}>{phoneError}</div>}
                <input type="text" placeholder='Логин' value={login} onChange={handleLogin} required/>
                {loginError && <div style={{color:'red', textAlign: 'left', fontSize: '0.8rem'}}>{loginError}</div>}
                <div className={styles.password}>
                <input type={state ? 'text' : 'password'} placeholder='Пароль' value={password} onChange={handlePassword} required/>
                {state ? <AiOutlineEyeInvisible onClick={handleToggle} className={styles.glaz}/> : <AiOutlineEye onClick={handleToggle} className={styles.glaz}/>}
                </div>
                {passwordError && <div style={{color:'red', textAlign: 'left', fontSize: '0.8rem'}}>{passwordError}</div>}
                <button className={styles.btn} onClick={handleSignUp}>Зарегистрироваться</button>
                <div className={styles.text}>Если вы уже зарегистрированы <Link className={styles.regist} to="/auth">Войдите</Link></div>
            </form>
        </div>
    );
};

export default SignUp;