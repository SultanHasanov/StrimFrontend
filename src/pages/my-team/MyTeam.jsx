import React from 'react';
import styles from './MyTeam.module.css'
import mikail from '../my-team/image/mikail.png'
import raibek from '../my-team/image/raibek.png'
import { BsPersonFill } from 'react-icons/bs'


const MyTeam = () => {
    return (
        <div className="conteiner">
        <div className={styles.wrapper}>
            <h1 className={styles.name1}>Minkail</h1>
            <div className={styles.bloc1}>
                <img src={mikail}></img>
            </div>
                <div className={styles.bloc2}>
                    <div className={styles.bloc3}>
                    <h1 className={styles.name1}>Raibek</h1>
                        <img src={raibek}></img>
                    </div>
                    <div className={styles.bloc3}>
                        <h1 className={styles.name1}>Sultan</h1>
                        <BsPersonFill className={styles.icon}/>
                    </div>
                    <div className={styles.bloc3}>
                        <h1 className={styles.name1}>Turpal</h1>
                        <BsPersonFill className={styles.icon}/>
                    </div>
                    <div className={styles.bloc3}>
                        <h1 className={styles.name1}>Islam</h1>
                        <BsPersonFill className={styles.icon}/>
                    </div>
                </div>
                 </div>

                <div className={styles.bloc4}>
            <div className={styles.bloc5}>
                    <h1 className={styles.name}>Minkail</h1>
                <img className={styles.img_2} src={mikail}></img>
                <div className={styles.text}>Тимлид и просто холоший человек</div>
            </div>
                    <div className={styles.bloc5}>
                    <h1 className={styles.name}>Raibek</h1>
                        <img className={styles.img_2} src={raibek}></img>
                        <div className={styles.text}>Бэк и по совместительству зам тимлида</div>
                    </div>
                    <div className={styles.bloc5}>
                        <h1 className={styles.name}>Sultan</h1>
                        <BsPersonFill className={styles.icon_2}/>
                        <div className={styles.text}>Верстка компонентов</div>
                    </div>
                    <div className={styles.bloc5}>
                        <h1 className={styles.name}>Turpal</h1>
                        <BsPersonFill className={styles.icon_2}/>
                        <div className={styles.text}>Бэк</div>
                    </div>
                    <div className={styles.bloc5}>
                        <h1 className={styles.name}>Islam</h1>
                        <BsPersonFill className={styles.icon_2}/>
                        <div className={styles.text}>Оффлайн</div>
                    </div>
                </div>
       
        </div>
    );
};

export default MyTeam;