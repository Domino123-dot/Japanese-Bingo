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


/* 
         Free to use japanese kana quiz, you can practice your Hiragana and Katakana 
         knowlege in "Practice kana" section of this website, on the other hand I present to you "Practice writing"
         where you can practice your kana knowlege by writing whole words, enjoy! */

         
        /*
        <h1>Japanese kana quiz!</h1>
       */