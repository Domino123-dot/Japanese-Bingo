import React from "react";
import Header from "../components/header/header";
import styles from "../style/index.module.scss";
import Line from "../components/line";
export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.buttons}>
    
      <button className={styles.button1}>Practice writing systems</button>
      <button className={styles.button2}>Practice kana</button>

      </div>
      <Line />
    </>
  );
}
