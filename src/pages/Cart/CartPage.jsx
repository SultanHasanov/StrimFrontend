import React, { useEffect } from "react";
import styles from "./CartPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./../../components/features/cartSlice";
import { VscLocation } from "react-icons/vsc";
import { GiBusStop } from "react-icons/gi";
import { getProducts } from "../../components/features/productsSlice";
import {
  deleteProductInBasket,
  incrementAmountProduct,
  decrementAmountProduct,
} from "./../../components/features/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProductInBasket({ productId }));
  };
  const handleIncrement = (productId) => {
    dispatch(incrementAmountProduct({ productId }));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementAmountProduct({ productId }));
  };

  const cart = useSelector((state) => state.cart.cart.products);
  const products = useSelector((state) => state.products.products);
  const imageProducts = useSelector((state) => state.products.products.name);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  if (cart) {
    const cartProducts = cart.map((cartItem) => {
      return products.map((product) => {
        if (cartItem.productId === product._id) {
          return (
            <>
              <div className={styles.line}></div>
              <div className={styles.card_prod}>
                <div className={styles.image_block}>
                  {product.images.map((images) => {
                    if (images.color === "black") {
                      return <img src={images.image} alt="" />;
                    }
                  })}
                </div>
                <div className={styles.info_prices}>
                  <div className={styles.prod_name}>
                    <span>{product.name}</span>
                  </div>
                  <table className={styles.table}>
                    <thead>
                      <tr className={styles.tr}>
                        <th>Размер</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Итого</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.tr}>
                        <td>{product.size}</td>
                        <td>{product.price} ₽</td>
                        <td>
                          <button
                            className={styles.btn1}
                            onClick={() => handleIncrement(cartItem.productId)}
                          >
                            +
                          </button>
                          <span>{cartItem.amount}</span>
                          <button
                            disabled={cartItem.amount <= 1 ? true : false}
                            className={styles.btn2}
                            onClick={() => handleDecrement(cartItem.productId)}
                          >
                            -
                          </button>
                        </td>
                        <td>{cartItem.amount * product.price} ₽</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={styles.next_func}>
                    <button>Сохранить на потом</button>
                    <button onClick={() => handleDelete(cartItem.productId)}>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        }
      });
    });

    return (
      <div className={styles.back}>
        <div className={styles.title}>
          <h1>КОРЗИНА ПОКУПОК</h1>
        </div>
        <div className={styles.main_content}>
          <div className={styles.cartInfo}>
            <div className={styles.location}>
              <VscLocation />
              <span>Отправка в Russian Federation</span>
            </div>
            <div className={styles.location}>
              <GiBusStop fontSize={"1.5rem"} />
              <span style={{ marginLeft: "0.6rem" }}>
                БЕСПЛАТНЫЙ САМОВЫВОЗ В УДОБНЫЙ ПУНКТ ВЫДАЧИ!
              </span>
            </div>
            <div className={styles.products_cart}>
              <h2>Краткое описание товара</h2>
              <div className={styles.products}>{cartProducts}</div>
            </div>
          </div>
          <div className={styles.buy_info}>
            <div className={styles.buy_main}>
              <h3>ИТОГО ЗАКАЗА</h3>
              <div className={styles.itogo}>
                <span>Промежуточная цена:</span>
                <h2>{}</h2>
              </div>
              <div className={styles.btn_oplata}>
                <Link to="/buy">
                  <button>ПЕРЕЙТИ К ОПЛАТЕ</button>
                </Link>
              </div>
            </div>
            <div className={styles.sposob_oplati}></div>
          </div>
        </div>
      </div>
    );
  }
};

export default CartPage;
