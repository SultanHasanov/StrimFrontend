import React from 'react';
import styles from "./Kontact.module.css";


const Kontact = () => {
    return (
      <div className={styles.kontact} style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
        <div>
        Сайт находится в разработке, функционал не до конца реализован
          Если вам срочно нужно с кем то поговорить. Позвоните по номеру
          неотложной психологической помощи: +7 (499) 173-09-09
        </div>
      </div>
    );
};

export default Kontact;