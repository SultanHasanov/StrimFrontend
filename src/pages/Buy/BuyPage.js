import React, { useState } from 'react';
import styles from './BuyPage.module.css';
const BuyPage = () => {
    const [price, setPrice] = useState(0)
    const [time, setTime] = useState('')


    const handlePochta = () => {
        setPrice(100)
        setTime('2 месяца')
    }
    const handleDPD = () => {
        setPrice(700)
        setTime('3 недели')
    }
    const handleCDEK = () => {
        setPrice(1300)
        setTime('1 неделя')
    }
    return (
        <div>
            <div className={styles.bodyTitle}>
                <div className={styles.title}>
                    <h1>КАРТОЧКА ПОКУПКИ</h1>
                </div>
            </div>
            <div className={styles.bodyMain}>
                <div className={styles.info}>
                    <div>
                        Введите имя и фамилию получателя: <input></input>
                    </div>
                    <div>
                        Введите серию и номер получателя: <input></input>
                    </div>
                    <div>
                        Введите адрес получателся получателя: <input></input>
                    </div>
                    <div>
                        Введите почтовый индекс: <input></input>
                    </div>
                    <div>
                        Введите способ оплаты: <input></input>
                    </div>
                    <div>
                        Итого к оплате: 
                    </div>

                </div>
                <div className={styles.delivery}>
                    <div>
                        Выберите спосооб доставки:
                    </div>
                    <div>
                        <img src='https://irecommend.ru/sites/default/files/product-images/10297/pochta_rossii-1.jpg' alt='' className={styles.image} /> <button onClick={handlePochta}>Почта России</button>
                    </div>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png' alt='' className={styles.image} /> <button onClick={handleDPD}>DPD</button>
                    </div>
                    <div>
                        <img src='https://int-sm.ru/upload/iblock/4a3/4a3f65f4568dee5b9a73d9bdb22f34b2.jpg' alt='' className={styles.image} /> <button onClick={handleCDEK}>СДЭК</button>
                    </div>
                    <div>
                        <div>Цена доставки: {price}₽</div>
                    </div>
                    <div>
                        <div>Время доставки: {time}</div>
                    </div>
                </div>
            </div>
        </div>    );
};

export default BuyPage;