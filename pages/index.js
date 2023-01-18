import React from "react";
import styles from "../style/index.module.scss";
import Button from "../components/button/button";
import Layout from "../components/layout/layout";
import Line from "../components/line";
export default function Home() {

  return (
    <>
      <Layout>
      
      <div className={styles.header}>
      <div className={styles.head}>Japanese kana quiz</div>
      <div className={styles.line}>
        <Line color="#241f1f" margin="1% 30% 0 30%" />
      </div>
      <div className={styles.desc}>
        <h2>Welcome on my Japanese quiz project! On this website you'll be able to test your hiragana and Katakana knowlege! Feel free to give me a feedback and have fun!</h2>
      </div>
    </div>
        <div className={styles.buttons}>
          <Button style={styles.button} href="/kana">
           <b>Practice kana</b>
          </Button>
          <button className={styles.button} href="/feedback">
          Feedback :)
          </button>
        </div>
      </Layout>

    </>
  );
}
