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
          This app is a companion to Tofugu’s Learn Hiragana Guide and Learn
          Katakana Guide. Use it to practice hiragana and katakana. If you
          haven’t learned kana yet, check out the hiragana guide or the katakana
          guide, then come back here.
        </h2>
      </div>
    </div>
  );
};

export default Header;
