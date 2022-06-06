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
        <h2>Free to use japanese kana quiz, you can practice your Hiragana and
          Katakana knowlege in "Practice kana" section of this website, on the
          other hand I present to you "Practice writing" where you can practice
          your kana knowlege by writing whole words, enjoy!</h2>
      </div>
    </div>
        <div className={styles.buttons}>
          <Button style={styles.button} href="/kana">
            Practice kana
          </Button>
          <button className={styles.buttonDisabled} disabled href="/Writing">
          Coming Soon
          </button>
        </div>
      </Layout>

    </>
  );
}
