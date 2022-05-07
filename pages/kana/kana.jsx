import React from "react";
import Header from "../../components/header/header";
import Line from "../../components/line.js";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import styles from "../kana/kana.module.scss";
const kana = () => {
  return (
    <>
      <Header title="Practice kana">
        In this section you can practice your kana knowlege, you can choose
        between japanese hiragana, katakana their combinations or you can select
        all kana where you'll be able to quiz yourself from literally everything
        (except for kanji).
      </Header>

      <div className={styles.buttons}>
        <Button style={styles.button} href="/kana">Hiragana</Button>
        <Button style={styles.button}>Katakana</Button>
        <Button style={styles.button}>Hiragana and Katakana</Button>
      </div>

      <div className={styles.kana}>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
      </div>
      <div className={styles.dakuten}>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
      </div>
      <div className={styles.combination}>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
        <Button href="/kana">Hiragana</Button>
      </div>
      <Line />
      <Footer />
    </>
  );
};

export default kana;
