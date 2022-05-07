import React from "react";
import styles from "../header/header.module.scss";

const Header = ({children,title}) => {
  return (
    <div className={styles.header}>
      <div className={styles.head}>
       {title}
      </div>
      <div className={styles.desc}>
        <h2>
          {children}
          

        </h2>
      </div>
    </div>
  );
};

export default Header;

