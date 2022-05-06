import React from "react";
import styles from "../header/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.head}>
        <h1>Testowa strona z Quizem</h1>
      </div>
      <div className={styles.desc}>
        <h2>
         Testowa strona z quizem lorem ipsum
         Qui veniam non Lorem duis consequat ad ullamco.Sit pariatur qui eiusmod exercitation. Quis minim et enim consectetur laborum ut sit deserunt minim laboris ea non. Nostrud ut Lorem nostrud cillum proident cillum cillum cillum. Et duis sint enim dolore nulla proident laborum sint in labore deserunt minim deserunt.
abore excepteur veniam elit culpa sunt duis ut voluptate et pariatur irure. Consequat Lorem culpa ve
        </h2>
      </div>
    </div>
  );
};

export default Header;
