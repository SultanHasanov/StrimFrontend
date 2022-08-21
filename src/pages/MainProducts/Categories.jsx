import React from "react";
import styles from './MainProducts.module.css'
import { Link } from "react-router-dom";

const Categories = () => {
  const catgories = [
    {
      id: 2,
      title: "Костюмы",
      route: "kostums"
    },

    {
      id: 3,
      title: "Брюки",
      route: "bruks"
    },

    {
      id: 4,
      title: "Очки",
      route: "ochki"
    },

    {
      id: 5,
      title: "Рубашки",
      route: "rubashks"
    },

    {
      id: 6,
      title: "Часы",
      route: "clocks"
    },

    {
      id: 7,
      title: "Обувь",
      route: "obuv"
    },
  ];
  return (
    <ul className={styles.tovars}>
      {catgories.map((categories, index) => {
          const indexRoute = `/${categories.route}`
        return (
          <Link to={indexRoute}>
            <li>{categories.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Categories;
