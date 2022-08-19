import React from "react";
import styles from './MainProducts.module.css'
import { Link } from "react-router-dom";

const Categories = () => {
  const catgories = [
    {
      id: 1,
      title: "Все товары",
    },

    {
      id: 2,
      title: "Костюмы",
    },

    {
      id: 3,
      title: "Брюки",
    },

    {
      id: 4,
      title: "Очки",
    },

    {
      id: 5,
      title: "Рубашки",
    },

    {
      id: 6,
      title: "Часы",
    },

    {
      id: 7,
      title: "Обувь",
    },
  ];
  return (
    <ul className={styles.tovars}>
      {catgories.map((categories, index) => {
        return (
          <Link to="#">
            <li onClick={(e) => console.log(categories.title)}>{categories.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Categories;
