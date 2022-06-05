import React from "react";
import styles from "../header/header.module.scss";
import Line from "../line";
const Header = ({ children, title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.head}>
        {title}
        <Line color="#241f1f" margin="1% 30% 0 30%" />
      </div>
      <div className={styles.desc}>
        <h2>{children}</h2>
      </div>
 
    </div>

  
  );
};

export default Header;
